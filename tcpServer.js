import { createServer } from 'net';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';
import { randomFillSync } from 'crypto';

const PORT = 8080;          // custom port
const HOST = '0.0.0.0';     // public

let clients = 0;

const requestListener = (socket) => {
    clients++;
    console.log('Client connected:', clients);

    const datetime = new Date();

    socket.setEncoding('utf8');

    const now = {
        uuid4: uuidv4({ random: randomFillSync(new Uint8Array(16)) }),
        En_GB: datetime.toLocaleString('en-GB'),
        ISO: datetime.toISOString(),
        JSON: datetime.toJSON(),
        To_UTC_String: datetime.toUTCString(),
        To_Time_String: datetime.toTimeString(),
        To_LocaleString: datetime.toLocaleString(),
        TO_LocaleDateString: datetime.toLocaleDateString(),
        To_DateString: datetime.toDateString(),
        ms_since1970: datetime.getTime(),
        Custom_Time: `${datetime.getHours().toString().padStart(2, '0')}:${datetime.getMinutes().toString().padStart(2, '0')}:${datetime.getSeconds()}:${datetime.getMilliseconds()}`,
        Custom_Date: `${datetime.getFullYear()}-${(datetime.getMonth() + 1).toString().padStart(2, '0')}-${datetime.getDate().toString().padStart(2, '0')}`
    };

    const customNamespace = now.uuid4;
    now.uuidv5 = uuidv5('Hello World!', customNamespace);

    socket.write(`\r\n\n${JSON.stringify(now)} \r\n\n`);
    socket.end();

    socket.on('data', (data) => {
        console.log('Client Sent:', data.toString());
    });

    socket.on('end', () => {
        clients--;
        console.log('Client disconnected:', clients);
    });
};

const server = createServer(requestListener);

server.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});

server.on('error', (err) => {
    console.error('Server error:', err);
});

server.on('connection', (socket) => {
    console.log('Server has a new connection.');
});

server.on('listening', () => {
    console.log('Server is listening.');
});

server.on('close', () => {
    console.log('Server is closed.');
});

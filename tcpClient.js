import { createConnection } from 'net';

const PORT = 8080;      // custom port
const HOST = '...';     // custom address
const RETRY_INTERVAL = 3000; // ms
const MAX_RETRIES = 3;

let retriedTimes = 0;

const connectToServer = () => {
    const conn = createConnection(PORT, HOST);

    conn.setEncoding('utf-8');

    conn.on('connect', () => {
        console.log('\n\tConnected to the Server\n');
        console.log('\nRequesting data from Server\n');

        conn.write('Your Time is?\r\n', () => {
            console.log('Data was written out. Requested From Server');
        });
        conn.end();
    });

    conn.on('data', (data) => {
        console.log('\nBuffer Incoming Data:', data);
        console.log('\nString Incoming Data:', data.toString());
        console.log('\nJSON Buffer Object Incoming Data:', data.toJSON());
        console.log('\nJSON Object Incoming Data:', JSON.parse(data.toString()));
        console.log('\nCustom: ', `${JSON.parse(data.toString()).Custom_Date} --> ${JSON.parse(data.toString()).Custom_Time}`);
    });

    conn.on('close', (hadError) => {
        if (!hadError) {
            console.log(`\n\t\u2192 \u2192\t"Close" Event emitted: Socket is fully closed`);
        } else {
            retriedTimes++;
            console.log(`\n\t\u2192 \u2192\t"Close" Event emitted: Socket is fully closed due to an Error. ${retriedTimes < 4 ? 'Attempting reconnection ' + retriedTimes + '/3' : 'Reconnection times out'}`);

            if (retriedTimes >= MAX_RETRIES) {
                console.error('Max retries have been exceeded, giving up.');
                return;
            }

            setTimeout(connectToServer, RETRY_INTERVAL);
        }
    });

    conn.on('end', () => {
        console.log(`\n\t\u2192 \u2192\t"End" Event emitted: End of Server Transmission`);
    });

    conn.on('error', (err) => {
        console.error(`\n\t\u2192 \u2192\t"Error" Event emitted: ${err.message}`);
    });

    conn.on('lookup', (err, address, family, host) => {
        if (err) {
            console.error(`\n\t\u2192 \u2192\t"Lookup" Event emitted: Error resolving the host name: ${err.code}`);
            return;
        }
        console.log(`\n\t\u2192 \u2192\t"Lookup" Event emitted: Found ${address}: ${family}: ${host}`);
    });

    conn.on('ready', () => {
        console.log(`\n\t\u2192 \u2192\t"Ready" Event emitted: Socket is ready.`);
    });
};

connectToServer();

![NODE.JS](https://img.shields.io/badge/NODE.JS-%2343853D.svg?&style=plastic&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=plastic&logo=javascript&logoColor=f7df1e)

[![SWH](https://archive.softwareheritage.org/badge/swh:1:dir:3022219080921ea266808592fa83f3afc5242282/)](https://archive.softwareheritage.org/swh:1:dir:3022219080921ea266808592fa83f3afc5242282;origin=https://github.com/Ramy-Badr-Ahmed/node-tcp;visit=swh:1:snp:e0d42b65bc06365c756247a55b21ca431f17a53a;anchor=swh:1:rev:d9e2239926489996936d18aa5804ce1fc2503181) ![GitHub](https://img.shields.io/github/license/Ramy-Badr-Ahmed/nodejs-tcp_server-client?&color=green)

# TCP Communication with Node.js

A TCP server and client implementation using Node.js's `net` module, operating at the Transport Layer of the OSI Model.

This implementation focuses on direct communication without additional overhead such as data compression or encryption/decryption, suitable for safe and trusted networks.

The TLS variant (@Presentation-Layer of the OSI Model) is located here: [Node-TLS](https://github.com/Ramy-Badr-Ahmed/node-tls)

#### Some Use Cases:

- Network Diagnostics 
    > Test network connectivity and latency between network segments.

- Embedded Systems Communication
  > Integrate TCP client with embedded devices (e.g. Raspberry Pi, Arduino with Ethernet/Wi-Fi shields) to send data to a central server for monitoring and control.

- Time Synchronization
  > Use the server to provide a timestamp service for devices on a network, ensuring synchronized time across various systems.

- IoT Apps
    > Use the TCP server as a central hub to collect data from various IoT devices.
   
    > Set up the TCP client to send sensor data periodically from remote IoT devices to the server for analysis (centralized data receiver/logger).
  
#### Quick Start:
Server:
```shell
npm install
node tcpServer.js   # Runs Server
```
Client:
```shell
npm install
node tcpClient.js   # Runs Client
```  

Logs and Outputs:

The server and client will log various server/client events and actions, such as connection establishment, data transmission, and encountered errors.

References

- [Net Module](https://nodejs.org/api/net.html)

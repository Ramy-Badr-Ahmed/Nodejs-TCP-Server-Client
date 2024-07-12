![Node.js](https://img.shields.io/badge/node.js-100%25-green)
![GitHub top language](https://img.shields.io/github/languages/top/Ramy-Badr-Ahmed/node-tcp?cacheSeconds=1&color=yellow)
![GitHub](https://img.shields.io/github/license/Ramy-Badr-Ahmed/node-tcp?cacheSeconds=1&color=red)

# TCP Communication with Node.js

A TCP server and client implementation using Node.js's `net` module, operating at the Transport Layer of the OSI Model.

This implementation focuses on direct communication without additional overhead such as data compression or encryption/decryption, suitable for safe and trusted networks.

The TLS variant is located here: [Node-TLS](https://github.com/Ramy-Badr-Ahmed/node-tls)

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

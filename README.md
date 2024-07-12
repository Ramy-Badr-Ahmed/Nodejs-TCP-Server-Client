![Node.js](https://img.shields.io/badge/node.js-100%25-green)
![GitHub top language](https://img.shields.io/github/languages/top/Ramy-Badr-Ahmed/node-tcp?cacheSeconds=1&color=yellow)
![GitHub](https://img.shields.io/github/license/Ramy-Badr-Ahmed/node-tcp?cacheSeconds=1&color=red)

A TCP server and client implementation using Node.js's `net` module, operating at the Session Layer of the OSI Model.

#### Use Cases:

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
```shell
npm install
node tcpServer.js   # Runs Server
node tcpClient.js   # Runs Client
```  

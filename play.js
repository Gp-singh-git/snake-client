const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:'135.23.223.133' ,
    port:50542 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log("Server's data is: ", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();
const net = require("net");
const { IP, PORT } = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host:IP,
    port:PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log("Server's data is: ", data);
  });

  conn.on('connect', ()=> console.log("You have been connected to the Game server now !"))

  conn.on('connect', ()=> conn.write("Name: GUR"))
  
  return conn;
};


module.exports = { connect };
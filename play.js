const net = require("net");
const connect = require('./client.js');

// establishes a connection with the game server
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);


const handleUserInput = function () {
  stdin.on('data', (key)=> {
    if(key === '\u0003') {
      process.exit();
    }
  })
};


  return stdin;
};



console.log("Connecting ...");
connect();
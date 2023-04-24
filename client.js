const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: "50541", // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {  // this line listens for the "data" event on the connectionz
    console.log("Server says: ", data);
  });

  conn.on("idle", () => {

  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };
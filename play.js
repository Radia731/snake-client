const { host, port } = require(".play");
const { connect } = require("./client");

console.log("Connecting ...");
const conn = connect();

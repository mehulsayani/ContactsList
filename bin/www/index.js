const http = require("http");
const app = require("../../app");
const port = process.env.PORT || "9000";

app.set('port', port);
const server = http.createServer(app);
server.listen(port, function () {
    console.log("Server running on port: ", port);
});
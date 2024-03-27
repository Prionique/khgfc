var express = require("express");
var http = require("http");
var path = require("path");

var app = express();
var server = http.Server(app);
var port = 3002;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})
// Define route to handle form submission
app.post("/send", function (req, res) {
    var username = req.body.username; // Get the username from the form
    console.log("Submitted username:", username); // Log the username to the console
    res.send("Username logged successfully!"); // Send a response back to the client
});

server.listen(port, function () {
    console.log("Server started on port " + port);
});

const express = require("express");
const app = express();

app.use(express.static('./'));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/0index.html");
});

app.listen(3000, () => {
  console.log("connection success");
});
const express = require("express");
const app = express();
app.use(express.logger());
app.use("/", express.static(__dirname));

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello there from github ci/cd piple help");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

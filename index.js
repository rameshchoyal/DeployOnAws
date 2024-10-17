const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello there, I'm coming tomorrow. See you there!: updated deploy.sh ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

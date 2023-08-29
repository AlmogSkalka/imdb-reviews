// server/server.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

//routing api
app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

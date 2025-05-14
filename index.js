const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/api", (req, res) => {
  const count = req.query.count;
  console.log("req geldi");

  res.json({ message: "Data received from React!", count });
});
app.listen(5000, () => console.log("Server running on port 5000"));

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const schoolRoutes = require("./routes/SchoolRoutes");
app.use("/", schoolRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});

app.get("/", (req, res) => {
  res.send("School API is running");
});


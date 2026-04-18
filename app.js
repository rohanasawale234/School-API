const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const schoolRoutes = require("./routes/SchoolRoutes");
app.use("/", schoolRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("School API is running");
});

app.get("/addSchool", (req, res) => {
  res.send("Use POST request for this route");
});

app.get("/listSchools", (req, res) => {
  res.send("Use GET request for this route");
});
const db = require("../config/db");

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    db.prepare(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)"
    ).run(name, address, latitude, longitude);

    res.json({ message: "School added successfully" }); // ✅ IMPORTANT
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Distance function
function calculateDistance(lat1, long1, lat2, long2) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLong = ((long2 - long1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// List Schools
exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: "Location Required" });
  }

  try {
    const results = db.prepare("SELECT * FROM schools").all();

    const schoolWDistance = results.map((school) => {
      const distance = calculateDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );

      return { ...school, distance };
    });

    schoolWDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolWDistance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
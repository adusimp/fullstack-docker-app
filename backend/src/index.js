const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
// Cập nhật đường dẫn tương đối
const counterRoutes = require("./routes/counter");
const noteRoutes = require("./routes/notes");
const redisRoutes = require("./routes/redis");

app.use("/api", counterRoutes);
app.use("/api", noteRoutes);
app.use("/api", redisRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

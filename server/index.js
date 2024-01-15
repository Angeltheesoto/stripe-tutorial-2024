const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 5000;
const allowedOrigins = ["http://localhost:3000"];

// middleware
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error({ error: "Not allowed by CORS" });
        callback(null, false);
      }
    },
    optionsSuccessStatus: 204,
  })
);

// Paths
const billingRoutes = require("./routes/billing.js");

// Routes
app.get("/", (req, res) => {
  res.send("Server is live!");
});

app.use("/api", billingRoutes);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

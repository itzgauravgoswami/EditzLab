const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

// Built-in JSON & urlencoded parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic CORS headers
app.use((req, res, next) => {
  const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Root & Health check
app.get("/", (req, res) => {
  res.json({
    name: "EditzLab API Server",
    version: "1.0.0",
    status: "online",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

// Lead capture endpoint
app.post("/api/leads", (req, res) => {
  const { name, email, service, budget, notes } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: "Name and email are required fields.",
    });
  }

  // Simulated lead capture receipt
  const leadReceipt = {
    id: `lead_${Date.now()}`,
    name,
    email,
    service: service || "General Inquiry",
    budget: budget || "Flexible",
    notes: notes || "",
    status: "New",
    createdAt: new Date().toISOString(),
  };

  return res.status(201).json({
    success: true,
    message: "Lead inquiry captured successfully.",
    lead: leadReceipt,
  });
});

// Services listing
app.get("/api/services", (req, res) => {
  const services = [
    { id: "srv-1", name: "Website Development & Headless CMS", price: 45000, turnaround: "2-3 weeks" },
    { id: "srv-2", name: "Product & UI/UX Design System", price: 35000, turnaround: "1-2 weeks" },
    { id: "srv-3", name: "Commercial Video Editing & Motion", price: 18000, turnaround: "3-5 days" },
    { id: "srv-4", name: "Technical SEO & Speed Optimization", price: 15000, turnaround: "1 week" },
    { id: "srv-5", name: "Brand Identity & Visual Guidelines", price: 28000, turnaround: "10 days" },
  ];

  res.json({ success: true, services });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 EditzLab API server running at http://localhost:${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// Simulated code review
function analyzeCode() {
  return {
    totalErrors: 3,
    codeStrength: 70,
    aiSuggestions: [
      "Consider better variable naming in app.js",
      "Add error handling in utils.js",
      "Remove unused imports in index.js"
    ]
  };
}

// Function to print report
function printReport(report) {
  console.log("📊 DevScan Summary:");
  console.log("Total Errors:", report.totalErrors);
  console.log("Code Strength:", report.codeStrength + "%");
  console.log("AI Suggestions:");
  report.aiSuggestions.forEach(s => console.log("💬", s));
}

// --- 1️⃣ Demo run on server start ---
console.log("🚀 DevScan starting demo scan...");
const initialReport = analyzeCode();
printReport(initialReport);

// --- 2️⃣ Webhook for real pushes ---
app.post("/webhook", (req, res) => {
  console.log("🚀 Received webhook event!");
  const report = analyzeCode();
  printReport(report);
  res.send("DevScan analysis complete!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ DevScan running on port ${PORT}`));

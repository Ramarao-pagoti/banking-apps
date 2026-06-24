const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "accounts-service",
    status: "running"
  });
});

app.get("/api/accounts", (req, res) => {
  res.json([
    {
      accountId: "ACC1001",
      customer: "John Doe",
      balance: 15000
    },
    {
      accountId: "ACC1002",
      customer: "Jane Doe",
      balance: 22000
    }
  ]);
});

app.listen(8080, () => {
  console.log("Accounts service running on port 8080");
});
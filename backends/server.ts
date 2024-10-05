import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import JobRouter from "./routes/job.route";
import CompanyRouter from "./routes/company.route";
import LocationRouter from "./routes/location.route";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173"}));
app.use(express.json());

app.use("/api/jobs", JobRouter);
app.use("/api/companies", CompanyRouter);
app.use("/api/locations", LocationRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("SERVER RUNNING");
});

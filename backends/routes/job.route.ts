import { Router } from "express";
import {
  createJob,
  getAllJob,
  getOneJob,
  updateJob,
  deleteJob,
} from "../controllers/job.controller";

const router = Router();

router.route("/").post(createJob);
router.route("/").get(getAllJob);
router.route("/:id").get(getOneJob);
router.route("/update/:id").put(updateJob);
router.route("/delete/:id").delete(deleteJob);

export default router;

import { Router } from "express";
import {
  createLocation,
  getAllLocation,
  getOneLocation,
  updateLocation,
  deleteLocation,
} from "../controllers/location.controller";

const router = Router();

router.route("/").post(createLocation);
router.route("/").get(getAllLocation);
router.route("/:id").get(getOneLocation);
router.route("/update/:id").put(updateLocation);
router.route("/delete/:id").delete(deleteLocation);

export default router;

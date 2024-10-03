import { Router } from "express";
import {
  createCompany,
  getAllCompany,
  getOneCompany,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller";

const router = Router();

router.route("/").post(createCompany);
router.route("/").get(getAllCompany);
router.route("/:id").get(getOneCompany);
router.route("/update/:id").put(updateCompany);
router.route("/delete/:id").delete(deleteCompany);

export default router;

import { Router } from "express";
import { exampleControllerLogic } from "../controllers/example.controllers.js";

const router = Router();

router.route("/").get(exampleControllerLogic);

export default router;

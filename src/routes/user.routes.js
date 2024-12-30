import { Router } from "express";

import {registerUser} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";


const router = Router();


// /api/v1/healthcheck

router.route("/register").post(
    upload.fields(),
    registerUser)

export default router;
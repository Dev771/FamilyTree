import Express from "express";

import { LinkFamily, checkFamilyID } from '../controller/userController.js';
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Express.Router();

router.post("/LinkFamily", authMiddleware, LinkFamily);
router.get("/checkFamilyId/:id", checkFamilyID);

export default router;
import Express from 'express';

import { AddUser, loginUser } from '../controller/authController.js';

const router = Express.Router();

router.post("/login", loginUser);
router.post("/register", AddUser);

export default router;
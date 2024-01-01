import Express from 'express';

import { AddUser, LoginUser } from '../controller/authController.js';

const router = Express.Router();

router.post("/login", LoginUser);
router.post("/register", AddUser);

export default router;
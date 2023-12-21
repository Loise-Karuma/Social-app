import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
/* the reason for not doing /auth/login is because in index we already have /auth for auth routes and in login
above we have /login it reads rhe same as the common method. */

export default router;

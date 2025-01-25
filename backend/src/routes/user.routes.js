import express from "express";
import { registerUser, loginUser, logoutUser, updateUser, deleteUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/update/:id").put(verifyJWT, updateUser);
router.route("/delete/:id").delete(verifyJWT, deleteUser);

export default router;

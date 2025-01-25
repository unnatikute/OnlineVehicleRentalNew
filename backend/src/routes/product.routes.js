import express from "express";
import { upload } from "../middleware/multer.js";
import { addProduct, getAllProduct, getAllProductOfUser, updateProduct, getByLocation } from "../controllers/product.controllers.js";
import { verifyJWT } from "../middleware/auth.js";

const router = express.Router();
// router.use(verifyJWT);

router.route("/add").post(upload.single("vehicleImage"), verifyJWT, addProduct);
router.route("/update/:productId").put(verifyJWT, updateProduct);
router.route("/getVehicles").get(getAllProduct);
router.route("/getUserVehicles").get(verifyJWT, getAllProductOfUser);
router.route("/getByLocation").get(getByLocation);

export default router;

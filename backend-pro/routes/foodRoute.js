import express from 'express';
import multer from 'multer';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "upLoad",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const Storagetwo=multer.diskStorage({
    destination:"uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: Storagetwo });

// Define the route with multer middleware
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;
import express, { Request, Response, NextFunction } from "express";
import userController from '../controller/userController';
import autenticate from "../jwt/jwtAuthentication";
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({

destination: (req:Request, file:any, cb:any) => {
cb(null, 'MulterImage');
},

filename: (req:Request, file:any, cb:any) => {
cb(null, `hellomulter_${file.originalname}`);
}
});

const upload = multer({ storage:storage });



router.route('/getAll').get(userController.getDataConntrollerfn);
 
router.route('/userSignUp').post(userController.createUserControllerFn);

router.route('/userLogin').post(userController.LoginPost);

router.route('/editUser').put(userController.editUser);

router.route('/imageUpload').post(upload.single("file"),autenticate.authenticateTocken,userController.imageUpload);



export default router; 
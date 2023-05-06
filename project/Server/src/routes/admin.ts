import express from 'express';
const router =express.Router();
const adminController = require('../controller/userController');
import { DeleteUser, adminLogin, userView } from '../controller/adminController';



router.post('/adminLogin',adminLogin);
router.get('/allUsers',userView);
router.post('/deleteUser',DeleteUser);




export default router; 
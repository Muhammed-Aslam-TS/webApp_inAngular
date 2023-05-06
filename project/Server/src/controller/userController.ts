import express, { Request, Response, NextFunction } from "express";
const userService = require('../Helpers/userService');

import userModel from '../model/userModel';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { log } from "console";
import multer from "multer";

// const secretToken = process.env.SECRET_CODE as string
const secretToken = 'fyiuihjkljoihyufyufjfuyfi'


export default {

    async getDataConntrollerfn (req: any, res: any){
    const User = await userService.getDataFromDBService();
    res.send({ 'status': true, 'data': User });
},

 async createUserControllerFn  (req: any, res: any)  {
    const status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }

},

 async LoginPost  (req: Request, res: Response)  {
    const loginData = req.body;
    // eslint-disable-next-line no-async-promise-executor
    try {
         return await new Promise<void>(async (resolve, reject) => {
             const user = await userModel.findOne({ Email: loginData.Email });
             if (user) {
                 const result = await bcrypt.compare(loginData.Password, user.Password);
                 if (result) {
                    const User = { firstName: user.firstName, lastName: user.lastName, Email: user.Email, Id: user._id }
                     const AccessToken: string = jwt.sign(User, secretToken, { expiresIn: "2h" });
                     // console.log('login Successes');
                     const UserData = {
                         firstName: user.firstName,
                         lastName: user.lastName,
                         Email: user.Email,
                         Phone: user.Phone,
                         Id: user._id,
                         Image: user.Image,
                         token: AccessToken,
                         status: true,
                         message: "user exist"
                     };
                     res.status(200).json({ status: true, message: "user exist", token: AccessToken, user: UserData });
                 } else {
                     console.log('login failure...................!');
                     res.status(400).json({ status: false, message: "incorrect password" });
                 }
             } else {
                 console.log("error2 //user name wrong//");
                 res.status(400).json({ status: false, message: "user dosenot exist" });
             }
         });
     } catch (err) {
         console.log(err);
         res.status(400).json({ status: false, message: "checking error", error: err });
     }

},


 editUser  (req: Request, res: Response) {
    const data = req.body;
    // eslint-disable-next-line no-async-promise-executor
    return new Promise<void>(async (resolve, reject) => {
        const updateData = await userModel.findOneAndUpdate({ _id: data.userId },
            { $set: { firstName: data.firstName, lastName: data.lastName, Email: data.Email } });

        if (updateData) {
            const UserData = {
                firstName: updateData.firstName,
                lastName: updateData.lastName,
                Email: updateData.Email,
                status: true,
                message: "user updated"
            };
            res.status(200).json({ status: true, message: "user updated", updateData: UserData });
        } else {
            console.log('update.... failure...............!');
            res.status(400).json({ status: false, message: "incorrect userId" });
        }

    });
},



 async imageUpload  (req: Request, res: Response, next: NextFunction)  {
    console.log('uygyuiohnioygyuf44444444444444');
    const file: any = req.file;
    console.log(file.filename);


    const token: any = req.headers['autharization']
    console.log(token,'tttttttttttttttttttttt');
    
    const data: any = jwt.verify(token, secretToken);
    console.log(data, 'data---------------------------');
    const user = await userModel.findById(data.Id);
    console.log(user, 'suser===================');



    if (!file) {
        const error: any = new Error('ples upload file');
        error.httpStatusCode = 400;
        return next(error);
    }

}

}


// module.exports = {
//     getDataConntrollerfn,
//     createUserControllerFn,
//     LoginPost,editUser,imageUpload

// };
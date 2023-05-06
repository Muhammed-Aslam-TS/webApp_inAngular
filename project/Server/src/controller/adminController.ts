import express, { Request, Response, NextFunction, response } from "express";
const userService = require('../Helpers/userService');
import userModel from "../model/userModel";
const adminHelper = require('../Helpers/adminHelpers');
const secretToken = "3453dfg-fsgf-gsdfgdfg-09-0k6546dfsgdfg5";


const admin  = {
    Email: 'admin@gmail.com',
    Password : '123'
};

export const adminLogin = async(req:Request,res:Response)=>{


    const adminLoginTrue = req.body.Email === admin.Email && req.body.Password === admin.Password;
    if (adminLoginTrue) {

       console.log('login Successes');
       const AdminData = {
           Email: admin.Email,
           Password: admin.Password,
           status : true,
           message : "admin exist"
       };
       res.status(200).json({ status: true, message: "admin exist", admin: AdminData });
   }else{
       console.log('login failure...................!'); 
       res.status(400).json({ status: false, message: "incorrect password" });
    }     
};

export const userView = (req:Request,res:Response)=>{
    adminHelper.getAllUser().then((users: any) => {

        res.status(200).json({ status: true, message: "collected all users", Alluser: users });

    }).catch((err:any) => {
        res.status(400).json({ status: false, message: "invalid user data", error: err });
    });
};

export const DeleteUser = async(req:Request,res:Response)=>{

    const admin = await adminHelper.deleteUser(req.body._id);    
};





module.exports = {
    adminLogin,userView,
    DeleteUser
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { VerifyErrors } from "jsonwebtoken";
import express, { Request, Response, NextFunction } from "express";
// const secretToken = 'fyiuihjkljoihyufyufjfuyfi'
const secretToken = process.env.SECRET_CODE as string ;





export default {


    authenticateTocken: (req: Request, res: Response, next: NextFunction) => {
        const token: any = req.headers["autharization"];
        if (token !== undefined) {
            try {
                const data = jwt.verify(token,secretToken);
                if (data) {
                    next();
                }
            } catch (err) {
                console.log(err)
                res.json({ status: false, message: "invalid tocken", error: err });
            }
        } else {
            res.json({
                status: false,
                message: "the auth tocken is invalid",
            });
        }
    },
};
 
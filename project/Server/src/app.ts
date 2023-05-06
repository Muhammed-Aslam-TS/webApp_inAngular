import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import multer from "multer";
import bodyParser from "body-parser"; 
import * as dotenv from 'dotenv' 
import connect from "./connections/connections";
import adminRouter from './routes/admin';
import userRouter from './routes/user';


const app = express();

dotenv.config();

app.use(bodyParser.json());
//multer__________________

// const storage = multer.diskStorage({
// 	destination: function (req: Request, file: any, cb: any) {
// 		cb(null, 'uploads/');
// 	},
// 	filename: function (req: Request, file: any, cb: any) {
// 		cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
// 	}
// });

// const upload = multer({ storage: storage });

//end multer__________________



const port: Number = 3000;

const corsOptions = {
	origin: 'http://localhost:4200',
	credentials: true,//access-control-allow-credentials:true
	optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
// app.use(router);
app.use('/', userRouter);
app.use('/admin', adminRouter);
connect();


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

	res.locals.message = err.message;
	console.log(err);

	res.status(req.statusCode || 500);
	res.json({
		status: "error",
		message: err.message,
		stack: req.app.get("env") === "development" ? err.stack : {},
	});
});
app.listen(port, (): void => {
	console.log("server started");
});

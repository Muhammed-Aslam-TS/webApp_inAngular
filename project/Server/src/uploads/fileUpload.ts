import { AnyArray } from "mongoose";

const multer = require('multer');

const storage = multer.diskStorage({

destination: (req:Request, file:any, cb:any) => {
cb(null, 'MulterImage');
},

filename: (req:Request, file:any, cb:any) => {
cb(null, `hellomulter_${file.originalname}`);
}
});

const upload = multer({ storage:storage });

module.exports = upload;
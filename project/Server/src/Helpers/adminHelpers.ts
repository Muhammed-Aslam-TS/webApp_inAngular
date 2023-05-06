import { Module } from "module";
import userModel from '../model/userModel';

module.exports.getAllUser =()=>{
  // eslint-disable-next-line no-async-promise-executor
   return new Promise(async(resolve, reject) => {
    const allUsers = await userModel.find();
    resolve(allUsers);
   
    
});  
};

module.exports.deleteUser = (userId:string)=>{
// eslint-disable-next-line no-async-promise-executor
return new Promise<void>(async(resolve:any, reject) => {
  const data = await userModel.findOneAndDelete({_id : userId});
  resolve(data);
});
};

 
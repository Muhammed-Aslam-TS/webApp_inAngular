import userModel from '../model/userModel';
import bcrypt from 'bcrypt';
import Response from 'express';
import userType from '../types/userType';





module.exports.getDataFromDBService=()=>{
 return new Promise<void>( (resolve:any, reject:any)=> {
    
    userModel.find({},(error:any,result:any)=>{
        if (error) {
            reject(false);
        }else{
            resolve(result);
        }
    });
 });
};

module.exports.createUserDBService = (userData:any)=>{
    // eslint-disable-next-line no-async-promise-executor
    return new Promise<void>((resolve, reject) => {
        const userModelData = new userModel();
        userModelData.firstName = userData.firstName;
        userModelData.lastName = userData.lastName;
        userModelData.Email = userData.Email;
        userModelData.Phone = userData.Phone;
        const Password =  bcrypt.hashSync( userData.Password,10);
        userModelData.Password = Password;
        userModelData.Image = '';

        userModelData.save((err:any,result:any)=>{
            if(err){
                reject(false);
            }else{
                resolve(result);
            }
        });
    });
};


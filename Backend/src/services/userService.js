//import { where } from "sequelize";
//import { where } from "sequelize";
//import { raw } from "body-parser";
import db from "../models/index";
import bcrypt from 'bcryptjs';



let handleUserLogin = (email,password) => {
    return new Promise(async(resolve,reject) => {
        try{
            let userData = {};

            let isExist = await checkUserEmail(email);
            if(isExist){
                //user is alrealy exist
                //copmpare password
                let user =await db.User.findOne({
                    attributes:['email','roleId','password'],
                    where: {email: email}, 
                    //attributes :{
                    //include: ['email','roleId'],
                   // exclude:['password']
                    //}
                    raw: true
                });
                if(user){
                    //let check = true;
                let check = await bcrypt.compareSync(password, user.password);
                    //let check = bcrypt.compare(password, user.password);
                    //check = bcrypt.compare(password,user.password);
                    // console.log(check);
                    // console.log(password);
                    // console.log(user.password);
                    
                    if(check){
                        userData.errCode=0;
                        userData.errMessage = 'Ok';
                        delete user.password;
                        userData.user =user;
                    }else{
                        userData.errCode=3;
                        userData.errMessage ='wrong password'
                    }
                }else{
                    userData.errCode=2;
                    userData.errMessage = 'User`s not found~'
                }
                // bcrypt.compareSync("not_bacon",hash);//false
                
               // resolve()
            }else{
                //return error
                userData.errCode =1;
                userData.errMessage ='Your`s Email isn`t exist  in your system.Plz try your email!'
               
            }
            resolve(userData)
        }catch(e){
            reject(e)
        }
    })
}

// let compareUserPassword = () => {
//     return new Promise((resolve,reject)=>{
//         try{

//         }catch(e){
//             reject(e);
//         }
//     })
// }


let checkUserEmail = (userEmail) =>{
    return new Promise(async(resolve,reject) => {
        try{
            let user = await db.User.findOne({
                where: {email : userEmail}
            })
            if(user){
                resolve(true)
            }else{
                resolve(false)
            }

        }catch(e){
            reject(e);
        }
    })
}
module.exports = {
    handleUserLogin : handleUserLogin
}
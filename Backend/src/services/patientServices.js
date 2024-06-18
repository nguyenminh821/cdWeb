//import { raw } from "body-parser";
import { reject } from "lodash";
import db from "../models/index";
//import { times } from "lodash";
require('dotenv').config();
import emailService from './emailServices';
import { v4 as uuidv4 } from 'uuid';
import { where } from "sequelize";

let buildUrlEmail =(doctorId,token)=>{
   //let result = '';
    
    //let id = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    
    let result = `${process.env.URL_REACT}/verify-booking?token=${token}&doctorId=${doctorId}`
    return result;
}

let postBookAppoinment =(data)=>{
    return new  Promise(async(resolve,reject)=>{
        try {
            if(!data.email || !data.doctorId || !data.timeType || !data.date


                || !data.fullName || !data.selectedGender
                || !data.address
            ){
                resolve({
                    errCode: 1,
                    errMessage: 'Mising parameter'
                })
            }else{
                   
                let token  = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    
                await emailService.sendSimpleEmail({
                    reciverEmail:data.email,
                    patientName: data.fullName,
                    
                     time:data.timeString,
                     doctorName:data.doctorName,
                     language:data.language,
                     redirectLink:buildUrlEmail(data.doctorId, token)
                })



                //upsert patient
             let user =  await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                     email: data.email,
                     roleId: 'R3',
                     gender: data.selectedGender,
                     address: data.address,
                     firstName: data.fullName 
                    },
                   // raw : true
                  });
                  //console.log('use use' ,user[0])
                  //create a booking record

                  if ( user && user[0]) {
                    await db.Booking.findOrCreate({
                        where : {  patientId: user[0].id},
                        defaults: {
                            statusId: 'S1',
                            doctorId:  data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType,
                            token:token
                        }
                       

                    })
                    
                  }
                  resolve({
                   // data:user,
                    errCode: 0,
                    errMessage: 'Save infor patient succeed!'
                  })

            }
           
        } catch (e) {
            reject(e);
            
        }
    })
}
let postVerifyBookAppoinment =(data)=>{
    return  new Promise(async(resolve, reject)=>{
        try {
            
            if(!data.token || !data.doctorId ){
                resolve({
                    errCode: 1,
                    errMessage: 'Mising parameter'
                })
            }else{
                let appointment =await db.Booking.findOne({
                    where:{
                        doctorId:data.doctorId,
                        token:data.token,
                        statusId: 'S1'
                    },
                    raw: false
                })
                if(appointment){
                    appointment.statusId ='S2';
                    await appointment.save();
                    resolve({
                        errCode:0,
                        errMessage:"Update the appointment succeed"
                    })
                }else{
                    resolve({
                        errCode:2,
                        errMessage:"Appointment schedule does not exist"
                    })
                }
                
            }
        } catch (e) {
            
            
            reject(e);
            
        }
    })
}
module.exports={
    postBookAppoinment: postBookAppoinment,
    postVerifyBookAppoinment:postVerifyBookAppoinment
}
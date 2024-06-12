import { raw } from "body-parser";
import db from "../models/index";
import { times } from "lodash";
require('dotenv').config();
import emailService from './emailServices'
let postBookAppoinment =(data)=>{
    return new  Promise(async(resolve,reject)=>{
        try {
            if(!data.email || !data.doctorId || !data.timeType || !data.date


                || !data.fullName
            ){
                resolve({
                    errCode: 1,
                    errMessage: 'Mising parameter'
                })
            }else{
                   

                await emailService.sendSimpleEmail({
                    reciverEmail:data.email,
                    patientName: data.fullName,
                    
                     time:data.timeString,
                     doctorName:data.doctorName,
                     language:data.language,
                     redirectLink:'https://github.com/nguyenminh821/cdWeb'
                })



                //upsert patient
             let user =  await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                     email: data.email,
                     roleId : 'R3'
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
                            timeType: data.timeType
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
module.exports={
    postBookAppoinment: postBookAppoinment
}
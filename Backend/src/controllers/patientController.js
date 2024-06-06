
import patientServices from '../services/patientServices'

let postBookAppoinment =async(req, res)=>{
    try {
        let infor = await patientServices.postBookAppoinment(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

module.exports ={
    postBookAppoinment: postBookAppoinment
}
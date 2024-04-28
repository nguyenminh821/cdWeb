import actionTypes from './actionTypes';
import {getAllCodeService,createNewUserService, getAllUsers,deleteUserService} from "../../services/userService";
import {toast} from "react-toastify";
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {

    return async(dispatch,getState) =>{
        try {
            dispatch({
                type : actionTypes.FETCH_GENDER_START
            })
            let res =await getAllCodeService("GENDER");
            if (res && res.errCode ===0) {
                //console.log('hoi dan check',getState)
                dispatch(fetchGenderSuccess(res.data))
                
            } else {
               dispatch( fetchGenderFailded());
                
            }
           
        } catch (e) {
            dispatch(fetchGenderFailded());
            console.log('fetchGenderStart err',e)
            
        }

    }
    
}



export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailded = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})


export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailded = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})


export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailded = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})


export const fetchPositionStart = () => {

    return async(dispatch,getState) =>{
        try {
           
            let res =await getAllCodeService("POSITION");
            if (res && res.errCode ===0) {
                //console.log('hoi dan check',getState)
                dispatch(fetchPositionSuccess(res.data))
                
            } else {
               dispatch( fetchPositionFailded());
                
            }
           
        } catch (e) {
            dispatch(fetchPositionFailded());
            console.log('fetchPositionStart err',e)
            
        }

    }
    
}

export const fetchRoleStart = () => {

    return async(dispatch,getState) =>{
        try {
           
            let res =await getAllCodeService("ROLE");
            if (res && res.errCode ===0) {
               
                //console.log('hoi dan check',getState)
                dispatch(fetchRoleSuccess(res.data))
                
            } else {
               dispatch( fetchRoleFailded());
                
            }
           
        } catch (e) {
            dispatch(fetchRoleFailded());
            console.log('fetchRoleStart err',e)
            
        }

    }
    
}

    export const createNewUser =(data)=> {
        return async(dispatch,getState) =>{
            try {
               
                let res =await  createNewUserService(data);
               
                if (res && res.errCode === 0) {
                    toast.success("Create a new user succeed!");
                    //console.log('hoi dan check',getState)
                    dispatch(saveUserSuccess())
                   dispatch(fetchAllUsersStart());
                } else {
                   dispatch( saveUserFailded());
                    
                }
               
            } catch (e) {
                dispatch(saveUserFailded());
                console.log('saveUserFailed err',e)
                
            }
    
        }


        

    } 

    export const saveUserSuccess =() => ({
        type: actionTypes.CREATE_USER_SUCCESS
    })

    export const saveUserFailded =() => ({
        type: actionTypes.CREATE_USER_FAILDED
    })

  
    
    export const fetchAllUsersStart = () => {

        return async(dispatch,getState) =>{
            try {
               
                let res =await getAllUsers("ALL");
                if (res && res.errCode === 0) {
                 
                    //console.log('hoi dan check',getState)
                    dispatch(fetchAllUsersSuccess(res.users.reverse()))
                    
                } else {
                    toast.error("createa new user errro!");
                   dispatch( fetchAllUsersFailded());
                    
                }
               
            } catch (e) {
                toast.error("create a new user errro!");
                dispatch(fetchAllUsersFailded());
                console.log('fetchAllUsersFailded err',e)
                
            }
    
        }
        
    }

    export const fetchAllUsersSuccess =(data)=>({
        type:actionTypes.FETCH_ALL_USERS_SUCCESS,
        users:data
    })

    export const fetchAllUsersFailded =()=>({
        type:actionTypes.FETCH_ALL_USERS_FAILED,
        
    })


    export const deleteAUser =(userId)=> {
        return async(dispatch,getState) =>{
            try {
               
                let res =await  deleteUserService(userId);
               
                if (res && res.errCode === 0) {
                    toast.success("delete a new user succeed!");
                    //console.log('hoi dan check',getState)
                    dispatch(deleteUserSuccess())
                   dispatch(fetchAllUsersStart());
                } else {
                    toast.error("delete a new user errro!");
                   dispatch( deleteUserFailed());
                    
                }
               
            } catch (e) {
                toast.error("delete a new user errro!");
                dispatch(deleteUserFailed());
                console.log('deleteUserFailed err',e)
                
            }
    
        }


        

    }

    export const deleteUserSuccess =()=>({
        type:actionTypes.DELETE_USER_SUCCESS
    })

    export const deleteUserFailed =()=>({
        type:actionTypes.DELETE_USER_FAILED
    })
//start doing end

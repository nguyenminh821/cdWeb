import actionTypes from './actionTypes';
import {getAllCodeService,createNewUserService} from "../../services/userService";

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
                console.log('cretes u', res)
                if (res && res.errCode === 0) {
                    //console.log('hoi dan check',getState)
                    dispatch(saveUserSuccess())
                    
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
        type: 'CREATE_USER_SUCCESS'
    })

    export const saveUserFailded =() => ({
        type: 'CREATE_USER_FAILDED'
    })

    
//start doing end

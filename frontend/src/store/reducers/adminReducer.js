import actionTypes from '../actions/actionTypes';

const initialState = {
    isloadingGender: false,
    genders:[],
    roles:[],
    positions:[],
    users:[]
   
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = {...state};
            copyState.isloadingGender = true;
            //console.log('hoi',action)
            return {
                ...copyState,
               
            }
            case actionTypes.FETCH_GENDER_SUCCESS:
                
               //let copyState = {...state};
               state.genders = action.data;
               state.isloadingGender = false;
               //console.log('hoi a',action);

            return {

                ...state,
               
            }
            case actionTypes.FETCH_GENDER_FAILED:
               // console.log('hoi di',action)
                //let state = {...state};
                
                state.isloadingGender = false;
                state.genders = [];
            return {
                ...state,
               
            }

            case actionTypes.FETCH_POSITION_SUCCESS:
                
            //let copyState = {...state};
            state.positions = action.data;
            //state.isloadingGender = false;
            //console.log('hoi a',action);

         return {

             ...state,
            
         }
         case actionTypes.FETCH_POSITION_FAILED:
            // console.log('hoi di',action)
             //let state = {...state};
             
             //state.isloadingGender = false;
             state.positions = [];
         return {
             ...state,
            
         }

         case actionTypes.FETCH_ROLE_SUCCESS:
                
         //let copyState = {...state};
         state.roles = action.data;
         //state.isloadingGender = false;
         //console.log('hoi a',action);

      return {

          ...state,
         
      }
      case actionTypes.FETCH_ROLE_FAILED:
         // console.log('hoi di',action)
          //let state = {...state};
          
          //state.isloadingGender = false;
          state.roles = [];
      return {
          ...state,
         
      }
      case actionTypes.FETCH_ALL_USERS_SUCCESS:
        state.users = action.users;
        return {
            ...state,
           
        }

        case actionTypes.FETCH_ALL_USERS_FAILED:
        state.users = [];
        return {
            ...state,
           
        }
       
        default:
            return state;
    }
}

export default adminReducer;
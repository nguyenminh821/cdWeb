import actionTypes from '../actions/actionTypes';

const initialState = {
    isloadingGender: false,
    genders:[],
    roles:[],
    positions:[]
   
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
            case actionTypes.FETCH_GENDER_FAIDED:
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
         case actionTypes.FETCH_POSITION_FAIDED:
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
      case actionTypes.FETCH_ROLE_FAIDED:
         // console.log('hoi di',action)
          //let state = {...state};
          
          //state.isloadingGender = false;
          state.roles = [];
      return {
          ...state,
         
      }
       
        default:
            return state;
    }
}

export default adminReducer;
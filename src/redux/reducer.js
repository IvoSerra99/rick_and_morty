import { GET_CHARACTERS } from "./action-types";
const initialState = {
    characters: []
}
const reducer = function (state = initialState, action) {
    switch(action.payload){

        case GET_CHARACTERS:
            return{
                ...state,
                characters: action.payload
            }
            default: 
            return {...state}
    }

};


export default reducer;
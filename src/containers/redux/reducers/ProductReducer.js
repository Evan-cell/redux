import { ActionTypes } from "../contants/ActionTypes";

const initialState = {
    products:[
        {
            id:1,
            title: "kim",
            category: "developer"
        }
    ]
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
           
    
        default:
            return state;
    }
}
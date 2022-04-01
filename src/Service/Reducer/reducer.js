import { ADD_TO_CART,REMOVE_TO_CART  } from "../constances"

const initialState = {
    cartdata:[]


}

 export default function cartitem (state = [],   action )  {
  switch (action.type) {

  case ADD_TO_CART:
    
    return [
      ...state,{cartdata:action.data} 

    ]


    case REMOVE_TO_CART :
      state.pop();
    
      return [
        ...state, 
  
      ]
     

  default:
    return state
  }
}
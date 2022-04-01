import {ADD_TO_CART,REMOVE_TO_CART} from "../constances";
 export const addToCart =(data)=>{
    
    return{
        type:"ADD_TO_CART",
        data:data

    }
}


export const removetocart =()=>{
   
    
    return{
        type:"REMOVE_TO_CART",
        

    }
}
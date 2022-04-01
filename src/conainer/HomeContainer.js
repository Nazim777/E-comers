import React from 'react'
import Home1 from '../Components/Home1'
import { connect } from 'react-redux'
import { addToCart,removetocart } from '../Service/Action/Action'




const mapStateToProps = (state) => ({
  data:state.cartitem
  
})

const mapDispatchToProps =dispatch=>({
  addtocarthandler: data=>dispatch(addToCart(data)),
 removetocarthandler: data=>dispatch(removetocart())


})








export default connect(mapStateToProps,mapDispatchToProps) (Home1)



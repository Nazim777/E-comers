import React from 'react'

const Home1 = (props) => {
  console.log(props)
 
 
  return (
    <div className=' container'>
        <div className='add-to-cart'>
          <span>{props.data.length}</span>
         
        <img className='images' src="https://cdn2.vectorstock.com/i/1000x1000/36/51/add-to-cart-icon-vector-24873651.jpg" alt="" />

        </div>
        
        
       <div className="row">
           <div className="col-md-6">
           <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XWrbtTevtQXhuo-WvoRLL5DxizwWZLy3hQ&usqp=CAU" alt="" />

           </div>
           <div className="col-md-3 my-5">
               <span>I-phone</span> <br />
            <span>price-$1000.00</span>

            </div>
           <div className="col-md-3 my-5" >
             <button onClick={(()=>{props.addtocarthandler({price:1000, name: 'i-phone'})})}>Add to cart</button>
             <button onClick={(()=>{props.removetocarthandler({price:1000, name: 'i-phone'})})}>Remove to cart</button>
           
           
           
          </div>


         



       </div>
       
       

       
        
      
    </div>
  )
}

export default Home1
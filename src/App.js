import React,{useState, useEffect} from 'react'
import './App.css';
const App = () => {
const[data,setdata] = useState([])
useEffect (()=>{

  fetch('https://fakestoreapi.com/products').then((result)=>{
    result.json().then((resp)=>{
      console.log(resp)
      setdata(resp)

    })

  })

},[])


  return (
    <div>
      <div className="container">
        <div className="row">
          {
            data.map((e)=>{
              
              return(
                <div className="col-md-4" key={e.id}>




<div className="card" style={{width:'18rem'}}>
  <img src={e.image} className="card-img-top image" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{e.title}</h5>
    <h6 className="card-title">Price ${e.price}</h6>
    <p className="card-text">{e.category}</p>
    <a href="#" className="btn btn-primary">add to cart</a>
    <a href="#" className="btn btn-success button">remove to cart</a>
  </div>
</div>







                  
                  







                </div>

              )
            })
          }
         
        </div>
      </div>
     
      
    </div>
  )
}

export default App






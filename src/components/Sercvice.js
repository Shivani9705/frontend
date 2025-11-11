import React from 'react'
import './Service.css'

const Sercvice = () => {
  return (
    
      <div className='container service'>
        <div className='row'>
             <div className='col-12 col-sm-6 col-md-6'>
                <img src='../images/service.jpeg' className='img-fluid'/>
             </div>
             <div className='col-12 col-sm-6 col-md-6 right' >
                <div>
                <h2>Start Organizing your <br/> Life Today</h2>
                <p>Join us now and transform your productivity with our intuitive to-do list platform!</p>
                <button className='btn btn-danger me-1'>Get Started</button>
                <button className='btn btn-outline-danger'>Get Started</button>
                </div>
             </div>
        </div>
      </div>
    
  )
}

export default Sercvice

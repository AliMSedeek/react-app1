import React from 'react'
import pic1 from '../img/port1.png'
import pic2 from '../img/port2.png'
import pic3 from '../img/port3.png'

export default function Portfolio() {
  return (
    <>
      <h2 className='title'>PORTFOLIO COMPONENT</h2>
      <div className="d-flex align-items-center justify-content-center mb-3 lines">
        <i className="fa-solid fa-star"></i>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img className='w-100 pt-3 pb-3' src={pic1} alt="pic1" />
          </div>
          <div className="col-md-4">
            <img className='w-100 pt-3 pb-3' src={pic2} alt="pic2" />
          </div>
          <div className="col-md-4">
            <img className='w-100 pt-3 pb-3' src={pic3} alt="pic3" />
          </div>
          <div className="col-md-4">
            <img className='w-100 pt-3 pb-3' src={pic3} alt="pic1" />
          </div>
          <div className="col-md-4">
            <img className='w-100 pt-3 pb-3' src={pic2} alt="pic2" />
          </div>
          <div className="col-md-4">
            <img className='w-100 pt-3 pb-3' src={pic1} alt="pic3" />
          </div>
        </div>
      </div>
    </>
  )
}

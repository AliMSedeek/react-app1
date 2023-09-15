import React from 'react'

export default function Footer() 
{
  return (
    <footer className='text-white text-center'>
        <div className='footerOne p-5'>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Location</h2>
                <h6>2215 John Daniel Drive</h6>
                <h6>Clark, MO 65243</h6>
              </div>
              <div className="col-md-4">
                <h2>Around The Web</h2>
                <div className="footer-icons d-flex justify-content-center">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-solid fa-globe"></i>
                </div>
              </div>
              <div className="col-md-4">
                <h2>ABOUT FREELANCER</h2>
                <h6>Freelance is a free to use, licensed Bootstrap theme created by Route</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-dark p-3'><h6>Copyright © Your Website 2021</h6></div>
    </footer>
  )
}

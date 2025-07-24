
import React from 'react'

export default function Section() {
  return (
    <>
  <div className="bg-danger text-white  p-5">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className='px-2'>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p className='px-3'>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h3>AROUND THE WEB</h3>
          <div className="d-flex gap-3  px-5 fs-4  ">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-solid fa-globe"></i>
          </div>
        </div>
        <div className="col-md-4">
          <h3 className='px-5'>ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme <span className='mx-5 px-5'>created by Route</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

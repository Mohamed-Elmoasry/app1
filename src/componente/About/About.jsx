import React from 'react'

export default function About() {
  return (
    <>
        <div className='bg-dark text-white py-5 d-flex flex-column justify-content-center align-items-center text-center' style={{ minHeight: '80vh' }}>
          <h1 className='text-center mb-3'>ABOUT COMPONENT</h1>
          <div className="star-line-wrapper">
          <div className="line"></div>
          <div className="star">★</div>
          <div className="line"></div>
        </div>
          <div className="container">
            <div className="row py-5">
              <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

              </div>
              <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

              </div>
              
            </div>
          </div>
        </div>
    </>
  )
}


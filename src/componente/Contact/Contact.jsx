import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <>
      <div className='pt-5 mt-5 text-center'> 
        <h1 className='fw-bold fs-1'>Contact Section</h1>

        <div className="star-line d-flex align-items-center justify-content-center my-3">
          <div className="linee bg-dark"></div>
          <div className="starr mx-3">★</div>
          <div className="linee bg-dark" ></div>
        </div>
      </div>

      <div className='w-50 mx-auto py-3'>
        <Form.Label htmlFor="username">UserName</Form.Label>
        <Form.Control type="text" id="username" />
      </div>

      <div className='w-50 mx-auto py-3'>
        <Form.Label htmlFor="userage">UserAge</Form.Label>
        <Form.Control type="text" id="userage" />
      </div>

      <div className='w-50 mx-auto py-3'>
        <Form.Label htmlFor="useremail">UserEmail</Form.Label>
        <Form.Control type="email" id="useremail" />
      </div>

      <div className='w-50 mx-auto py-3'>
        <Form.Label htmlFor="userpassword">UserPassword</Form.Label>
        <Form.Control type="password" id="userpassword" />
        <button className='btn btn-danger my-4 d-block mx-auto'>Send Message</button>
      </div>
    </>
  )
}

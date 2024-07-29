import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from "./Contact.module.css"


export default function Contact() {
    return (

        <>

            <section className="portfolio w-50 mx-auto my-3">


                <h1 className='text-center fw-bold text-uppercase'>conatct section
                </h1>


                <div className="star d-flex justify-content-center align-items-center align-content-center gap-3 my-2">
                    <div className={`${style.line} line`}></div>
                    <i className='fa-solid fa-star text-center'></i>
                    <div className={`${style.line} line`}></div>


                </div>


                {/* <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" /> */}



                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="John Smith.." />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Age"
                    className="mb-3"
                >
                    <Form.Control type="number" placeholder="25..." />
                </FloatingLabel>




                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>


                <button className='btn btn-outline-success my-3'>Submit</button>

            </section>

        </>
    )

}

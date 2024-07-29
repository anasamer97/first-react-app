import React from 'react'
import style from './About.module.css'

export default function About() {
    return (

        <>

            <section className={`${style.aboutStyling} about-section text-center p-5 text-white d-flex justify-content-center `}>
                <div className='p-5'>
                    <div className="line"></div>
                    <h2 className='text-uppercase fw-bold'>about component</h2>
                    <div className="p-5">
                        <div className='d-flex align-content-center align-items-center gap-3 justify-content-center'>
                            <div className={`${style.line}`}></div>
                            <i className='fa-solid fa-star'></i>
                            <div className={`${style.line}`}></div>
                        </div>


                        <div className="row p-5">


                            <div className="col-md-6 ">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-md-6 ">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

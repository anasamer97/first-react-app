import React from 'react'
import { } from '@fortawesome/react-fontawesome';
import style from './Footer.module.css'

export default function Footer() {
    return (

        <>

            <section className={`${style.footerStyling} footer text-center p-5 `} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 p-3">
                            <div className="location">
                                <h3>Location</h3>
                                <h4>2215 John Daniel Drive</h4>
                                <h4>Clark, MO 65243</h4>
                            </div>
                        </div>

                        <div className="col-md-4 p-3">
                            <div className="social-media">
                                <h3>AROUND THE WEB</h3>
                                <div className="social-media-icons d-flex justify-content-center gap-3 p-4 align-align-items-center align-content-center fs-4 ">
                                    <i className='fab fa-facebook text-2xl'></i>
                                    <i className='fab fa-twitter text-2xl'></i>
                                    <i className='fab fa-linkedin text-2xl'></i>
                                    <i className='fa-solid fa-globe text-2xl'></i>

                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 p-3">
                            <div className="location">
                                <h3>ABOUT FREELANCER</h3>
                                <h4>Freelance is a free to use, licensed Bootstrap theme created by Route
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
            <div className="copyright">
                <p className={`${style.copyrightstyling} text-center text-white p-3 m-0`}>Copyright © Your Website 2021</p>
            </div>

        </>
    )
}

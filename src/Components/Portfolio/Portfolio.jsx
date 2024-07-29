import React from 'react'
import poert1 from "../../assets/poert1.png"
import poert2 from "../../assets/poert2.png"
import poert3 from "../../assets/poert3.png"
import style from "./Portfolio.module.css"

export default function Portfolio() {
    return (
        <>

            <section className="portfolio mb-3 p-3">
                <h1 className='text-center fw-bold text-uppercase'>portfolio component</h1>

                <div>

                    <div className="star d-flex justify-content-center align-items-center align-content-center gap-3 my-2">
                        <div className={`${style.line} line`}></div>
                        <i className='fa-solid fa-star text-center'></i>
                        <div className={`${style.line} line`}></div>


                    </div>
                </div>



                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4 position-position-absolute">
                            <img src={poert1} className='w-100 rounded-3' alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={poert2} className='w-100 rounded-3' alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={poert3} className='w-100 rounded-3' alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={poert1} className='w-100 rounded-3' alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={poert2} className='w-100 rounded-3' alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={poert3} className='w-100 rounded-3' alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

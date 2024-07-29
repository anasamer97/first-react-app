import React from 'react'
import avatar from '../../assets/person-avatar.svg'
import style from "./Home.module.css"


export default function Home() {
    return (

        <>

            <section className={`${style.greenBg} home text-center p-5 text-white `}>
                <div className="container">
                    <div className="row"></div>
                    <div className="w-50 mx-auto p-5">
                        <img src={avatar} alt="Avatar smiling.." className='w-50' />
                        <h1>Start Framework</h1>
                        <div>
                        </div>

                        <div className="star d-flex justify-content-center align-items-center align-content-center gap-3 my-2">
                            <div className={`${style.line} line`}></div>
                            <i className='fa-solid fa-star text-center'></i>
                            <div className={`${style.line} line`}></div>


                        </div>

                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </section>

        </>
    )
}

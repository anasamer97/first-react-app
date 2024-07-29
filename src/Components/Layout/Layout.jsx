import React from 'react'
import Footer from '../Footer/Footer'
import BasicExample from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (

        <>

            <BasicExample />

            <Outlet />

            <Footer />
        </>
    )
}

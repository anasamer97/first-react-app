import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Home/Home'
import BasicExample from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'


{/* <BasicExample /> */ }
{/* <About /> */ }
{/* <Portfolio /> */ }
{/* <Contact /> */ }
{/* <Footer /> */ }
{/* <Home /> */ }

let x = createBrowserRouter(
  [
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "react-project-1/home", element: <Home /> },
        { path: "react-project-1/about", element: <About /> },
        { path: "react-project-1/contact", element: <Contact /> },
        { path: "react-project-1/portfolio", element: <Portfolio /> }
      ]
    }
  ]
)


function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={x}></RouterProvider>
}

export default App

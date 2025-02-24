import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Routing/Home.jsx'
import Contact from './Routing/Contact.jsx'
import About from './Routing/About.jsx'

const root=createRoot(document.getElementById('root'));
  // <StrictMode>
  //   <App />
  // </StrictMode>,

 const createRoute=createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/Home",
        element:<Home/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/About",
        element:<About/>
      }
    ]
  }])
root.render(
<RouterProvider router={createRoute}/>
);



import React from 'react'
import ReactDOM from 'react-dom/client'
import{ RouterProvider }from "react-router-dom"

import './index.css'
import Home from './pages/Home'
import router from './router'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section className='container'>
      <RouterProvider router={router}/>
    </section>
    
  </React.StrictMode>
)

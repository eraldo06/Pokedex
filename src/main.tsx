import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import Details from './pages/Details'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section className='container'>
      <Home />
    </section>
    
  </React.StrictMode>
)

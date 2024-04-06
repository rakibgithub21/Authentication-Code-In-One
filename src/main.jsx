import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Pages/Layout/Route'
import AuthComponent from './Authentication/AuthComponent'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthComponent>
      <RouterProvider router={router}></RouterProvider>
    </AuthComponent>
  </React.StrictMode>,
)

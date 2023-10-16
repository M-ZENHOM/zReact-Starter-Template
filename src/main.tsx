import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import Index from './pages/Index'
import Root from './Root'
import Components from './pages/Components'
import ErrorPage from './pages/ErrorPage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />,
        index: true,
      },
      {
        path: "/Components",
        element: <Components />,
        index: true,
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

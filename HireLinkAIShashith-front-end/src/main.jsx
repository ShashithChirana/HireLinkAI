import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home/home.page'
import JobPage from './pages/job/job.page'
import RootLayout from './Layouts/root.layout'
import MainLayout from './Layouts/main.layout'
import SignInPage from './pages/sign-in.page'
import SignUpPage from './pages/sign-up.page'


const router = createBrowserRouter([
{
  element: <RootLayout/>,
  children: [

    {
      element:<MainLayout/>,
      children:[
        {
          path: '/',
          element:<HomePage/>,
        },
      
        {
          path: '/job/:id',
          element: <JobPage/>,
        },
      ]
    },

    {
      path: "/sign-in",
      element: <SignInPage />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
  ],
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { About, Home, Contact, User, Github, githubInfoLoader } from './components'

// way 1: 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

// way 2:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />    
  </StrictMode>,
)

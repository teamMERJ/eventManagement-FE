
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Events from './pages/events'
import CreateEvent from './pages/createEvent'
import SignUp from './pages/signUp'
import Login from './pages/login'
import Footer from './components/footer'
import RootLayout from './layout/rootLayout'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Landing /> },
        { path: '/events', element: <Events /> },
        { path: '/events/create', element: <CreateEvent /> },
        { path: '/signup', element: <SignUp /> },
        { path: '/login', element: <Login /> },
        { path: '/footer', element: <Footer /> }
      ]
    },

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

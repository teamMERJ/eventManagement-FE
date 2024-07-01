
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Events from './pages/events'
import CreateEvent from './pages/createEvent'
import SignUp from './pages/signUp'
import Login from './pages/login'

function App() {
    const router = createBrowserRouter([
      {path: '/', element: <Landing />},
      {path: '/events', element: <Events />},
      {path: '/events/create', element: <CreateEvent />},
      {path: '/signup', element: <SignUp />},
      {path: '/login', element: <Login />}
    ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

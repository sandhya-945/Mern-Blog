import{BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path = "/" element = {<Home />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/sign-in" element = {<SignIn />} />
      <Route path = "/sign-up" element = {<SignUp />} />
      <Route path = "/dashboard" element = {<Dashboard/>} />
      <Route path = "/projects" element = {<Project/>} />
    </Routes>
    
    
    </BrowserRouter>
  )
}

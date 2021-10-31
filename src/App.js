import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Company from './Components/Pages/Company'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'
import NewProject from './Components/Pages/NewProject'
import Project from './Components/Pages/Project'

import Container from './Components/layout/container'
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'
import Projects from './Components/Pages/Projects'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass = "min-height">
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Projects">
            <Projects/>
          </Route>
          <Route path="/Company">
            <Company/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/NewProject">
            <NewProject/>
          </Route>
          <Route path="/project/:id">
            <Project/>
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;

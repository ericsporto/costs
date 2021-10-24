import{BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Company from './Components/Pages/Company'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'
import NewProjects from './Components/Pages/NewProjects'

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
          <Route exact path="/Projects">
            <Projects/>
          </Route>
          <Route exact path="/Company">
            <Company/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route exact path="/NewProject">
            <NewProjects/>
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;

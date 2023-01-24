import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Project from './components/pages/Project'


function App() {
  return (
   //Atenção pra tag "routes" que na versão 6 substitui o "switch" e dentro dos "routes" tem que usar o "element={'caminho do component'}
   <Router>
    <Navbar />
     <Container customClass="min-height">
      <Routes>
      
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route  path="/company" element={<Company />}>
          </Route>
          <Route  path="/projects" element={<Projects />}>
          </Route>
          <Route  path="/newproject" element={<NewProject/>}></Route>
          
          <Route  path="/contact" element={<Contact />}>
          </Route>
          <Route  path="/project/:id" element={<Project />}>
          </Route>
         

          
          
      
      </Routes>
    </Container>
    <Footer/>

   </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
//import Header from './Header';
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom';
import Form from './Components/Form';
import ToDoList from './ToDoList';
function Profile() {
  return (
    <div className="myclass">
     <h1> personal portfolio</h1> <b>
     <p>Name:  Manasa G M</p>
     <p>email address: manasa17mg@gmail.com</p></b>
     

      <img src="mmm.jpeg" height="100" width="100"/>
  </div>
  )
}

function Skills() {
  return (
    
    <div className="class" >
     <h1> Technical skills</h1> <b>
     <ul><li>html</li>
      <li>basic of php  </li>
      <li> basic of java and sql</li>
     
     </ul></b>
  </div>
  )
}


function About() {
  return (
    <div className="a">
     
      This is my about component
    </div>
  );
}

function Us() {
  return (
    <div className="a">
     
     how Can we help you?
    </div>
  );
}




function Contact() {
  return (
    <div className="a">
     
      cantact us <br></br> 
      <Link to="/Us"> Inship@gmail.com</Link>
    </div>
  );
}

function Teams() {
  return (
    <div className="a">
     
     <h3> This is my Team</h3>
      <p><b>My team members are:</b></p>
      <ul>
        <li>Manasa g m</li>
        <li>Akshatha k s</li>
        <li>Jayanthi </li>
        <li>Kavya p s</li>
      </ul>
    </div>
  );
}

function NavBar() {
  return (
    <div className="a">
     
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/add-student"> add-student</Link>
      <Link to="/todolist">ToDoList</Link>
    </div>
  );
}


function App() {
  return (
    <div className="a">
     
      
     <BrowserRouter>
     <NavBar/>
     <Routes>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/teams" element={<Teams/>}></Route>
     <Route path="/us" element={<Us/>}></Route>
     <Route path="/add-student" element={<Form/>}></Route>
     <Route path="/todolist" element={<ToDoList/>}></Route>
     </Routes>
     </BrowserRouter>
    

    </div>
  );
}

export default App;

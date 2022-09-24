import logo from './logo.svg';
import './App.css';

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
     <li>c and c++</li>
     </ul></b>
  </div>
  )
}




function App() {
  return (
    <div className="App">
     
      <Profile/>
      <Skills/>
    </div>
  );
}

export default App;

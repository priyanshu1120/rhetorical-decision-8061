
import './App.css';
import { Navbar } from './Components/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import Home from './Components/Home/Home';
import Course from './Components/Courses/Course';

function App() {
  return (
    <div className="App">
      <Navbar />
     <div>React app</div>
      <Course/>
    </div>
  );
}

export default App;

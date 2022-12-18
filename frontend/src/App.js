import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import Course from './Components/Courses/Course';
import { CardFooter } from '@chakra-ui/react';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Footer from "./Components/Courses/Footer"

function App() {
  return (
    <div className="App">
    <Navbar/>
     <div>React app</div>
     
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;

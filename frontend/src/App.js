import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
     <div>React app</div>
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;

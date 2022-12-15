
import './App.css';
import { Navbar } from './Components/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import InternShip from './Pages/InternShip';

function App() {
  return (
    <div className="App">
      <Navbar />
     <InternShip />
     <AllRoutes/>
    </div>
  );
}

export default App;

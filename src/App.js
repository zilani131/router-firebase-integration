
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Components/home/Home';
import Login from './Components/login/Login';
import Header from './Components/header/Header';

function App() {
  return (
    <div className="App">
       <Header></Header>
         <Routes>
            <Route path="/home" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
         </Routes>
    </div>
  );
}

export default App;

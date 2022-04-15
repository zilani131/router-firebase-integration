
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Components/home/Home';
import Login from './Components/login/Login';
import Header from './Components/header/Header';
import Register from './Components/Register/Register';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
       <Header></Header>
         <Routes>
            <Route path="/home" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/orders" element={<Orders></Orders>} />
            <Route path="/products" element={<Products></Products>} />
         </Routes>
    </div>
  );
}

export default App;

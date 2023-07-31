import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>  
        <Route path='/cart' element={<Cart/>} ></Route>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
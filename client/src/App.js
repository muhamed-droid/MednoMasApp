
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';

function App() {

  return (
    <div className="App">
      <Router> 
        <Link to="/createproduct"> Create a Product</Link>
          <Routes>
            <Route path="/" exact component={Home}/>
            <Route path="/createproduct" exact component={CreateProduct}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

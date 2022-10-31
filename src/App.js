import './App.css';
import VendingMachine from './VendingMachine';
import ItemSelector from './ItemSelector';
import Snacks from './Snacks';
import { Route, BrowserRouter, NavLink } from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <h1>Vending Machine</h1>
                <Route exact path="/">
                    <ul>
                      <li><NavLink exact to={`/sodas`}>Sodas</NavLink></li>
                      <li><NavLink exact to={`/chips`}>Chips</NavLink></li>
                      <li><NavLink exact to={`/snickers`}>Snickers</NavLink></li>
                    </ul>
                </Route>
                <Route exact path={"/sodas"}>
                  <Snacks snack={"sodas"} ></Snacks>
                </Route>
                <Route exact path={`/chips`}>
                    <Snacks snack={"chips"} ></Snacks>
                </Route>
                <Route exact path={`/snickers`}>
                    <Snacks snack={"snickers"} ></Snacks>
                </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

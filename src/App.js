import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Rec from './assets/Rectangle 113.svg';
import NavBar from './components/NavBar/navbar';
import Home from './components/Home/home';
import Industries from './components/Industries/industries';
import Arrow from './components/Arrow/arrow';
import MainPage from "./components/MainPage/mainPage";

function App() {
  return (
    <div className="App">

      {/* <NavBar/> */}

      <Router>
          <NavBar />
          <MainPage/>
        </Router>
        <Arrow />


      {/* <Home/>

      <Industries/>
      <Arrow /> */}

      {/* <img src={Rec} alt="React Logo" /> */}
    </div>
  );
}

export default App;

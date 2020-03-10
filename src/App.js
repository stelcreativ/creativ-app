import React from 'react';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
import './App.css';



const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Main />
      </div>
      <div className="fixed-action-btn">
        <Link to="randomint" className="btn-floating btn-large red">
          <i className=" fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
}

export default App;

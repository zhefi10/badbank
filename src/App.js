import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import { HashRouter  as Router } from 'react-router-dom';
import UserContext from './Components/context';
import './styles/App.css';
import Home from './Components/home';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import AllData from './Components/alldata';
import Login from './Components/login';
import CreateAccount from './Components/createaccount';
import NavBar from './Components/navbar';
import Footer from './Components/footer';
import { Container } from 'react-bootstrap';


function App() {

  const initUser = [{name: '', email: '', password: '', history: [{deposit: '', withdraw: '', balance:0}]}];
  return (
    <Container className="App">
      <Router>
          <h1> 
              <span> This is not BadBank </span>
          </h1>
        <NavBar />
        <hr/>
        <UserContext.Provider value = { initUser }>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/createAccount" exact element={<CreateAccount/>} />
            <Route path="/login" exact element={<Login/>} />
            <Route path="/deposit" exact element={<Deposit/>} />
            <Route path="/withdraw" exact element={<Withdraw/>} />
            <Route path="/allData" exact element={<AllData/>} />
          </Routes>
        </UserContext.Provider>
        <Footer />
    </Router>
  </Container>
  );
}
export default App;


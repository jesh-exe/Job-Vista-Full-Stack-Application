import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Routes, Route } from 'react-router';

import Footer from './components/Footer';
import JobDetails from './components/JobDetails';
import Header from './components/Header';


function App() {
  return (
    <div className="App bg-light">
      <Header></Header>

      <JobDetails ></JobDetails>
      <Routes>

        <Route></Route>
        <Route></Route>
        <Route></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;

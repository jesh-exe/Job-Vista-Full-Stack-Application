import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";

import './App.css';

import { Route, Routes } from 'react-router';

import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Header from './components/Header';
import JobDetails from './components/JobDetails';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App bg-light">
      <Header></Header>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/jobs' element={<JobDetails></JobDetails>}></Route>
        <Route path='/contactus' element={<ContactPage></ContactPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

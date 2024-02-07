import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Route, Routes } from 'react-router';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Header from './components/Header';
import JobSeeker from './components/JobSeeker';

function App() {
  return (
    <div className="App bg-light">
      <Header></Header>
    
      {/* <JobDetails ></JobDetails> */}
      
      <ContactPage></ContactPage>
      <JobSeeker></JobSeeker>
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


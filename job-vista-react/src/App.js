import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Header from './components/Header';
import JobDetails from './components/JobDetails';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage/MainPage';
import RegisterRecruiter from './components/Registration/RegisterRecruiter';
import RegisterJobseeker from './components/Registration/RegisterJobSeeker/RegisterJobSeeker'
import Dashboard from './components/Dashboard/Dashboard';
import NewJob from './components/Dashboard/NewJob';
import Main from './components/Dashboard/Main';
import JobList from './components/Dashboard/JobList';
import JobCard from './components/Dashboard/JobCard';
import { getLoggedRecruiter, resetRecruiterDetails, setRecruiterDetails } from './redux/slices/Recruiter/RecruiterSlice';
import { useDispatch, useSelector } from 'react-redux';
import RecruiterService from './service/RecruiterService';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import ApplicantCard from './components/Dashboard/ApplicantCard';




function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recruiterDetails = useSelector(getLoggedRecruiter);

  useEffect(() => {
    
    //Checking if JWT Token exists in local storage
    var jwtToken = JSON.parse(localStorage.getItem("jwt-token"));
    if (jwtToken) {
      //If Recruiter
      if (jwtToken.holder === "RECRUITER") {
        //Send the jwt as header to the Backend
        if (recruiterDetails.email === "" || recruiterDetails.email === undefined) {
          RecruiterService.loadUserByJwtToken(jwtToken.jwtToken).then((response) => {
            //Set recruiter Details
            // console.log(recruiterDetails)
            dispatch(setRecruiterDetails(response.data));
          }).catch((error) => {
            //Might be expired
            localStorage.removeItem("jwt-token");
            dispatch(resetRecruiterDetails());
            toast.error("Session expired");
          })
        }
      }

      //For Jobseeker

    }

  })

  return (
    <div className="App bg-light">
      <Header></Header>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/jobs' element={<JobDetails></JobDetails>}></Route>
        <Route path='/contactus' element={<ContactPage></ContactPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register'>
          <Route path='recruiter' element={<RegisterRecruiter></RegisterRecruiter>}></Route>
          <Route path='jobseeker' element={<RegisterJobseeker></RegisterJobseeker>}></Route>
        </Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='' element={<Main></Main>}></Route>
          <Route path='new_job' element={<NewJob></NewJob>}></Route>
          <Route path='jobs' element={<JobList></JobList>}></Route>
            <Route path=':id' element={<JobCard></JobCard>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer className="mt-5 pt-2" />
    </div>
  );
}

export default App;
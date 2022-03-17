import * as React from 'react';
import './App.css';
//pages Imports
import Help from './pages/help'
import Home from './pages/home'
import Login from './pages/login'
import GetVolunteers from './pages/getVolunteers'
import GetTutor from './pages/getTutor'
import Signup from './pages/signup'
import Schedule from './pages/member/schedule'
import MemberAnnouncements from './pages/member/announcements';
import Events from './pages/member/events';
import Profile from './pages/member/profile';
import Tutoring from './pages/member/tutoring';
import AdminAnnouncements from './pages/admin/adminAnnouncements';
import People from './pages/admin/people';
import Dashboard from './pages/admin/dashboard';
import Build from './pages/admin/build'
import AddVo from './pages/admin/addVo'

//React Router Imports
import {BrowserRouter,Routes,Route,} from 'react-router-dom'


//MUI Imports



function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <title>H</title>
      </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/get-volunteers" element={<GetVolunteers/>}/>
        <Route path="/get-tutor" element={<GetTutor/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

        <Route path="/username/schedule" element={<Schedule/>}/>
        <Route path="/username/announcements" element={<MemberAnnouncements/>}/>
        <Route path="/username/tutoring" element={<Tutoring/>}/>
        <Route path="/username/events" element={<Events/>}/>
        <Route path="/username/profile" element={<Profile/>}/>

        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/people" element={<People/>}/>
        <Route path="/admin/announcements" element={<AdminAnnouncements/>}/>
        <Route path="/admin/build" element={<Build/>}/>
        <Route path="/admin/addVo" element={<AddVo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

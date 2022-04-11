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


function App() {
  
//example
const [mailerState, setMailerState] = React.useState({
  name: "",
  email: "",
  message: "",
});
function handleStateChange(e) {
  setMailerState((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
}

const submitEmail = async (e) => {
  e.preventDefault();
  console.log({ mailerState });
  const response = await fetch("http://localhost:5000/send", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ mailerState }),
  })
    .then((res) => res.json())
    .then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === "success") {
        alert("Message Sent");
      } else if (resData.status === "fail") {
        alert("Message failed to send");
      }
    })
    .then(() => {
      setMailerState({
        email: "",
        name: "",
        message: "",
      });
    });
};
  return (
    <BrowserRouter>
      <div className="App">
        <title>H</title>
          {/* example */}
          <form
       style={{
         display: "flex",
         height: "100vh",
         justifyContent: "center",
         alignItems: "center",
       }}
       onSubmit={submitEmail}
        >
       <fieldset
         style={{
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           width: "50%",
         }}
       >
         <legend>React NodeMailer Contact Form</legend>
         <input
           placeholder="Name"
           onChange={handleStateChange}
           name="name"
           value={mailerState.name}
         />
         <input
           placeholder="Email"
           onChange={handleStateChange}
           name="email"
           value={mailerState.email}
         />
         <textarea
         style={{ minHeight: "200px" }}
           placeholder="Message"
           onChange={handleStateChange}
           name="message"
           value={mailerState.message}
         />
        <button>Send Message</button>
       </fieldset>
     </form>




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

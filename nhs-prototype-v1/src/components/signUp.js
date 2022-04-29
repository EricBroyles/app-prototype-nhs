import React, {Fragment, useState} from "react"
import Popup from "./Cards/popUpCard"


const SignUp= ({event}) =>{
    const[data, setMember]=useState([event.members_signed])
    
    const members_signed=["hello", "poop"]

const addMember=async(e)=>{
    e.preventDefault();
    console.log(data);
    try {
        const body={members_signed}
        const response= await fetch(`http://localhost:5000/event/${event.schedule_id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

        window.location="/username/events"
        
    } catch (error) {
        console.error(error.message+"lollo")
    }
    
}
const [isOpen, setIsOpen] = useState(false);
 
const togglePopup = () => {
  setIsOpen(!isOpen);
}

return <div>
  <input
    type="button"
    value="Click to Open Popup"
    onClick={togglePopup}
  />
  
  {isOpen && <Popup
    content={<>
      <p align="center">Enter Your Name</p>
      <l></l>
      <input class="center-block" align="center" type="text" value={data} onChange={e => setMember(e.target.value)}></input>
      <button onClick={e => addMember(e)}>Test button</button>
    </>}
    handleClose={togglePopup}
  />}
</div>
}


 export default SignUp;

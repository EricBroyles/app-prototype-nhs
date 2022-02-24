import MemberNavBar from "../../components/navigation/MemberNavBar"
import AnnouncementTag from "../../components/AnnouncementTag"
const Events = () => {

    return(
        <div className = "Schedule">
            <MemberNavBar/>
            <AnnouncementTag/>
            <h1 style={{marginTop: 50}}>Events for member</h1>
            
        </div>
    )
}

export default Events
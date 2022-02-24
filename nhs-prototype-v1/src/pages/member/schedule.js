import ScheduleCard from "../../components/Cards/ScheduleCard"
import MemberNavBar from "../../components/navigation/MemberNavBar"
import AnnouncementTag from "../../components/AnnouncementTag"
import MockDatabase from "../../MockDatabase"
//MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


const Schedule = () => {
    //type,times, location, names, contacts, must be given a value
   const scheduleCards = MockDatabase("userSchedule")
        
    


    //mt is short for margin top
    return(
        <div className = "Schedule">
            <MemberNavBar/>
            <AnnouncementTag/>
            <Box p={5} >
                <Grid container spacing={5}>
                    {scheduleCards.map((scheduleCard, i) => {
                        return (
                            <Grid item key={i}> 
                                <ScheduleCard  {...scheduleCard}/>
                            </Grid>
                        )})}
                </Grid>
            </Box>
            
        </div>
    )
}

export default Schedule
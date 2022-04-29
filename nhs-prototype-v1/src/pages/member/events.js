import MemberNavBar from "../../components/navigation/MemberNavBar"
import AnnouncementTag from "../../components/AnnouncementTag"
import EventSignUpCard from "../../components/Cards/EventSignUpCard";
import React, {useState, useEffect} from "react";
//MUI Imports
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Events = () => {


    const getTable= (e)=>{
        const dates=e.dates;
        const begin_times=e.begin_times;
        const end_times=e.end_times;
        const locations=e.locations;
        const spots=e.num_spots;
        const length = locations.length;

        let table=[]

        for(let i=0; i<length; i++){
            let row={
                beginTime:begin_times[i],
                endTime:end_times[i],
                date:dates[i],
                location: locations[i],
                spots: spots[i]
            }
            table.push(row);
        }

        return table

    }   
    const [events,setEvents]=useState([]);

    const getEvents= async()=>{
        try {
            const response= await fetch("http://localhost:5000/events")
            const jsonData= await response.json()

            setEvents(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getEvents();
    }, []);

    return(
        <div className = "Schedule">
            <MemberNavBar/>
            <AnnouncementTag/>
            <Box display="flex" justifyContent="center">
            <Paper elevation={4} sx={{minHeight: 600, maxWidth: 900, m: 1, p: 4 }}>
                {events.map(ev => (
            <EventSignUpCard key={ev.scheldule_id} 
                    table={getTable(ev)}
                    event={ev}
                
        
                    title={ev.title}
                    sponsor={ev.names}
                    description={ev.comments}
                    contacts={{email: ev.emails, phone: ev.phones }}
                />
        ))}
            </Paper>
            </Box>
        </div>
    )
}

export default Events
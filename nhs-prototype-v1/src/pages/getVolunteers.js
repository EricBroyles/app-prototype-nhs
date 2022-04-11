import NavBar from "../components/navigation/NavBar"
import Footer from "../components/navigation/Footer"
import GetVolunteersForm from "../components/Forms/Steppers/getVolunteersForm";


import Grid from '@mui/material/Grid';

const getVolunteers = () => {
    return(
        <Grid container direction="column"spacing={4}>
            <Grid item>
                <NavBar/>
            </Grid>
            <Grid item>
                <GetVolunteersForm/>
            </Grid>
            <Grid item>
                <Footer/>
            </Grid>
        </Grid>
            
            
            
            
            
       
    )
}

export default getVolunteers
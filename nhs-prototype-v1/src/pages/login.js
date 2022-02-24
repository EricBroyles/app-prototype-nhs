import React from 'react'

//React Router Imports
import {Link, useNavigate} from 'react-router-dom'
//MUI Imports
import Button from '@mui/material/Button';
import Box from '@material-ui/core/Box';
import LinkMUI from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
//Icons
import CloseIcon from '@mui/icons-material/Close';

const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if(data.get('email') === "admin" && data.get('password') === "123"){
            navigate('/admin/dashboard')
        }
        else{
            navigate('/username/schedule')
        }


        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };


    return(
    <div className= "pages-login">
        
        <Paper sx={{padding: 2, marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center'}} >
            <Typography component="h1" variant="h5">Login</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} justifyContent="flex-end">
                <Grid item xs={12}>
                    <TextField required fullWidth id="email" label="Email Address" name="email"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField required fullWidth name="password" label="Password" type="password" id="password"/>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                     Login
                    </Button>
                </Grid>
                <Grid item>
                    <LinkMUI component={Link} to="/signup" variant="body2">Don't have an account? Signup here</LinkMUI>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item>
                    <Fab color="secondary" aria-label="close" component={Link} to="/">
                        <CloseIcon />
                    </Fab>
                </Grid>
            </Grid>
            </Box>
        </Paper>
    </div>
    )
}

export default Login
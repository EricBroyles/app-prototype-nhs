import React, { useState } from 'react';
//React Router Imports 
import {Link,} from 'react-router-dom'
//MUI Imports
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import LinkMUI from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


//MUI Picker Imports
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
//MUI Icons
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { intlFormat } from 'date-fns';


const theme = createTheme();

const Signup = () => {

  const [data, setData] = React.useState({
    type: "",
    first_name: "",
    last_name: "",
    paid_dues: false,
    grade_level: "",
    student_id: null,
    birth_date: "",
    email: "",
    phone: "",
    password: '',
  })
  React.useEffect(() => {
    console.log(data)
  }, [data])
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const info = new FormData(event.currentTarget);
        setData({...data,first_name: info.get('firstName'), last_name: info.get('lastName'), email: info.get('email') })
        console.log({
          email: info.get('email'),
          password: info.get('password'),
        });
      };

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setData({...data, birth_date: date.toDateString()})
    };

      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>

              <Box sx={{ display: 'flex' }}>
              <FormControl>
                <FormLabel id="radio-buttons-group">I am a...</FormLabel>
                <RadioGroup
                  aria-labelledby="radio-buttons-group"
                  name="radio-buttons-group"
                  value={data.type}
                  onChange={(event) => setData({...data, type: event.target.value})}
                >
                  <FormControlLabel value="nhsMember" control={<Radio />} label="NHS Member" />
                  <FormControlLabel value="student" control={<Radio />} label="Student" />
                  <FormControlLabel value="parent" control={<Radio />} label="Parent" />
                  <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
                  <FormControlLabel value="eventSponsor" control={<Radio />} label="Event Sponsor" />
                  
                </RadioGroup>
              </FormControl>
              </Box>



              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="select-label">Grade</InputLabel>
                                <Select
                                labelId="select-label"
                                id="select"
                                value={data.grade_level}
                                label="School Year"
                                onChange={(event) => setData({...data, grade_level: event.target.value})}
                                >
                                <MenuItem value="Freshman">Freshman</MenuItem>
                                <MenuItem value="Sophomore">Sophomore</MenuItem>
                                <MenuItem value="Junior">Junior</MenuItem>
                                <MenuItem value="Senior">Senior</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            label="Date of Birth"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <LinkMUI href="/login" variant="body2">
                      Already have an account? Sign in
                    </LinkMUI>
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
            </Box>
          </Container>
        </ThemeProvider>
        
      );
}

export default Signup

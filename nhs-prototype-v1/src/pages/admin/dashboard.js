import * as React from 'react';
import AdminNavBar from "../../components/navigation/AdminNavBar"
import EventProposalCard from '../../components/Cards/ToDoCards/EventProposalCard';
import MemberIssueCard from '../../components/Cards/ToDoCards/MemberIssueCard';
import ApplicationCard from '../../components/Cards/ToDoCards/ApplicationCard'
import HoursCard from '../../components/Cards/ToDoCards/HoursCard'
import FastFactsCard from '../../components/Cards/FastFactsCard';
//MUI Imports
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  }
  

const Dashboard = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
    <div className = "dashboard">
      <AdminNavBar/>
      <Grid container spacing={10}>
        <Grid item>
        <Typography variant="h4" mt={10} ml={2}>To Do</Typography>
        <Paper elevation={4}sx={{minHeight: 600, maxWidth: 900, m: 1}}>
        
          <Box display="flex" justifyContent="center" sx={{ borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={value} onChange={handleChange} aria-label="tabs" justifyContent="center">
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Event Proposals" {...a11yProps(1)} />
              <Tab label="Submitted Hours" {...a11yProps(2)} />
              <Tab label="Applications" {...a11yProps(3)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <EventProposalCard/>
            <MemberIssueCard/>
            <ApplicationCard/>
            <HoursCard/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item 4
          </TabPanel>
        </Paper>          
        </Grid>
        <Grid item mt={10}>
          <Paper elevation={4} sx={{minHeight: 500, maxWidth: 500, m:1}}>
            <FastFactsCard/>
            
          </Paper>
        </Grid>
      </Grid>
      
      
      </div>
    )
}

export default Dashboard
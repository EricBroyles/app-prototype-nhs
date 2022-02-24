import * as React from 'react';
import AdminNavBar from "../../components/navigation/AdminNavBar"
import MockDatabase from "../../MockDatabase"
//MUI Imports
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//MUI Icons Imports
import EditIcon from '@mui/icons-material/Edit';
import FinishIcon from '@mui/icons-material/CheckCircleOutline';
//Datagrid Imports
import { DataGrid,} from '@mui/x-data-grid';

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





export default function People() {
  const [checkboxSelection, setCheckboxSelection] = React.useState(false)
  const [pageSize, setPageSize] = React.useState(10);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [edit, setEdit] = React.useState({canEdit: false, text: "Edit Items", backgroundColor: 'primary', icon: "edit"});
  const handleClick = () => {
    setCheckboxSelection(!checkboxSelection)
    if(edit.canEdit){
      setEdit({canEdit: !edit.canEdit, text: "Edit Items", backgroundColor: 'primary', icon: "edit"})
    }else{
      setEdit({canEdit: !edit.canEdit, text: "Finish Editing", backgroundColor: 'success.main', icon: "finish"})
    }
  }

  const columns = [
    {field: 'name', width: 120, headerName: 'Name', editable: edit.canEdit, 
    valueGetter: (params) =>`${params.row.firstName || ''} ${params.row.lastName || ''}`, },
    {field: 'tutoringHours',width: 125, headerName: 'Tutoring Hours', editable: edit.canEdit},
    {field: 'serviceHours', width: 125, headerName: 'Service Hours', editable: edit.canEdit},
    {field: 'serviceProjects', width: 130, headerName: 'Service Projects', editable: edit.canEdit},
    {field: 'paidDues', headerName: 'Paid Dues', editable: edit.canEdit},
    {field: 'grade', headerName: 'Grade', editable: edit.canEdit},
    {field: 'role', headerName: 'Role', editable: edit.canEdit},
    {field: 'studentId', headerName: 'Student ID', editable: edit.canEdit},
    {field: 'email',width: 160, headerName: 'Email', editable: edit.canEdit},
  ]
  const rows = MockDatabase("users")

  const editerIcon = () => {
    if(edit.icon === "edit"){
      return(<EditIcon/>)
    }else{
      return(<FinishIcon/>)
    }
  }

  return (
    <div className="People">

      <AdminNavBar/>
      <Box sx={{ width: '100%' }}>
        <Box display="flex" justifyContent="center" sx={{ borderBottom: 1, borderColor: 'divider',marginTop: 8}}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs" justifyContent="center">
            <Tab label="NHS members" {...a11yProps(0)} />
            <Tab label="Applications" {...a11yProps(1)} />
            <Tab label="Event Sponsors" {...a11yProps(2)} />
            <Tab label="Students" {...a11yProps(3)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Button variant="contained" sx={{ mb: 2, backgroundColor: edit.backgroundColor}} endIcon={editerIcon()} onClick={handleClick} >
            {edit.text}
          </Button>
          <div style={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[10, 50, 100]}
              pagination
              checkboxSelection= {checkboxSelection}
              disableSelectionOnClick
            />
          </div>
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
      </Box>
    </div>
  );
}

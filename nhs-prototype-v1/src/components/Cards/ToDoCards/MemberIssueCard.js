import * as React from 'react';
//MUI Imports
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
//MUI Icons

export default function MemberIssueCard(){
    const[newTagDisplay, setNewTagDisplay] = React.useState('display')
    const handleNewTagDisplay = () => {
      if(newTagDisplay === 'display'){
        setNewTagDisplay('none')
      }
    }
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return(
        <Card elevation={5} onClick = {handleNewTagDisplay} sx={{ padding: 2, marginBottom: 2}}>
          <Alert severity="warning">
          <Stack direction="column" spacing= {1}>
            <Stack direction="row" spacing={1}>
              <Typography variant="h5">Member Issue</Typography>
              <Chip label="New" color="warning" sx={{display: newTagDisplay}}/>
            </Stack>
            <Typography variant="b1">comments: </Typography>
            <Typography variant="b2">date: </Typography>
            <Stack direction="row">
              <Button>Reply</Button>
              <Button>On It!</Button>
            </Stack>
          </Stack>
            </Alert>
        </Card>
    )
}
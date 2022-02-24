import * as React from 'react';
//MUI Imports
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
//MUI Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function EventProposalCard(){
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
          <Alert severity="info">
          <Stack direction="column" spacing= {1}>
            <Stack direction="row" spacing={1}>
              <Typography variant="h5">Event Proposal</Typography>
              <Chip label="New" color="primary" sx={{display: newTagDisplay}}/>
            </Stack>
            <Typography variant="b1">Location, times, num of students, email, phone, comments </Typography>
            
          </Stack>

          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>hello</Typography>
              <Stack direction="row">
              <Button>Approve</Button>
              <Button>Reject</Button>
            </Stack>
            </CardContent>
          </Collapse>
          </Alert>
        </Card>
    )
}
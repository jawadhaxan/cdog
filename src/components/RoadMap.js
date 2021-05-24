import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import HotelIcon from '@material-ui/icons/Hotel';
// import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./RoadMap.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function RoadMap() {
  const classes = useStyles();

  return (
    <div className="road-container ">

    <Timeline align="alternate" >
           <p style = {{color:'brown', fontFamily:'cursive',fontSize:100,textAlign:'center'}}>RoadMap</p>
      <TimelineItem>
        <TimelineOppositeContent >
     
        </TimelineOppositeContent>
        <TimelineSeparator style = {{color:'red'}}>
          <TimelineDot color="secondary"  style = {{marginTop:'100%'}}>
            <Typography variant="h6" component="h1" style = {{fontFamily:'monospace',fontSize:40,color:'goldenrod'}}>
              Q2
            </Typography>
            {/* <FastfoodIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} 
          style = {{marginTop:'30%', backgroundColor:'goldenrod',textAlign:'center'}}>
            {/* <Typography variant="h6" component="h1" style = {{fontFamily:'monospace',fontSize:40}}>
              Q2
            </Typography> */}
            <Typography style = {{fontFamily:'cursive', fontSize:30,marginTop:'2%'}}> - PancakeSwap</Typography>
            <Typography style = {{fontFamily:'cursive', fontSize:30}}> - Coin-gecko Listing</Typography>
            <Typography style = {{fontFamily:'cursive', fontSize:30}}> - Coinmarketcap Listing</Typography>
            <Typography style = {{fontFamily:'cursive', fontSize:30}}> - Audit Completion</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {/* <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
        </TimelineOppositeContent> */}
        <TimelineSeparator>
          <TimelineDot color="secondary"  style = {{marginTop:'200%'}}>
            {/* <LaptopMacIcon /> */}
            <p style = {{fontFamily:'monospace',fontSize:40,color:'goldenrod'}}>Q3</p>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} 
          style = {{marginTop:'10%', backgroundColor:'goldenrod',minHeight:'70%',textAlign:'center'}}>
            {/* <Typography variant="h6" component="h1" style = {{fontFamily:'monospace',fontSize:40}}>
              Q3
            </Typography> */}
            <Typography style = {{fontFamily:'cursive', fontSize:30,margin:'5%'}}> - Launch NFT Marketplace</Typography>
            <Typography style = {{fontFamily:'cursive', fontSize:30}}> - 2nd Series of exclusive NFTS</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary"  style = {{marginTop:'120%'}}>
            {/* <HotelIcon /> */}
                <p style = {{fontFamily:'monospace',fontSize:40,color:'goldenrod'}}>Q4</p>
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} 
          style = {{marginTop:'10%',minHeight:'70%', backgroundColor:'goldenrod',textAlign:'center'}}>
             {/* <Typography variant="h6" component="h1" style = {{fontFamily:'monospace',fontSize:40}}>
              Q4
            </Typography> */}
            <Typography style = {{fontFamily:'cursive', fontSize:30,margin:'5%'}}> - Exchange Listing</Typography>
            
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" style = {{marginTop:'120%'}}>
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} >
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
    </div>
  );
}

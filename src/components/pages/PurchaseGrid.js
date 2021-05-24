import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginRight:'2%',
      width: '50ch',
    },
    paper: {
    textAlign: 'center',
  },
    
  },
}));

export default function PurchaseGrid() {
  const classes = useStyles();
  
  return (
    <center>
    <form className={classes.root}  noValidate autoComplete="off">
      <div  className="cards" >
       
         <Grid container spacing={3} style = {{fontSize:40, backgroundColor:'goldenrod',marginBottom:'2%'}}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Token Sale</Paper>
        </Grid>
         <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
          <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        </Grid>
        
     
       


        <TextField
          id="outlined-textarea"
          label="Amount"
          placeholder="0.00000"
          multiline
          variant="outlined"
          type="number"
          size='medium'
           id={"mobileNumber"} name={"mobileNumber"}
          style={{backgroundColor: "white", borderBlockColor: "goldenrod"}}
          inputProps={{}}
        />
       <Button style = {{width:"20%", height:50, backgroundColor:'goldenrod', color:'white',fontSize:20}} variant="contained">Buy</Button>
      </div>
    </form>
    </center>
  );
}

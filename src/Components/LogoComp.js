import React from 'react';
import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const LogoComp = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.contStyles}>
        <Typography className={classes.titleStyles}>Dumyah Task</Typography>
    </Grid>
  )
}

export { LogoComp }

const useStyles = makeStyles(theme => ({
  contStyles: {
    width: '100%',
    height: 100,
    position: 'fixed',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(15, 63, 117)'
  },
  titleStyles:{
    fontSize:24,
    fontWeight:'bold',
    color:'#fff'
  }
}));

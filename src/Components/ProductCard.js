import React from 'react';
import {
  Box,
  makeStyles,
  Typography
} from '@material-ui/core';

const ProductCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Box className={classes.contStyles}>
      <img src={item?.image} className={classes.imageStyles} alt={'Product image'}/>
      <Typography className={classes.textStyles}>{item?.name}</Typography>
    </Box>
  )
}

export { ProductCard }

const useStyles = makeStyles(theme => ({
  contStyles: {
    width: '30%',
    height: 350,
    borderRadius: 50,
    margin: 15,
    border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageStyles: {
    width: '100%',
    height: 250,
    borderRadius: 50,
  },
  textStyles: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
}));

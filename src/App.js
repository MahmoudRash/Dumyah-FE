import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import { Provider } from 'react-redux'
import ProductsScreen from './Screens/ProductsScreen';
import { store } from './Store'

const useStyles = makeStyles(theme => ({
  contStyles: {
    height: '100vh',
    width: '100%',
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className={classes.contStyles}>
        <ProductsScreen />
      </div>
    </Provider>
  );
}


export default App;

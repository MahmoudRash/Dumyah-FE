import React from 'react';
import {
  Grid,
  makeStyles,
  Box,
} from '@material-ui/core';
import { LogoComp, ProductCard, DrawerComp } from '../Components';
import { useDispatch, useSelector } from 'react-redux'
import { getBrandsAction, getProductsAction ,filterObjectAction} from '../Store/Actions'

const ProductsScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const { products, brands,filter } = useSelector((dataReducer) => ({
    brands: dataReducer.brands,
    products: dataReducer.products,
    filter: dataReducer.filter,
  }))

  const updateFilter = (code,value) => {
    dispatch(filterObjectAction({
      ...filter,
      [code]:value
    }))
  }

  React.useEffect(() => {
    dispatch(getBrandsAction())
    dispatch(getProductsAction())
  }, [dispatch])
  
  const handleApplyingFilters = () => {
    dispatch(getProductsAction(filter))
  }

  return (
    <Grid className={classes.contStyles}>

      <LogoComp />

      <Box className={classes.pageCont}>
        <Box className={classes.innerBox}>
          <DrawerComp 
          filter={filter} 
          brands={brands}
          updateFilter={updateFilter} 
          handleApplyingFilters={handleApplyingFilters}/>
        </Box>

        <Box className={classes.dataStyles}>
          {products.map((item => {
            return <ProductCard key={item?.id} item={item} />
          }))}
        </Box>

      </Box>

    </Grid>
  )
}

export default ProductsScreen

const useStyles = makeStyles(theme => ({
  contStyles: {
    width: '100%',
    height: '100%',
  },
  pageCont: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  innerBox: {
    width: '25%',
    height: '100%',
    border:'1px solid #000'
  },
  dataStyles: {
    display: 'flex',
    width: '75%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'scroll',
    paddingTop: 100
  }
}));

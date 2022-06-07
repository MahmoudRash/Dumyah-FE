import React from 'react';
import {
  Grid,
  Box,
  makeStyles,
  TextField,
  Typography,
  Radio,
  FormGroup,
  FormControlLabel,
  Switch,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Slider,
  Button,
  ListItemAvatar,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';


const DrawerComp = ({filter,brands,updateFilter,handleApplyingFilters}) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    updateFilter('price',newValue)
  };
  console.log('brands',brands)
  return (
    <Grid className={classes.contStyles}>
      <Typography className={classes.textStyles}>Filters</Typography>
      <Box className={classes.filterStyles}>

        <TextField 
        id="input-field"
         label="Search For Item"
          variant="outlined"
           className={classes.fieldStyles} 
           value={filter?.name_like}
           onChange={(e) => updateFilter('name_like',e?.target?.value)}
           />


<Box className={classes.sliderCont}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={filter?.price}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </Box>

        <FormGroup className={classes.boxesCont}>
          <FormControlLabel 
            className={classes.radioStyles} 
            control={<Radio checked={filter?.gender ===-1} onChange={() => updateFilter('gender',-1)}/>} 
            label="All" 
          />

          <FormControlLabel 
            className={classes.radioStyles} 
            control={<Radio checked={filter?.gender ==='boys'} onChange={() => updateFilter('gender','boys')}/>} 
            label="Boys" 
          />
          <FormControlLabel 
          className={classes.radioStyles} 
          control={<Radio checked={filter?.gender ==='girls'} onChange={() => updateFilter('gender','girls')}/>} 
          label="Girls" />
        </FormGroup>

        <FormControl fullWidth className={classes.ratingStyles}>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter?.rating}
                label="Rating"
                onChange={(e) => updateFilter('rating',e?.target?.value)} 
              >
                {['All',1,2,3,4,5].map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
              </Select>
        </FormControl>

        
        <Autocomplete
      id="brands"
      options={[{manufacturer_id:-1,name:'All'},...brands]}
      onChange={(e,item) => updateFilter('brand.manufacturer_id',item?.manufacturer_id)}
      renderInput={params => (
        <TextField {...params} label="Brands" variant="outlined" />
      )}
      getOptionLabel={brands => brands.name}
      style={{ width: '100%' }}
    />

        <FormGroup>
      <FormControlLabel 
      control={<Switch checked={filter?.sale_ne} onChange={(e) => updateFilter('sale_ne',!filter?.sale_ne)} />} 
      label="Only Sale" />
    </FormGroup>

      <Button className={classes.buttonStyles} onClick={handleApplyingFilters}>
        <Typography className={classes.buttonText}>Apply Filter</Typography>
      </Button>
      </Box>

    </Grid>
  )
}

export { DrawerComp }

const useStyles = makeStyles(theme => ({
  contStyles: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 120,
  },
  filterStyles: {
    width: '90%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 30
  },
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  fieldStyles: {
    width: '100%',
  },
  radioStyles: {
    marginTop: 10
  },
  boxesCont:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'100%',
    marginTop:40,
    marginBottom:40,
  },
  ratingStyles:{
    marginBottom:40
  },
  sliderCont:{
    width:'100%',
    marginTop:40,
  },
  buttonStyles:{
    width:'100%',
    height:50,
    marginTop:40,
    backgroundColor: '#0EA197',
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff'
  },
  menuStyles:{
    height:100,
    padding:10
  }
}));

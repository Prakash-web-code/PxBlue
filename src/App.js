import React from 'react';
import Station from './Components/Station';
import Grid from '@material-ui/core/Grid';
import Classes from './App.module.css'


const App = () => {
  return <Grid container direction="row" justify="center" alignItems="center">
    <Grid className={Classes.container} container spacing={1}  >
      {/* Station Component which returns the station list */}
      <Station />
    </Grid>
  </Grid>
}

export default App;


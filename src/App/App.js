import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const APP_NAME = 'vauquelin - JSON translator';

const App = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {APP_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
    <div style={{ margin: 30 }}>
      <Grid container spacing={24}>
        <Grid item xs={5}>
          <Paper style={{ padding: 16 }}>
            <TextField
              label="Input JSON"
              multiline
              fullWidth
              onChange={() => {
              }}
              margin="normal"
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={{ padding: 16 }}>
            <Button variant="contained" color="primary">
              Translate
            </Button>
            <FormControl>
              <FormLabel component="legend">Translation provider</FormLabel>
              <RadioGroup
                aria-label="Translation provider"
                value="first"
                onChange={() => {
                }}
              >
                <FormControlLabel value="fist" control={<Radio/>} label="first"/>
                <FormControlLabel value="second" control={<Radio/>} label="second"/>
                <FormControlLabel value="third" control={<Radio/>} label="third"/>
              </RadioGroup>
              <TextField
                label="Custom API key"
                fullWidth
                onChange={() => {
                }}
                margin="normal"
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper style={{ padding: 16 }}>
            <textarea value="" onChange={() => {
            }}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </div>
)

export { App };

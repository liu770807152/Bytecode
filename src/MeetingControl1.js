import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SetGrid from './SetGrid';
import Editor from './Editor';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      

    },
  },
}));

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  return (
    <div>
      <Grid container alignContent="space-between" alignItems="center">
                      <Grid item xs={6} >
                      </Grid>
                      <Grid item xs={3}>
                      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        lodge meeting
                      </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        create meeting
                      </Button>
                      </Grid>
                  </Grid>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth}
      maxWidth={maxWidth}>
      
        <DialogTitle id="form-dialog-title">Schedule</DialogTitle>
        <DialogContent>
          <TextField
          autoFocus
          margin="dense"
          id="name"
          placeholder="what are you meeting for?"
          type="email"
          fullWidth
          />
          <SetGrid />
          <Editor />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
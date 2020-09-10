import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Grid from '@material-ui/core/Grid';
import MeetingInput from './MeetingInput';
import MeetingControl1 from './MeetingControl1';

class MeetingControl extends React.Component {
    render(){
        return (
            <MeetingControl1 />
          );

    }
  
}

export default MeetingControl;
import React from 'react'
import {  Grid, Paper, Avatar, makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TypeSelector from '../../components/TypeSelector';
import AssignedUserSelector from '../../components/AssignedUserSelector';
import PrioritySelector from '../../components/PrioritySelector';
import DueDateSelector from '../../components/DueDateSelector';
import ReminderSelector from '../../components/ReminderSelector';
import CreateByUserSelector from '../../components/CreateByUserSelector';
import QueueSelector from '../../components/QueueSelector';
import TextField from '../../components/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListIcon from '@material-ui/icons/List';

// const initialValues ={
//     assignedToUser : '',
//     dueDateCalendar : new Date(),
//     dueDateTime : '',
//     type : '',
//     priority : '',
//     reminder : '',
//     queue : '',
//     createdByUser : ''

// }
const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}

))
export default function UserTask(){

    const classes = useStyles();
    return(
            <Paper className={classes.pageContent}>
                <ListIcon>H</ListIcon>
                <Divider variant="middle" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>H</Avatar>
                    </ListItemAvatar>
                    <AssignedUserSelector />
                </ListItem>
            
                <Grid container>
                    <Grid item xs={6}>
                        <DueDateSelector />
                    </Grid>
                    <Grid item xs={3}>
                        <TypeSelector />
                    </Grid>
                    <Grid item xs={3}>
                        <PrioritySelector />
                    </Grid>
                    <Grid item xs={3}>
                        <ReminderSelector />
                    </Grid>
                    <Grid item xs={3}>
                        <QueueSelector />
                    </Grid>
                    <Grid item xs={3}>
                        <CreateByUserSelector />
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <TextField />
            </Paper>
        
         
       
        
          
          
    )
}

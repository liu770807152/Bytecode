import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider } from '@material-ui/styles';
import getTheme from '../Color/MatUIColor';




class Taskfollow extends React.Component {
    constructor(props) {
        super(props);
        const theme = getTheme();
        this.state = {
            checked: false,
            theme,
        };
        this.handlecheckbox = this.handlecheckbox.bind(this);
    }

    handlecheckbox(e) {
        this.setState({
            checked: true,
        });
    }


    render() {
        return (
            <div className='taskFollow'>
                <ThemeProvider theme={this.state.theme}>
                <Checkbox
                    checked={this.checked}
                    onChange={this.handlecheckbox}
                    color={'primary'}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                </ThemeProvider>
                <span>Create a task to follow up</span>
            </div>
        )
    }
}

export default Taskfollow;
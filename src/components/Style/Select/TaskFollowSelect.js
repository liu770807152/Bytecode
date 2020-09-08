import React, { Component } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Text from '../Text'
import './TaskFollow.scss';





class TaskFollowSelect extends React.Component {
    constructor(props) {
        super(props);
        const selectItems = [
            { key: 'Tomorrow', value: 1 },
            { key: 'in 2 business days', value: 2 },
            { key: 'in 3 business days', value: 3 },
            { key: 'in 1 week (September 16)', value: 7 },
            { key: 'in 2 weeks (September 23)', value: 14 },
            { key: 'in 1 month', value: 30 },
        ];
        this.state = {
            timeValue: 3,
            selectItems: selectItems,
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);

    }

    handleSelectChange(e) {
        this.updateValue(e.target.value);
    }

    updateValue(selectedValue) {
        this.setState({
            timeValue: selectedValue,
        });
    }





    render() {
        const { timeValue, selectItems } = this.state;
        return (
            <div>
                <ThemeProvider theme={this.props.theme}>
                    <Select
                        //disableUnderline
                        value={timeValue}
                        variant='standard'
                        onChange={this.handleSelectChange}
                        defaultValue={3}
                        className={"taskFollow__select__input"}
                    >
                        {selectItems.map((item) => (
                            <MenuItem value={item.value}>{item.key}</MenuItem>
                        ))}
                    </Select>
                </ThemeProvider>
            </div>
        );
    }
}

export default TaskFollowSelect;
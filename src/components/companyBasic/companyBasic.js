import React, { Component } from 'react';
import "../Companybasic/Companybasic.scss";
import IconNote from "../../img/Company/note.svg";
import IconMail from "../../img/Company/mail.svg";
import IconCall from "../../img/Company/call.svg";
import IconLog from "../../img/Company/log.svg";
import IconTask from "../../img/Company/task.svg";
import IconMeeting from "../../img/Company/meeting.svg";
import CompanyHeader from "./components/CompanyHeader/"
import CompanyAbout from "./components/CompanyAbout/"
import ActivityBar from "./components/ActivityBar/ActivityBar"
import NoteModal from "../Modal/components/Function/Note_Modal"
import EmailModal from "../Modal/components/Function/Email_Modal"



class Companybasic extends Component {
    constructor(props) {
        super(props);
        const navItems = [
            { key: 'Note', value: 'Note', src: IconNote, modal: (<NoteModal />) },
            { key: 'Email', value: 'Email', src: IconMail, modal: (<EmailModal />) },
            { key: 'Call', value: 'Call', src: IconCall, modal: "" },
            { key: 'Log', value: 'Log', src: IconLog, modal: (<EmailModal />) },
            { key: 'Task', value: 'Task', src: IconTask, modal: (<EmailModal />) },
            { key: 'Meeting', value: 'Meeting', src: IconMeeting, modal: (<EmailModal />) },
        ];
        this.state = {
            navItems,
            currentModal: navItems[0],
            
        }
        this.onNavItemClick = this.onNavItemClick.bind(this);
    }

    onNavItemClick(selectedModal) {
        console.log("Switch to the " + selectedModal.key)
        this.setState({
            currentModal: selectedModal,
        })
        this.props.openModal(selectedModal);
    }

    render() {
        const { navItems, currentModal } = this.state;
        return (
            <div className="company_information">
                <CompanyHeader />

                <ActivityBar
                    navItems={navItems}
                    currentWindow={currentModal}
                    onNavItemClick={this.onNavItemClick}
                />

                <CompanyAbout />
            </div>

        )
    }
}

export default Companybasic;
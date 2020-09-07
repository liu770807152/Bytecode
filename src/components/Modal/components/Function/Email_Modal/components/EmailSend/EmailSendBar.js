import React from 'react';
import ContainedButton from '../../../../../../Style/Button/ContainedButton';
import OutlinedButton from '../../../../../../Style/Button/OutlinedButton';
import "./EmailSendBar.scss"





const EmailSendBar = ({
    children
}) => (
        <div className="emailSendBar">
            <div className="emailSendBar__send">
                <ContainedButton>Send</ContainedButton>
            </div>
            <div className="emailSendBar__sendLater">
                <OutlinedButton>Send Later</OutlinedButton>
            </div>
        </div>

    )




export default EmailSendBar;
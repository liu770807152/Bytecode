import React from 'react';
import './EmailHeader.scss';
import HeaderItem from './components/HeaderItem';


const EmailHeader = () => (
    <div className="emailHeader">
        <div className="emailHeader__blank"/>
        <div className="emailHeader__main">
            <div className="emailHeader__main__item emailHeader__main__to">
                <HeaderItem> To</HeaderItem>
            </div>
            <div className="emailHeader__main__item emailHeader__main__from border-bottom">
                <HeaderItem> From</HeaderItem>
            </div>
            <div className="emailHeader__main__item emailHeader__main__subject border-bottom">
                <HeaderItem> Subject</HeaderItem>
            </div>
        </div>
        <div className="emailHeader__blank" />
    </div>
)

export default EmailHeader;



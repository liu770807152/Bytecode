import React from 'react';
import './EmailHeader.scss';
import HeaderItem from './components/HeaderItem';


const EmailHeader = () => (
    <div className="emailHeader">
        <div className="header_item header_item_to">
            <HeaderItem> To</HeaderItem>
        </div>
        <div className="header_item header_item_from">
            <HeaderItem> From</HeaderItem>
        </div>
        <div className="header_item header_item_subject">
            <HeaderItem> Subject</HeaderItem>
        </div>
    </div>
)

export default EmailHeader;



import React from 'react';
import './EmailHeader.scss';
import HeaderItem from './components/HeaderItem';


const EmailHeader = () => (
    <React.Fragment>
        <div className="emailHeader">
            <div className="emailHeader__blank" />
            <div className="emailHeader__main">
                <HeaderItem value={"To"}
                    borderBottom={false}
                >
                    <div className="item-content receiver">
                        <span className="receiver__name">John 1111111 Wick</span>
                    </div>
                </HeaderItem>
                <HeaderItem
                    value={"From"}
                    borderBottom={true}
                >
                     <div className="item-content sender">
                        <span>abc</span>
                    </div>
                </HeaderItem>
                <HeaderItem
                    value={"Subject"}
                    borderBottom={true}
                >
                     <div className="item-content subject">
                        <span>abc</span>
                    </div>
                </HeaderItem>
            </div>
            <div className="emailHeader__blank" />
        </div>
    </React.Fragment>
)

export default EmailHeader;



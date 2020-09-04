import React from 'react';
import "./HeaderItem.scss";



const HeaderItems = ({
    children
}) => {
    return(
        <span className="header_text">{children}</span>
    )
}
   


export default HeaderItems;
import React from 'react';
import "./ButtonStyle.scss";




const ContainedButton = ({
    children
}) => {
    return (
        <button className="containedButton">{children}</button>
    )

}


export default ContainedButton;

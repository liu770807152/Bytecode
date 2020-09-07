import React from 'react';
import "./ButtonStyle.scss";





const OutLinedButton = ({
    children
}) => {
    return (
        <button className="outlinedButton">{children}</button>
    )

}


export default OutLinedButton;


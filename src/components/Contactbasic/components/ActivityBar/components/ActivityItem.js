import React from 'react';

import './ActivityItem.scss';

const ActivityItem = ({
    name,
    src,
    onClick,
    children
}) => {
    let itemClassName = 'activity__item';
    let buttonClassName = 'activity__button';
    let iconClassName = 'activity__icon';
    let ActivityNameClassName = 'activity__name';


    

    return (
        <div className={itemClassName}>
            <button
                className={buttonClassName}
                onClick={(event) => {
                    event.preventDefault();
                    onClick();
                }}
            >
                <img className={iconClassName} src={src} alt={name} />
            </button>
            <div className={ActivityNameClassName}>
                {children}
            </div>
        </div>
    );
};

export default ActivityItem;
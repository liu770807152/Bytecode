import React from 'react';
import Text from '../../../../../../Style/Text'
import "./EmailFunctionBar.scss"



const EmailFunctionBar = ({
    items,
    onItemClick,
}) => (
        <nav className="emailFunctionBar">
            {items.map((item) => (
                <div className = "functionBar_Item">
                    <Text className="functionBar_Item_Text"
                    // onClick={() => onItemClick()}
                    >
                        {item.value}
                    </Text>
                </div>

            ))}
        </nav>
    );

export default EmailFunctionBar;

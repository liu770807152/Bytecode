import React from 'react';
import Text from '../../../../../../Style/Text'
import "./EmailFunctionBar.scss"



const EmailFunctionBar = ({
    items,
    onItemClick,
}) => (
        <nav className="EmailFunctionBar">
            {items.map((item) => (
                <div className = "FunctionBar_Item">
                    <Text className="FunctionBar_Item_Text"
                    // onClick={() => onItemClick()}
                    >
                        {item.value}
                    </Text>
                </div>

            ))}
        </nav>
    );

export default EmailFunctionBar;

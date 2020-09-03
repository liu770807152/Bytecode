import React from 'react';
import "./EmailModal.scss";
import EmailFunctionBar from "./components/EmailFunctionBar";
import Text from '../../../../Style/Text';

class EmailModal extends React.Component {
  constructor(props) {
    super(props);
    const items = [
      { key: 'templates', value: 'templates' },
      { key: 'sequences', value: 'sequences' },
      { key: 'Documents', value: 'Documents' },
      { key: 'Meetings', value: 'Meetings' },
      { key: 'Quotes', value: 'Quotes' },
    ];
    this.state = {
      items,
    }
  }

  render() {
    const { items } = this.state;
    return (
      <div className="EmailModal">
        <EmailFunctionBar
          items={items}
        />
      </div>
    );
  }
}



export default EmailModal;
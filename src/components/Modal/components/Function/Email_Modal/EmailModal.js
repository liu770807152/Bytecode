import React from 'react';
import "./EmailModal.scss";
import EmailFunctionBar from "./components/EmailFunctionBar";
import Text from '../../../../Style/Text';
import EmailHeader from './components/EmailHeader';

class EmailModal extends React.Component {
  constructor(props) {
    super(props);
    const items = [
      { key: 'Templates', value: 'Templates' },
      { key: 'Sequences', value: 'Sequences' },
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
      <div className="emailModal">
        <EmailFunctionBar
          items={items}
        />
        <EmailHeader/>
      </div>
    );
  }
}



export default EmailModal;
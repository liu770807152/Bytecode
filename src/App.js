import logo from './logo.svg';
import './App.css';
import React,{Fragment} from 'react';
import Container from '@material-ui/core/Container';

import ScrollableTabsButtonAuto from './TabBar';

class App extends React.Component {
  render(){
  return (
    <Fragment>
        <Container maxWidth="md">
          <ScrollableTabsButtonAuto/>
  
        </Container>
    </Fragment>
  );
}
}

export default App;

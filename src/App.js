import logo from './logo.svg';
import './App.css';
import React,{Fragment} from 'react';
import Container from '@material-ui/core/Container';
import MeetingCard from './MeetingCard';

class App extends React.Component {
  render(){
  return (
    <Fragment>
        <Container maxWidth="md">
          <MeetingCard />
        </Container>
    </Fragment>
  );
}
}

export default App;

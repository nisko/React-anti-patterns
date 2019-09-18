import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';

const mapStateToProps = (state) => ({ page: state.page });

function AppCon(props) {
  if (props.page === 'Page1') {
    return (
      <div className="App">
        <Page1 />
      </div>
    );
  }
  return (
    <div className="App">
      <Page2 />
    </div>
  );
}

const App = connect(mapStateToProps)(AppCon);

export default App;

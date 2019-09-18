import React from 'react';
import { connect } from 'react-redux';
import { setPage } from './redux/actions';

function mapDispatchToProps(dispatch) {
  return {
    setPageHandle: (page) => dispatch(setPage(page)),
  };
}

function Page2Con(props) {
    return (
      <>
        <h3> Page 2 </h3>
        <input type="button" value="Go to page1" onClick={() => props.setPageHandle('Page1')} />
      </>
    );
}

const Page2 = connect(null, mapDispatchToProps)(Page2Con);

export default Page2;

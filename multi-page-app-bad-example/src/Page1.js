import React from 'react';
import { connect } from 'react-redux';
import { setPage } from './redux/actions';

function mapDispatchToProps(dispatch) {
  return {
    setPageHandle: (page) => dispatch(setPage(page)),
  };
}

function Page1Con(props) {
    return (
      <>
        <h3> Page 1 </h3>
        <input type="button" value="Go to page2" onClick={() => props.setPageHandle('Page2')} />
      </>
    );
}

const Page1 = connect(null, mapDispatchToProps)(Page1Con);

export default Page1;

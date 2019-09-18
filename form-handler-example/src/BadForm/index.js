import React from 'react';

class BadForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    const data = this.myRef.current.value;
    alert(data);
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="data">Bad form:</label>
          <input id="data" type="text" ref={this.myRef} />
          <input type="button" value="OK" onClick={this.onClickHandler} />
        </form>
      </>
    );
  }
}

export default BadForm;

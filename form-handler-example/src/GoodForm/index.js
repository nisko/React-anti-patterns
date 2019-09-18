import React from 'react';

class GoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
    this.onChangeData = this.onChangeData.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeData(event) {
    this.setState({ data: event.target.value });
  }

  onClickHandler(event) {
    const { data } = this.state;
    alert(data);
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <form>
          <label htmlFor="data">Good form:</label>
          <input id="data" type="text" value={data} onChange={this.onChangeData} />
          <input type="button" value="OK" onClick={this.onClickHandler} />
        </form>
      </>
    );
  }
}

export default GoodForm;

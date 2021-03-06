import React, { Component } from 'react';
// import uuid from 'uuid';

class BandInput extends Component {

  state = {
    bandName: '',
    // id: '',
  }

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value,
      // id: uuid()
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    // this.props.addBand(this.state.id, this.state.bandName);
    this.props.addBand(this.state.bandName);

    this.setState({
      bandName: '',
      // id: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.bandName}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;

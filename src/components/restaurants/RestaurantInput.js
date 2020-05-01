import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' name='text' value={this.state.text} />
          <input type='submit' value='Add Restaurant'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super()
    this.state = {
      text: '',
      restaurantId: props.restaurantId
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type='text' name='text' value={this.state.text} />
        <input type='submit' value='Add Review' />
      </form>
    );
  }
};

export default ReviewInput;

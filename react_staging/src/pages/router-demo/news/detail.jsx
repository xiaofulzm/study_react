import React, { Component } from 'react'

export default class detail extends Component {
  render() {
      console.log(this.props);
      const id = this.props.location.state.id || '';
    return (
      <ul>
          <li>id: {id}</li>
      </ul>
    )
  }
}

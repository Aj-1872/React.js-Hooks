import React, { Component } from 'react'

export class _1ClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () => {
        this.setState((prevState) => ({
          count: prevState.count + 1
        }))

    }

  render() {
      const {count} = this.state
    return (
      <div>
      <button onClick={this.incrementCount}>count : {count}</button>
      </div>
    )
  }
}

export default _1ClassCounter
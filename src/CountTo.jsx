import React, { Component } from 'react';
import './style.css';

class CountTo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      second: ''
    }
  }

  componentWillMount(){
    this.getTimeUntil(this.props.countTo);
  }

  componentDidMount(){

    setInterval(() => this.getTimeUntil(this.props.countTo), 1000);
  }


  getTimeUntil(count) {
    if (this.state.second === '' && count !== 0) {
      this.setState({
        second: count
      })
    }
    else if (this.state.second > 0) {
      const second = this.state.second - 1;
      this.setState({
        second
      })
    } else if(this.state.second === 0) {
      alert("Reached zero");
      this.setState({
        second: -1
      })
    }
  }

  render() {
    return(
      <div>
        {this.state.second} second
      </div>
    )
  }
}

export default CountTo;

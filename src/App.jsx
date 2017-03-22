import React, { Component } from 'react';
import CountTo from './CountTo.jsx';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countTo: 0,
      newCount: 0
    }
  }

  changeState(){
    this.setState({countTo: this.state.newCount});
  }

  render(){
    return(
      <div className="Count">
        Count Down to {this.state.countTo}
        <br /><br />
        <CountTo countTo={this.state.countTo} />
        <br />
        <from>
          <input type="text"
            placeholder="enter number of second"
            onChange={event => this.setState({newCount: event.target.value})} />
          <button onClick={() => this.changeState()}>Submit</button>
        </from>
      </div>
    )
  }
}

export default App;

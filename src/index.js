import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      frontRow: ['kyla', 'eric', 'susana', 'crystal'],
      clicks: 0,
      ajClicks: 0
    }
  }

  handleClick = e => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

handleAJClick = e => {
  this.setState({
    ajClicks: this.state.ajClicks + 1
  })
}
render() {
  return (
    <div>
    <h1 onClick={this.handleClick}>{this.state.clicks}</h1>
    <AJ asdf={this.handleAJClick} clicks={this.state.ajClicks} />
    <Link to="/kittens">KITTENS</Link>
    <br />
    <Link to="/kittens/kevin">KITTEN named Kevin</Link>
    <br />
    <Link to="/kittens/vanessa">KITTEN named Vanessa</Link>
    <Switch>
       <Route path="/kittens/:name" render={Kittens} />
       <Route path="/kittens" render={Kittens} />
    </Switch>
    </div>
  )
 }
}

const Kittens = props => {
  return (
    <div>
    <p>HI I AM A KITTEN: {props.match.params.name}</p>
    </div>
  )
}

const AJ = props => {
  console.log(props);
  return (
    <h1>onClick={props.asdf}>AJ AJ AJ AJ: {props.clicks}</h1>
  )
}

render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
, document.getElementById('root'));

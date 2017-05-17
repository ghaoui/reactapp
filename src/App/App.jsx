import React from 'react';
import ReactDom from 'react-dom';

export default class App extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {message: props.nom};
    this.clic = this.clic.bind(this);
  }

  clic(){
    console.log(this);
    this.setState({message: "salut lalalal"});
  }

  render (){
    return <h1 onClick={this.clic}>{this.state.message}</h1>;
  }
}

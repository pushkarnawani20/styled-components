import React, { Component } from 'react';

import {StyledCounter,Paragraph,Button, Input,HoverButton,PropsBox,TomatoButton} from './styledComponent'
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = { 
      count: 0 
    }
  }
  increment = () => {
    this.setState(
      { 
        count: this.state.count + 1
       }
    );
  }
  decrement = () => {
    this.setState(
      { count: this.state.count - 1 }
    );
  }
  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Paragraph>Input elment with count</Paragraph>
        <Input placeholder="A small text input" size="1em" onChange={this.increment} />
        <Input placeholder="A bigger text input" type ="text" size="1em" onChange={this.decrement}/>
        <Paragraph>BAckground Hover style</Paragraph>
        <HoverButton>Change bg</HoverButton>
        <Paragraph>Adapting based on props</Paragraph>
        <PropsBox background="red"/>
        <Paragraph>Inherited from increment Button</Paragraph>
        <TomatoButton>Inherited Button</TomatoButton>

      </StyledCounter>
    );
  }
}

export default App;

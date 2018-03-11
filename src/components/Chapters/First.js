import React, { Component } from 'react';
import _ from 'lodash';

const title = `
▄▄▄▄▄ ▄ .▄▄▄▄ .    ·▄▄▄▄  ▄▄▄ ..▄▄ ·  ▄▄· ▄▄▄ . ▐ ▄ ▄▄▄▄▄
•██  ██▪▐█▀▄.▀·    ██▪ ██ ▀▄.▀·▐█ ▀. ▐█ ▌▪▀▄.▀·•█▌▐█•██  
 ▐█.▪██▀▐█▐▀▀▪▄    ▐█· ▐█▌▐▀▀▪▄▄▀▀▀█▄██ ▄▄▐▀▀▪▄▐█▐▐▌ ▐█.▪
 ▐█▌·██▌▐▀▐█▄▄▌    ██. ██ ▐█▄▄▌▐█▄▪▐█▐███▌▐█▄▄▌██▐█▌ ▐█▌·
 ▀▀▀ ▀▀▀ · ▀▀▀     ▀▀▀▀▀•  ▀▀▀  ▀▀▀▀ ·▀▀▀  ▀▀▀ ▀▀ █▪ ▀▀▀ 
`
let progress = ['You\'re falling down a rabbit hole!', 'You keep falling...', 'There seems to be no end to this...']

class World extends Component {
  state = {currentStep: 1, }

  onNextStep = () => {
    // o estado é um objeto imutável. Quando você chama o setState com um novo objeto
    // o React faz tds as coisinhas de atualizar o componente e muda o valor do estado
    // pro valor da primeiro argumento de setState. 
    this.setState({
      currentStep: this.state.currentStep + 1
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.onNextStep()
      setTimeout(this.onNextStep, 2000)
    }, 2000)
  }

  render() {
    return (
      <div>
       <pre>{title}</pre>
       {_.range(0, this.state.currentStep).map((i) => <p>{progress[i]}</p>)}
      </div>
    );
  }
}

export default World;

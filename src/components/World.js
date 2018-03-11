import React, { Component } from 'react';
import First from './Chapters/First'

export const title = `
·▄▄▄▄       ▄▄▌ ▐ ▄▌ ▐ ▄     ▄▄▄▄▄ ▄ .▄▄▄▄ .    ▄▄▄   ▄▄▄· ▄▄▄▄· ▄▄▄▄· ▪ ▄▄▄▄▄     ▄ .▄      ▄▄▌  ▄▄▄ .
██▪ ██▪     ██· █▌▐█•█▌▐█    •██  ██▪▐█▀▄.▀·    ▀▄ █·▐█ ▀█ ▐█ ▀█▪▐█ ▀█▪██•██      ██▪▐█▪     ██•  ▀▄.▀·
▐█· ▐█▌▄█▀▄ ██▪▐█▐▐▌▐█▐▐▌     ▐█.▪██▀▐█▐▀▀▪▄    ▐▀▀▄ ▄█▀▀█ ▐█▀▀█▄▐█▀▀█▄▐█·▐█.▪    ██▀▐█ ▄█▀▄ ██▪  ▐▀▀▪▄
██. ██▐█▌.▐▌▐█▌██▐█▌██▐█▌     ▐█▌·██▌▐▀▐█▄▄▌    ▐█•█▌▐█ ▪▐▌██▄▪▐███▄▪▐█▐█▌▐█▌·    ██▌▐▀▐█▌.▐▌▐█▌▐▌▐█▄▄▌
▀▀▀▀▀• ▀█▄▀▪ ▀▀▀▀ ▀▪▀▀ █▪     ▀▀▀ ▀▀▀ · ▀▀▀     .▀  ▀ ▀  ▀ ·▀▀▀▀ ·▀▀▀▀ ▀▀▀▀▀▀     ▀▀▀ · ▀█▄▀▪.▀▀▀  ▀▀▀ 
`

class World extends Component {
// Isso é uma propriedade dessa classe. 
// Uma propriedade pode ser referenciada usando (this.nomeDaProriedade)
// Você não chama uma propriedade porque ela não é uma função, ela é um valor. 
// Você só usa ela. 
  state = {
    chapterNumber: null,
    }
  
  /* Isso é um método, mas o tipo desse método é lambda.
  Isso quer dizer que sempre que o método é chamado, ele estará ligado ao contexto dessa classe.
  independente de você ser explícito quanto a isso ou não.
  Ser explícito é usar o this.nomeDoMetodo()
  */
  onNextChapter = () => {
    this.setState({
      chapterNumber: 1
    })
  }
  
  /* Isso também é um método. 
  */
  render() {
    return (
      <div>
        {/* Isso é uma expressão booleana que quer dizer que se uma expressão
         avaliar para verdadeiro, a segunda expressão será retornada */}
      {this.state.chapterNumber == null && <pre>{title}</pre>}
        {/* Isso é uma operação ternária. Na operação ternária a primeira expressão é 
        avaliada como verdadeira ou falsa. Se verdadeira, a primeira expressão é retornada.
        Se falso, a segunda é retornada.
        A sintaxe é: condição ? (expressão verdadeira) : (expressão falsa)*/}
      {this.state.chapterNumber == null? 
      <button onClick={this.onNextChapter}>Descend!</button> : <First></First> } 
      </div>
    );
  }
}

export default World;

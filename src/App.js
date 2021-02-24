import React, { Component } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import {dice_sound} from './sources/publicIndex';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        first : 0,
        second : 0
    }
  }

  dice6 = () => {
    let firstNum = Math.floor(Math.random()*6)+1;
    let secondNum = Math.floor(Math.random()*6)+1;
    // this.setState({
    //   first : `../src/sources/dice_${firstNum}.jpg`,
    //   second : `../src/sources/dice_${secondNum}.jpg`
    // })
    
//    let finalFirst;
//    switch(firstNum){
//      case 1 : finalFirst = dice_1; break;
//      case 2 : finalFirst = dice_2; break;
//      case 3 : finalFirst = dice_3; break;
//      case 4 : finalFirst = dice_4; break;
//      case 5 : finalFirst = dice_5; break;
//      case 6 : finalFirst = dice_6; break;/
//    }

//    let finalSecond;
//    switch(secondNum){
//      case 1 : finalSecond = dice_1; break;
//      case 2 : finalSecond = dice_2; break;
//      case 3 : finalSecond = dice_3; break;
//      case 4 : finalSecond = dice_4; break;
//      case 5 : finalSecond = dice_5; break;
//      case 6 : finalSecond = dice_6; break;
//    }

    this.setState({
      first : firstNum,
      second : secondNum
    })

    // this.setState({
    //   first : firstNum,
    //   second : secondNum
    // })
    let audio = new Audio(dice_sound);
    audio.play();
  }

  render(){
    // console.info(this.state.first +","+ this.state.second)
    const vcenterItem = {
      display: 'flex',
      alignItems: 'center'
    };

    const wrapper = {
        background: '#dbdfe5',
        minHeight: '300px'
    };
    const box = {
      padding: '25px',
      background: '#abb1b8',
      width: '100%'
    }

    const align = {
      padding: '20% 0',
      // border: '3px solid green',
      height: '100%',
      textAlign: 'center'
    }

    return(
      <div style = {align}
        // style = {{display:'block', position: 'fixed', zIndex:'1031', top: '35%', right: '50%'}}
        >
        {/* <div style = {{verticalAlign: 'middle'}}> */}

          <p style={{fontSize: '12em'}}>
          {/* <Image src={this.state.first} style = {{width:'200px', height:'200px'}}/> */}
          {
            this.state.first === 1 ? <span class="dice dice-1" title="Dice 1"></span> : ''
          }
          {
            this.state.first === 2 ? <span class="dice dice-2" title="Dice 2"></span> : ''
          }
          {
            this.state.first === 3 ? <span class="dice dice-3" title="Dice 3"></span> : ''
          }
          {
            this.state.first === 4 ? <span class="dice dice-4" title="Dice 4"></span> : ''
          }
          {
            this.state.first === 5 ? <span class="dice dice-5" title="Dice 5"></span> : ''
          }
          {
            this.state.first === 6 ? <span class="dice dice-6" title="Dice 6"></span> : ''
          }
          </p>
          <p style={{fontSize: '12em'}}>
          {/* <Image src={this.state.second} style = {{width:'200px', height:'200px'}}/> */}
          {
            this.state.second === 1 ? <span class="dice dice-1" title="Dice 1"></span> : ''
          }
          {
            this.state.second === 2 ? <span class="dice dice-2" title="Dice 2"></span> : ''
          }
          {
            this.state.second === 3 ? <span class="dice dice-3" title="Dice 3"></span> : ''
          }
          {
            this.state.second === 4 ? <span class="dice dice-4" title="Dice 4"></span> : ''
          }
          {
            this.state.second === 5 ? <span class="dice dice-5" title="Dice 5"></span> : ''
          }
          {
            this.state.second === 6 ? <span class="dice dice-6" title="Dice 6"></span> : ''
          }
          </p>
        {/* </div> */}
        <div style = {{verticalAlign: 'middle', position: 'relative'}}>
          <Button onClick = {this.dice6}>주사위</Button>
        </div>
      </div>
    );
  }
}

export default App;

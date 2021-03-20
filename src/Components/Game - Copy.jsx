import React from "react"
import Player from "./Player"
import Dice from "./Dice" 

const init ={
    dice1: '',
    dice2: '',
    scoreToWin: 100,
    firstPlayerTurn: true,
    firstWinner: '',
    secondWinner: '',
    playerWin: false,

    firstBankScore: 0,
    secondBankScore: 0,
    firstCurrentScore: 0,
    secondCurrentScore: 0,

}

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            players:[{
                id:"1",
                bankScore: 0,
                currentScore: 0,
            },
            {
                id:"2",
                bankScore: 0,
                currentScore: 0,
            }]
        ,
        scoreToWin: 100,
        dice1: '',
        dice2: '',
        turn: 1,
        }
      
    }

    // getCurrentScore = (score) => {
    //     let Players = [...this.state.players];
    
    //     if (score === 12) {
    //       Players[this.state.turn - 1].currentScore = 0;
    //       this.ChangePlayer();
    //     } 
    //     else {
    //       Players[this.state.turn - 1].currentScore += score;
    //     }
    
    //     this.setState({
    //       players: Players,
    //     });
    //   };

    //   ChangePlayer = () => {
    //     let newTurn = this.state.turn;
    //     turn = newTurn === 1 ? 2 : 1;
    //     this.setState({
    //       turn:newTurn,
    //     })
    //   }


    rollDice= () =>{
        this.setState({
            dice1: randomNum(),
            dice2: randomNum(),  
        })
        {console.log(this.state.dice1)}
        {console.log(this.state.dice2)}

        this.setState({
            currentScore: this.state.dice1 + this.state.dice2,
        })
        {console.log(`current: ${this.state.currentScore}`)}


        
        if(this.state.dice1 === this.state.dice2  && this.state.dice1 === 6){
            console.log("next player turn")
        }

    }



    render(){
        return (
        <div className="game">
            

            <div className="ply player">
            <Player
            id= {this.state.player1.id}
            bankScore= {this.state.player1.bankScore}
            currentScore= {this.state.player1.currentScore}
            active= {this.state.player1.active}/>
            </div>

            <div className="ply panel">
                <button className="btn" onClick={this.onNewGame}>New Game</button><br/>
                <Dice dice={this.state.dice1}/>
                <Dice dice={this.state.dice2}/>

                <button className="btn" onClick={this.rollDice}>Roll Dice</button><br/>
                
                <button className="btn">Hold</button>
            </div>

            <div className="ply player">
            <Player
            id= {this.state.player2.id}
            bankScore= {this.state.player2.bankScore}
            currentScore= {this.state.player2.currentScore}
            active= {this.state.player2.active}/>
            </div>
            
        </div>
        )}
}

const randomNum =() =>{
    return Math.floor(Math.random() *6) +1;
}

export default Game;
import React from "react"
import Player from "./Player"
import Dice from "./Dice" 

const init = {
    dice1: '',
    dice2: '',
    scoreToWin: 100,
    firstTurn: true,
    firstWinner: '',
    secondWinner: '',
    playerWin: false,

    firstBankScore: 0,
    secondBankScore: 0,
    firstCurrentScore: 0,
    secondCurrentScore: 0,

}

class Game extends React.Component{
    state = {...init}
        
    
    rollDice= () =>{
        
        const dice1= randomNum();
        const dice2= randomNum();
        const total = dice1+dice2;  
        
        {console.log(this.state.dice1)}
        {console.log(this.state.dice2)}

        this.setState({
            dice1: dice1,
            dice2: dice2,
        })
        {console.log(`current: ${this.state.currentScore}`)}


        
        if(this.state.dice1 === this.state.dice2  && this.state.dice1 === 6){
            this.setState({
                firstPlayerTurn: !this.state.firstPlayerTurn,
                firstPlayerRoundScore: 0,
                secondPlayerRoundScore: 0,

            })
        }

        if (this.state.firstPlayerTurn) {
            this.setState(prev => ({
                firstCurrentScore: prev.firstCurrentScore + total,
            }))
        } else {
            this.setState(prev => ({
                secondCurrentScore: prev.secondCurrentScore + total
            }))
        }

    }

    hold=() => {
        this.setState({
            firstTurn: !this.state.firstTurn
        })
        if (this.state.firstTurn) {
            this.setState(prev => ({
                firstBankScore: prev.firstBankScore + this.state.firstCurrentScore,
                firstCurrentScore: 0,
            }))
        } else {
            this.setState(prev => ({
                secondBankScore: prev.secondBankScore + this.state.secondCurrentScore,
                secondCurrentScore: 0,
            }))

        }
    }



    render(){
        return (
        <div className="game">
            

            <div className="ply player">
            <Player
            player={`1 ${this.state.firstBankScore}`}
            bankScore={this.state.firstPlayerScore}
            currentScore={this.state.firstCurrentScore}/>
            </div>

            <div className="ply panel">
                <button className="btn" onClick={this.onNewGame}>New Game</button><br/>
                <Dice dice={this.state.dice1}/>
                <Dice dice={this.state.dice2}/>

                <button className="btn" onClick={this.rollDice}>Roll Dice</button><br/>
                
                <button className="btn" onClick={this.hold}>Hold</button>
            </div>

            <div className="ply player">
            <Player
            player={`2 ${this.state.secondBankScore}`}
            bankScore={this.state.secondPlayerScore}
            currentScore={this.state.secondCurrentScore}/>
            </div>
            
        </div>
        )}
}

const randomNum =() =>{
    return Math.floor(Math.random() *6) +1;
}

export default Game;
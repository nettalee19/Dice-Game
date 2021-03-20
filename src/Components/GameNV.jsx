import React from "react"
import Player from "./Player"
import Dice from "./Dice" 



class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            player1:{
                id:"1",
                bankScore: 0,
                currentScore: 0,
                active: 1,
            },
            player2:{
                id:"2",
                bankScore: 0,
                currentScore: 0,
                active: 0,
            }
        ,
        scoreToWin: 100,
        dice1: '',
        dice2: '',
        }
      
    }


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
        // else{
        //     this.setState({
        //         player`{this.state.id}`.currentScore =
        //     })
        // }

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
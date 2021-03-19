import React from "react"
// import Player from "./Player"


class Game extends React.Component{
    constructor(){
        super();
            
        this.state ={
            //[
                player1: {
                    id:"1",
                    bankScore: 0,
                    currentScore: 0,
                    active: 1,
                },
                player2: {
                    id:"2",
                    bankScore: 0,
                    currentScore: 0,
                    active: 0,
                },
                dice1: '',
                dice2: '',
            //]
        }
        
    }

    render(){
        return (
        <div className="game">
            <div className="btn">
                <button>New Game</button><br/>
                <button>Roll Dice</button><br/>
                <button>Hold</button>
            </div>
            {/* <Player
            id= {this.state.player1.id}
            id= {this.state.player1.id}
            id= {this.state.player1.id}
            id= {this.state.player1.id}/> */}
        </div>
        )}
}

export default Game;
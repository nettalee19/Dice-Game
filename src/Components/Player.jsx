import React from "react"


class Player extends React.Component{
    

    render(){
        return (
        <div className="global">
           <h1>Player {this.props.player}</h1>
           <h2>{this.props.bankScore}</h2>
           <br/>
        
           <p>current</p>
           <h3>{this.props.currentScore}</h3>
        </div>

        )}
}

export default Player;
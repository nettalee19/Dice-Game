import React from "react"


class Dice extends React.Component{
    render(){
        return (
        <div >
           {/* <img src={`./Files/dice-${this.props.dice1}.png`} className="diceStyle" alt=""></img> */}
        <img src={`./Components/dice-${this.props.dice}.png`} alt=""/>
        </div>

        )}
}

export default Dice;
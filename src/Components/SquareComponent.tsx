import React from "react";
import { Chess, Piece, Square } from "chess.js";
import PieceComponent from "./PieceComponent";
import { timeStamp } from "console";


type SquareProps={
    backgroundColor:string,
    chess:Chess
    sqr:Square,
}
type SquareState={
    piece:Piece|false
}

class SquareComponent extends React.Component<SquareProps,SquareState>{
    constructor(props:SquareProps){
        super(props)
        this.state={
            piece:false
        }
    }
    update(){
        this.setState({piece:this.props.chess.get(this.props.sqr)})
    }
    render(): React.ReactNode {
        return(
            <div className="Square"style={{
                width: "45px",
                height:"45px",
                backgroundColor:this.props.backgroundColor
            }}>
                {this.state.piece?(<PieceComponent piece={this.state.piece}></PieceComponent>):""}
            </div>
        )
    }
}
export default SquareComponent
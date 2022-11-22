import React from "react";
import { Chess, Piece, Square } from "chess.js";
import PieceComponent from "./PieceComponent";
import MoverComponent from "./MoverComponent"

type SquareProps={
    backgroundColor:string,
    chess:Chess
    sqr:Square,
    handlePieceClick:any,
    handleMoverClick:any
}
type SquareState={
    piece:Piece|false,
    background:string
    mover:boolean
}

class SquareComponent extends React.Component<SquareProps,SquareState>{
    constructor(props:SquareProps){
        super(props)
        this.state={
            piece:false,
            background:this.props.backgroundColor,
            mover:false
        }
    }
    update(){
        this.setState({piece:this.props.chess.get(this.props.sqr)})
    }
    preMove(){
        // change square background
        this.setState({background:"cornflowerblue",mover:true})
    }   
    clear(){
        // change background back to normal
        this.setState({background:this.props.backgroundColor,mover:false})
    }
    render(): React.ReactNode {
        return(
            <div className="Square"style={{
                width: "45px",
                height:"45px",
                backgroundColor:this.state.background,
                overflow:"hidden"
            }}>
                {this.state.piece?(<PieceComponent
                sqr={this.props.sqr}
                handlePieceClick={this.props.handlePieceClick} 
                piece={this.state.piece}></PieceComponent>):""}

                {this.state.mover && <MoverComponent 
                handleMoverClick={this.props.handleMoverClick}
                sqr={this.props.sqr}
                />}
            </div>
        )
    }
}
export default SquareComponent
import React from "react";
import { Piece, Square } from "chess.js"

type PieceProps={
    piece:Piece,
    handlePieceClick:any,
    sqr:Square
}
type PieceState={}
class PieceComponent extends React.Component<PieceProps,PieceState>{
    render(): React.ReactNode {
        return(<img
        style={{height:"45px",width:"45px",zIndex:1,position:"absolute"}}
        onClick={()=>this.props.handlePieceClick(this.props.sqr)}
        src={"Chess_"+this.props.piece.color+this.props.piece.type+".svg"}
        alt={this.props.piece.color+this.props.piece.type}
        />)
    }
}
export default PieceComponent
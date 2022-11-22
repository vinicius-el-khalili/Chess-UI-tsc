import React from "react";
import {Square,Piece} from "chess.js"
type promoterpieceProps={
    piece:Piece,
    promote:any
}
type promoterpieceState={}
class PromoterPiece extends React.Component<promoterpieceProps,promoterpieceState>{
    constructor(props:promoterpieceProps){
        super(props)
    }
    render(): React.ReactNode {
        return(<>
            <img
            src={"Chess_"+this.props.piece.color+this.props.piece.type+".svg"}
            alt={this.props.piece.color+this.props.piece.type}
            onClick={()=>this.props.promote(this.props.piece)} />
        </>)
    }
}
export default PromoterPiece
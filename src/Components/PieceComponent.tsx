import React from "react";
import { Piece } from "chess.js"

type PieceProps={piece:Piece}
type PieceState={}
class PieceComponent extends React.Component<PieceProps,PieceState>{
    constructor(props:PieceProps){
        super(props)

    }
    render(): React.ReactNode {
        return(<img
        src={"Chess_"+this.props.piece.color+this.props.piece.type+".svg"}
        draggable="true"
        />)
    }
}
export default PieceComponent
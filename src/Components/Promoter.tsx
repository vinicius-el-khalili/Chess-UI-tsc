import { Color, Piece, Square } from "chess.js"
import React from "react"
import PromoterPiece from "./PromoterPiece"
type promoterProps={
    promote:any,
    color:Color
}
type promoterState={}
const containerStyle:React.CSSProperties={
    width:"360px",
    height:"360px",
    position:"absolute",
    zIndex:"3",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}
const style2:React.CSSProperties={
    height:"auto",
    width:"auto",
    border:"1px solid black",
    padding:"10px",
    backgroundColor:"white",
}
class Promoter extends React.Component<promoterProps,promoterState>{
    constructor(props:promoterProps){
        super(props)
    }
    render(): React.ReactNode {
        return(<>
        <div style={containerStyle}>
            <div style={style2}>
                <PromoterPiece piece={{color:this.props.color,type:"q"}} promote={this.props.promote}></PromoterPiece>
                <PromoterPiece piece={{color:this.props.color,type:"b"}} promote={this.props.promote}></PromoterPiece>
                <PromoterPiece piece={{color:this.props.color,type:"n"}} promote={this.props.promote}></PromoterPiece>
                <PromoterPiece piece={{color:this.props.color,type:"r"}} promote={this.props.promote}></PromoterPiece>
            </div>
        </div>
        </>)
    }
}
export default Promoter
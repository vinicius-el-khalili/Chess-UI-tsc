import { Chess, Square } from "chess.js";
import React from "react";
import SquareComponent from "./Square";
import sqrReff from "../Utilities/sqrReff"
import _SQRS from "../Utilities/_SQRS"
// --------------------------------------- LAYOUT

  // white:{board:{display:"flex"},row:{display:"flex",flexDirection:"column-reverse"}},
  //  black:{board:{display:"flex",flexDirection:"row-reverse"},row:{}}

// --------------------------------------- BOARD
type boardProps={}
type boardState={
    rowStyle:React.CSSProperties,
    boardStyle:React.CSSProperties,
    chess:Chess}
    
class Board extends React.Component<boardProps,boardState>{
    sqrReff:{[key:string]:any}
    _SQRS:string[]
    constructor(props:boardProps){
        super(props)
        this.state={
            rowStyle:{display:"flex",flexDirection:"column-reverse"},
            boardStyle:{display:"flex"},
            chess:new Chess()
        }
        this.sqrReff=sqrReff()
        this._SQRS=_SQRS()
        this.updateView=this.updateView.bind(this)
    }

    // --------------------------------------- // UPDATE BOARD VIEW WITH GAME

    updateView(){
        for (let _sqr in this.sqrReff){
            console.log(this.sqrReff)
            this.sqrReff[_sqr].current.update()
        }
    }

    // --------------------------------------- // RENDER
    render(): React.ReactNode {
        let board=[]
        for (let i=0;i<8;i++){
            var row=[]
            for (let j=0;j<8;j++){
                let sqr="abcdefgh"[i]+"12345678"[j]
                row.push(<SquareComponent 
                    backgroundColor={(i+j)%2===0?"#53917E":"#FCD0A1"}
                    chess={this.state.chess}
                    // @ts-ignore
                    sqr={sqr}
                    ref={this.sqrReff[sqr]}
                    key={sqr}
                    />) 
            }
            board.push(<div style={this.state.rowStyle} key={"row"+i.toString()}>{row}</div>)
        }

        // --------------------------------------- //
        // --------------------------------------- //

        return(<>
            <div className="Board" style={this.state.boardStyle}>{board}</div>
            <button onClick={this.updateView}>updateView</button>
        </>)

        // --------------------------------------- //
        // --------------------------------------- //

    }
}
export default Board
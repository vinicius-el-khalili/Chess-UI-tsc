import { Chess, Piece, Square } from "chess.js";
import React from "react";
import SquareComponent from "./SquareComponent";
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
    chess:Chess,
    selectedSquare:Square|null,
}

class Board extends React.Component<boardProps,boardState>{
    sqrReff:{[key:string]:any}
    _SQRS:string[]
    constructor(props:boardProps){
        super(props)
        this.state={
            rowStyle:{display:"flex",flexDirection:"column-reverse"},
            boardStyle:{display:"flex"},
            chess:new Chess('rnb2rk1/pp2qp1p/2p2n1p/3pp3/2BPP3/P1P2N2/P2Q1PPP/R3R1K1 w - - 3 12'),
            selectedSquare:null
        }
        this.sqrReff=sqrReff()
        this._SQRS=_SQRS()
        this.updateView=this.updateView.bind(this)
        this.handlePieceClick=this.handlePieceClick.bind(this)
    }

    // --------------------------------------- // MOUNT
    componentDidMount(): void {
        this.updateView()
        this.setState({selectedSquare:null})
    }

    // --------------------------------------- // UPDATE
    updateView(){
        for (let _sqr in this.sqrReff){
            this.sqrReff[_sqr].current.update()
        }
    }

    // --------------------------------------- // 
    handlePieceClick(sqr:Square){
        // 1. Check all possible moves for the clicked square and highlight the SquareComponent with Mover objects.
        let moves:string[]=[]
        // @ts-ignore
        this.state.chess.moves({square:sqr}).map(move=>moves.push(move.replace('x','').replace('+','').replace('#','').slice(-2)))
        this._SQRS.map(_sqr=>this.sqrReff[_sqr].current.clear())
        // 2. Add PreMovers
        moves.map(_sqr=>this.sqrReff[_sqr].current.preMove())
        this.setState({selectedSquare:sqr})
    }

    // --------------------------------------- // RENDER
    render(): React.ReactNode {
        let board=[]
        for (let i=0;i<8;i++){
            var row=[]
            for (let j=0;j<8;j++){
                let sqr="abcdefgh"[i]+"12345678"[j]
                row.push(<SquareComponent
                    handlePieceClick={this.handlePieceClick}
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
            <h1>{this.state.selectedSquare && this.state.selectedSquare}</h1>
        </>)

        // --------------------------------------- //
        // --------------------------------------- //

    }
}
export default Board
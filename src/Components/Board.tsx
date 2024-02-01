import { Chess, Piece, Square } from "chess.js";
import React from "react";
import SquareComponent from "./SquareComponent";
import sqrReff from "../Utilities/sqrReff"
import _SQRS from "../Utilities/_SQRS"
import Promoter from "./Promoter";
import BoardControllers from "./BoardControllers";

// --------------------------------------- LAYOUT

  // white:{board:{display:"flex"},row:{display:"flex",flexDirection:"column-reverse"}},
  // black:{board:{display:"flex",flexDirection:"row-reverse"},row:{}}

// --------------------------------------- BOARD
type boardProps={}
type boardState={
    rowStyle:React.CSSProperties,
    boardStyle:React.CSSProperties,
    chess:Chess,
    selectedSquare:Square|null,
    promoter:boolean,
    promotionSqr:string,
    console1:any,
    console2:any,
    console3:any
}

class Board extends React.Component<boardProps,boardState>{
    sqrReff:{[key:string]:any}
    _SQRS:string[]
    constructor(props:boardProps){
        super(props)
        this.state={
            rowStyle:{display:"flex",flexDirection:"column-reverse"},
            boardStyle:{display:"flex"},
            chess:new Chess(), //"5r2/pp1bP1kp/n1p1R2p/2n5/8/P1P5/P4QPP/4R1K1 w - - 5 21"
            selectedSquare:null,
            promoter:false,
            promotionSqr:"",
            console1:'',
            console2:'',
            console3:''
        }
        this.sqrReff=sqrReff()
        this._SQRS=_SQRS()
        this.updateView=this.updateView.bind(this)
        this.handlePieceClick=this.handlePieceClick.bind(this)
        this.handleMoverClick=this.handleMoverClick.bind(this)
        this.promote=this.promote.bind(this)
    }

    // --------------------------------------- // MOUNT
    componentDidMount(): void {
        this.updateView()
        this.setState({selectedSquare:null})
    }

    // --------------------------------------- // UPDATE
    updateView(){
        this._SQRS.map(_sqr=>this.sqrReff[_sqr].current.clear())
        for (let _sqr in this.sqrReff){
            this.sqrReff[_sqr].current.update()
        }
    }

    // --------------------------------------- // handlePieceClick
    handlePieceClick(sqr:Square){
        // 1. Check all possible moves for the clicked square and highlight the SquareComponent with Mover objects.
        let moves:string[]=[]
        this.state.chess.moves({square:sqr}).map(move=>{
            // @ts-ignore
            if (!move.includes("=")){
                // @ts-ignore
                if(!move.includes("-O")){
                    // @ts-ignore
                    let _m = move.replace("+","").replace("#","").replace("x","").slice(-2)
                    if(!moves.includes(_m)){moves.push(_m)}
                }else{
                    let turn=this.state.chess.turn()
                    if(move==="O-O-O"&&turn==="w"){moves.push("c1")}
                    if(move==="O-O-O"&&turn==="b"){moves.push("c8")}
                    if(move==="O-O"&&turn==="w"){moves.push("g1")}
                    if(move==="O-O"&&turn==="b"){moves.push("g8")}
                }

            }else{
                // @ts-ignore
                let _m = move.replace("+","").replace("#","").replace("x","").slice(-4,-2)
                if(!moves.includes(_m)){moves.push(_m)}
            }
        })
        this._SQRS.map(_sqr=>this.sqrReff[_sqr].current.clear())
        // 2. Add PreMovers
        moves.map(_sqr=>this.sqrReff[_sqr].current.preMove())
        this.setState({selectedSquare:sqr})
    }

    // --------------------------------------- // handlePieceClick
    handleMoverClick(sqr:Square){
        // @ts-ignore
        let move = this.state.chess.move({from:this.state.selectedSquare,to:sqr})
        if (!move){
            // @ts-ignore
            move = this.state.chess.move({from:this.state.selectedSquare,to:sqr,promotion:"q"})
            if (move){
                this.sqrReff[sqr].current.summonPromoter()
                this.setState({promoter:true,promotionSqr:sqr})
            }
            this.state.chess.undo()
        }
        this.updateView()
    }
    // --------------------------------------- // RENDER
    promote(piece:Piece){
        console.log("promoting....")
        this.state.chess.move({
            from:this.state.selectedSquare!,
            to:this.state.promotionSqr,
            promotion:piece.type
        })
        this.setState({promoter:false})
        this.sqrReff[this.state.promotionSqr].current.dismissPromoter()
        this.updateView()
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
                    handleMoverClick={this.handleMoverClick}
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
            <div className="Board" style={this.state.boardStyle}>
                <h1>.</h1>
                {board}
                {this.state.promoter && <Promoter promote={this.promote} color={this.state.chess.turn()}/>}
                </div>
            <BoardControllers></BoardControllers>
            <h3>{this.state.console3}</h3>
            <h3>{this.state.console1}</h3>
            <h3>{this.state.console2}</h3>
        </>)

        // --------------------------------------- //
        // --------------------------------------- //

    }
}
export default Board
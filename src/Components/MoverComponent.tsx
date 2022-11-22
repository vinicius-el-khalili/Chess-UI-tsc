import { Square } from "chess.js";
import React from "react";
type MoverProps={
    handleMoverClick:any,
    sqr:Square
}
type MoverState={
    promoter:boolean
}
class MoverComponent extends React.Component<MoverProps,MoverState>{
    constructor(props:MoverProps){
        super(props)
        this.state={
            promoter:false
        }
    }
    summonPromoter(){
        this.setState({promoter:true})
    }
    render(): React.ReactNode {
        return(<>
        <div className="MoverComponent" 
            style={{
                width:"45px",
                height:"45px",
                position:"absolute",
                zIndex:"2"
            }}
            onClick={()=>{this.props.handleMoverClick(this.props.sqr)}}
        ></div>
        </>)
    }
}
export default MoverComponent
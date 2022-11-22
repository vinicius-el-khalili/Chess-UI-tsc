import React from "react"
type promoterProps={}
type promoterState={}
class Promoter extends React.Component<promoterProps,promoterState>{
    constructor(props:promoterProps){
        super(props)
    }
    render(): React.ReactNode {
        return(<>
        <div className="promoterContainer"
        style={{
            width:"45px",
            height:"45px",
            backgroundColor:"#08415C",
            position:"absolute",
            zIndex:"3"
        }}>
        </div>
        </>)
    }
}
export default Promoter
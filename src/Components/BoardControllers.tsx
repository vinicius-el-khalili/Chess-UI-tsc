import React from "react";
type bcProps={}
type bcState={}
const buttonStyle:React.CSSProperties={
    width:"100px",
    height:"50px",
    backgroundColor:"none",
    border:"1px solid black",
    borderRadius:"5px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}
function arrowStyle(orientation:string){
    const arrowStyle:React.CSSProperties={
        width:"20px",
        height:"20px",
        border:"3px solid black",
        borderRadius:"2px",
        transform:orientation==="right"?"rotate(45deg)":"rotate(-135deg)",
        borderBottom:"0",
        borderLeft:"0"
    }
    return(arrowStyle)
}
class BoardControllers extends React.Component<bcProps,bcState>{
    render(): React.ReactNode {
        return(<div style={{
            display:"flex",
            gap:"1rem"
        }}>
        <button style={buttonStyle}><div style={arrowStyle("left")}/></button>
        <button style={buttonStyle}><div style={arrowStyle("right")}/></button>
        </div>)
    }
}
export default BoardControllers
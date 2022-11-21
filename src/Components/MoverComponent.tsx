import React from "react";
class MoverComponent extends React.Component<{},{}>{
    render(): React.ReactNode {
        return(<>
        <div className="MoverComponent" style={{
            width:"45px",
            height:"45px",
            position:"absolute",
            zIndex:"2"
        }}></div>
        </>)
    }
}
export default MoverComponent
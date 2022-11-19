import React from "react"
function sqrReff(){
    const a1="abcdefgh"
    const a2="12345678"
    var sqrReff:{[key:string]:any}={}
    for (let i=0;i<8;i++){
        for (let j=0;j<8;j++){
            sqrReff[a1[i]+a2[j]]=React.createRef()
        }
    }
    return(sqrReff)
}
export default sqrReff
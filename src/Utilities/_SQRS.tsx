export default function _SQRS(){
    let _SQRS=[]
    for (let i=0;i<8;i++){for(let j=0;j<8;j++){
        _SQRS.push("abcdefgh"[i]+"012345678"[j])
    }}
    return(_SQRS)
}

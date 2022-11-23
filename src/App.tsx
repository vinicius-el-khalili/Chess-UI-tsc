import React from 'react';
import Board from './Components/Board';
function App() {
  return (
    <div className="App" style={{
        fontFamily:"'Courier New', monospace",
        width:"100vw",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
      <h1 style={{
        padding:"1rem"
      }}>Chess!</h1>
      <Board></Board>
    </div>
  );
}

export default App;

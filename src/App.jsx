import React, {useState} from "react";

const App = () => {

  const[num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if(num > 0){
      setNum(num - 1);
    }else{
      alert("0 limit has reached");
      setNum(0);
    }
    
  };

  return(
    <>
      <div className="container">
        <div className="wrapper">
        <h1> {num} </h1>
        <div className="btn">
        <button onClick={incNum}> Increment </button>
        <button onClick={decNum}> Decrement </button>
        </div>
        </div>
      </div>
    </>
  );
}
export default App;



import Button from "./Button";

import "./App.css"

function  App()
{

 var a = ["Ashish","Nishtha","Aman","Sahil","Rohit"]
 
 var elemtns = a.map(item => <h1>{item}</h1>)
  return (
    <div>
      {elemtns}
    </div>
  )
}

export default App;
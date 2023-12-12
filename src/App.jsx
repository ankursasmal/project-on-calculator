 import style from './App.module.css'
import Display from './components/Display'
import Button from './components/Button'
import { useState } from 'react';
function App() {
  
 let [calval,seta]=useState("");
 
//  a khan a item ascha a child thaka pass
  let onbclick=(item)=>{
    if(item==='c'){
seta(""); //empty print set " " mana empty
    }
    else if(item=== '='){
const re=eval(calval);
seta(re);
    }
    else{
      let now=calval+item; //string add
      seta(now);
    }
    console.log(item);
  }
   
 return (
    <>
    <div className={style.cal}>
<Display displayval={calval}/> {/*  // calval display kora */}
<Button  onbclick={onbclick }> </Button> 
     </div>
    </>
    )
}

export default App

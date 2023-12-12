import  style from "./Button.module.css"

export default function Button({onbclick}){
  let item=["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];

  return (
    <>
        <div className={style.butt}>
           { item.map((items)=>
                    <button className={style.button} onClick={()=>
                      // akon on click a function call hoba ja exiquit hor koth chilo
                      //on click empty fun thiach or annomous fun theachi ja funtion pass korcha
                      onbclick(items)} >{items}</button>

            )}

 </div>
  
    </>
  )

  
}

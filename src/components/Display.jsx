import  style from "./Display.module.css"
export default function display({displayval} ){
  return (
    <>
          <input type="text" className={style.display} value={displayval} readOnly />
          {/* value ta dispaly oba sab kaja use hoba readonly input naba na display koba */}

    </>
  )

  
}

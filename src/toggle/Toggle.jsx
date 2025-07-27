import { useState } from "react";
import  "./Toggle.css";
export const Toggle=()=>{
    const [isOn,setIsOn]=useState(false);
    const is1=()=>{
       return isOn?"on1":"off1";
    }
    const is2=()=>{
       return isOn?"on2":"off2";
    }
    const is3=()=>{
       return isOn?"on3":"off3";
    }
    const handle=()=>{
       setIsOn(!isOn);
    }
    return(
        <>
         <div className={`parent ${is1()}`}>
         <div className={`container ${is2()}`} onClick={()=>handle()}>
            <div className={`content ${is1()} ${is2()} ${is3()}`}>
                <span className="child">
                       {isOn?"ON":"OFF"}
                </span>
            </div>
         </div>
         </div>
        </>
    )
}
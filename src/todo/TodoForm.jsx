import { useEffect, useState } from "react"
export const TodoForm=({handleParent})=>{
     const [inputVal,setInputVal]=useState("");
     const [check,setCheck]=useState(true);
     const handleForm=(e)=>{
           e.preventDefault();
           if(!inputVal)return;
           handleParent(inputVal);
           setInputVal("");
        }
        const handleChange=(e)=>{
            const s=e.target.value;
                if(s && s.length>22){
                    setCheck(false);
                    return;
                }
                else {
                    setInputVal(s);
                    setCheck(true);
                }
        }
        const handleHide=()=>{
            return check?"pHide":"";
        }
    return(
         <section className="form">
                <form action="" onSubmit={(e)=>handleForm(e)}>
                    <div style={{width:"100%"}}>
                        <input type="text" name="" id="" autoComplete="off" value={inputVal} onChange={(e)=>handleChange(e)} placeholder="Enter a task: " />
                    </div>
                    <div>
                        <button type="submit" className="task-btn">
                          Add Task
                        </button>
                    </div>
                </form>
                <p className={`${handleHide()}`}>Task too long</p>
            </section>
    )
}
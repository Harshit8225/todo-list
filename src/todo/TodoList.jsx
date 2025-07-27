import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
export const TodoList=({ind,curr,handleParent})=>{
     const [is,setIs]=useState(false);
     const handleStrike=()=>{
         setIs(!is);
     }
     const addClass=()=>{
         return is?"strike":"";
     }
    return(
          <div className="items">
                           <span className={`${addClass()}`}>
                            {curr}
                          </span>
                          <span className="btns">
                             <button className="add" onClick={()=>{handleStrike()}}><FaCheckCircle/></button>
                          <button className="delete" onClick={()=>{handleParent(curr)}}><MdDeleteForever /></button>
                          </span>
                        </div>
        )
}
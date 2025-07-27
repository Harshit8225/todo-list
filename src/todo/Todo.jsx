import { useEffect, useState } from "react"
import "./todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
export const Todo=()=>{
    const [task,setTask]=useState(()=>{
        const initial=localStorage.getItem("react-todo");
        if(!initial)return [];
        else return JSON.parse(initial);
    });
    const handleForm=(inputVal)=>{
            if(task.includes(inputVal))return;
             setTask((prev)=>{
              return [...prev,inputVal];
           });
        }
    const handleClear=()=>{
          setTask([]);
    }
    const handleDelete=(val)=>{
        const newTask= task.filter((curr)=>curr!=val);
        setTask(newTask);
    }
    localStorage.setItem("react-todo",JSON.stringify(task));
     return(
        <section className="container">
            <header>
                <h1>ToDo List</h1>
                <TodoDateTime/>
            </header>
           <TodoForm handleParent={handleForm}/>
            <section className="UnordList">
                <div className="list">
                    {
                    task.map((curr,ind)=>{
                        return(
                        <TodoList key={curr} curr={curr} handleParent={handleDelete} />
                        )
                    })
                }
                </div>
            </section>
            <section>
                <button className="clear-btn" onClick={()=>handleClear()}>Clear</button>
            </section>
        </section>
     )
}
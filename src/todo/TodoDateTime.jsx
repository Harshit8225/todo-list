import { useEffect, useState } from "react"
export const TodoDateTime=()=>{
     const [datetime,setDatetime]=useState("");
    useEffect(()=>{
           const now=new Date();
           const date=now.toLocaleDateString();
           const time=now.toLocaleTimeString();
           setDatetime(`${date} ${time}`)
           const intervalid=  setInterval(()=>{
            const now=new Date();
            const date=now.toLocaleDateString();
            const time=now.toLocaleTimeString();
            setDatetime(`${date} ${time}`)},1000)
            return ()=>clearInterval(intervalid);
    },[]);
    return (<h2>{datetime}</h2>)
}
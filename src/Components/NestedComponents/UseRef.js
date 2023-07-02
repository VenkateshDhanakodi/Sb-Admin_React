import React, { useRef, useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';

function UseRef() {
    let [name, setName] = useState("");
    let rollRef = useRef(null)
    let count = useRef(0);
    // let [count,setcount] = useState(0);
    useEffect(()=>{
        count.current = count.current+1;
        // setcount(count+1);
    });
    return <div className='container-fluid'>
        <h2>UseRef</h2>
        <input type={"text"} value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <br/><br/>
        <div>&nbsp;{count.current}</div>
        <br/>
        <input type={"text"} ref={rollRef}></input>
        <br/><br/>
        <Button varient="primary" onClick={()=>rollRef.current.focus()}>Click to focus</Button>
        </div>
}
export default UseRef
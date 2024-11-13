import React, { useEffect, useState } from "react";
import Axios from "axios";
const UseState=()=>
{
    const [user,SetUser]=useState([]);
    useEffect(()=>
    {
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>SetUser(res.data))
    }
    )
    return(
        <>
            <h1>Welcome to Axios</h1>
            {user.map((user)=>
            <div> key={user.id}
            <p>{user.name}</p>
 
            </div>)}
        </>
    )
}
export default UseState;

import React from "react";
import { Link } from "react-router-dom";

const View=({users,DeleteUser,EditUser})=>{
    return  users?.map((user,index)=>(
        <tbody key={user.id}>
        <tr keys={user.id} style={{border: "1px solid black"}}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
            <Link to={`/home/users/${index}`}style={{textDecoration: "none",color: "black"}} prop={user}><button>View</button></Link>
                
                <button onClick={()=>EditUser(user.id)}>Edit</button>
                <button onClick={()=>DeleteUser(user.id)}>Delete</button>
             
                
            </td>
        </tr>
        </tbody>
        
    ))
}
export default View;
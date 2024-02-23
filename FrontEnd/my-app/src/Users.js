import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import API from "./API";
function GetUsers(){

    const[users, setUsers] = useState();

    useEffect(()=>{
        const getUsers = async()=>{
            try{
            let res = await API.getUsers();
            setUsers(res)
            }
            catch(e){
                console.log(e);
            }
            
        }

        getUsers();
    },[])
   

return(
    <div>
<h1>All Current Users:</h1>
        <ul>
        {users && users.map((user,idx) =>(
            <li key={idx}><Link to={`/users/${user.id}`}>{user.firstName} </Link></li>
        ))}

</ul>
    </div>
)
}




export default GetUsers;
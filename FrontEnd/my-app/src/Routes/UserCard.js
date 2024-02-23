import React,  {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import API from "../API";


function UserCard(){
 const {id} = useParams();
 const [data,setData] = useState([]);


    useEffect(()=>{
        const fetchData = async()=>{

            try{
                if(id){
            let userData = await API.getUser(id)
                console.log(userData)
                setData([userData]);
            }
        }

            catch(e){
                console.log(e)
            }
        }
    
    fetchData();
    },[id])

    return(
        <div>
            {data.map((user,idx) =>(
                <div>
                <h2>
                        {user.firstName} {user.lastName}
                </h2>
                <ul>
                    <li>
                       email: {user.email}

                    </li>
                    <li>
                        state: {user.state}
                    </li>
                </ul>
                </div>

            ))}
        
    
        
        </div>
    )
    
}


export default UserCard;
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

const UserPage = () =>{

    const [user,setUser] = useState({});

    const navigate = useNavigate(-1);
    const {id} = useParams();

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async() =>{
        const response = await axios.get('http://localhost:3000/users/' + id);
        setUser(response.data);
    }

    return(
        <div className="UserPage">
            <button onClick={()=>navigate(-1)}>GO BACK</button>
            <h2>Name: {user.name}</h2>
            <ul>
                <li><b>Name:</b>{user.name}</li>
                <li><b>UserName:</b>{user.username}</li>
                <li><b>Email:</b>{user.email}</li>
                <li><b>Phone:</b>{user.phone}</li>
                <li><b>Website:</b>{user.website}</li>
            </ul>
        </div>
    );

}

export default UserPage;
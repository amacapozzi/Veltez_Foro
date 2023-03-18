import { useEffect, useState } from "react";
import { Progress } from "@chakra-ui/react";
import { useData } from "../hooks/useData";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    
    const logged = localStorage.getItem("token");
    const {user_info, error, loading} = useData();
    const navigate = useNavigate();


    useEffect(() => {
        if(!logged){
            navigate("/login")
        }

        document.title = "Dashboard"

    }, [])


    if(loading){
        return(
            <div>
              <Progress size='xs' isIndeterminate />
            </div>
        )
    }

    return(
        <div>
            <h1>Welcole to dashboard {user_info.alias}</h1>
        
        </div>


    )
}

export default Dashboard; 
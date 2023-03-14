import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";

const Dashboard = () => {
    
    const logged = localStorage.getItem("token");
    const {user_info, error, loading} = useData();

    useEffect(() => {
        document.title = "Dashboard"

        if(!logged){
            window.location.href = "/login";
        }

    }, [])

    if(loading){
        return(
            <div>
                <h1>Loading...</h1>
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
import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";
import { Progress } from "@chakra-ui/react";


const Admin = () => {

    const {user_info, error, loading} = useData();


    useEffect(() => {
        document.title = "Admin"

        const logged = localStorage.getItem("token");
        if(!logged){
            window.location.href = "/login";
        }

    }, [])

    if(loading){
        return <Progress size='xs' isIndeterminate />
    }
    
        const whitelistRole = ['Admin', 'Moderator'];
        const userRole = user_info.rol;
        if(!whitelistRole.includes(userRole)){
            window.location.href = "/dashboard";
        }


    return (
        <div>
            <h1>Admin {user_info.alias}</h1>sz


        </div>
    );
}

export default Admin;
import { useEffect, useState } from "react";
import { Progress } from "@chakra-ui/react";
import { useData } from "../hooks/useData";
import { Alert, AlertIcon } from "@chakra-ui/react";

const Dashboard = () => {
    
    const logged = localStorage.getItem("token");
    const {user_info, error, loading} = useData();
    const [welcome, setWelcome] = useState(true);

    useEffect(() => {
        document.title = "Dashboard"

        if(!logged){
            window.location.href = "/login";
        }

    }, [])

    useEffect(() =>{
        setWelcome(true);
        setTimeout(() => {
            setWelcome(false);
        }, 2350);
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
             {welcome &&  <Alert right={90} padding={4} width={350} status='info'>
    <AlertIcon />
    Welcome to dashboard {user_info.alias}
  </Alert>
}
            <h1>Welcole to dashboard {user_info.rol}</h1>
        </div>
    )
}

export default Dashboard; 
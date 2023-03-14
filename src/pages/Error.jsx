import { useEffect } from "react";

const Error = () => {

    useEffect(() => {
        document.title = "Error 404"
        setTimeout(() => {
            window.location.href = "/";
        }, 2500);
    },[])

    return(
        <div id="error-router">
            <h1>Error 404</h1> 
            <p>😒 Page not found</p>
        </div>

    )
}

export default Error;
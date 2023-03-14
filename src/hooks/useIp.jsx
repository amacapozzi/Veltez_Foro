import {useState, useEffect} from 'react';

export function useIp(){
    const [ip, setIp] = useState();

    useEffect(() => {
            fetch('https://api.ipify.org?format=json', {
            method: "GET",
            headers: {
                accept: "application/json",
            }
        })
            .then(response => response.json())
            .then((data) => {
                setIp(data.ip);
              });
    
    }, [ip])

    return {ip}

}
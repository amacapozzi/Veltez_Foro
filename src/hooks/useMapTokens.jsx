import { useEffect, useState } from "react";

export function useGetTokens(){
    const [tokens, setTokens] = useState([]);
    const [ltoken, lsetToken] = useState(true);

    useEffect(() => {
        lsetToken(true);
        fetch('http://localhost:3000/api/send/tokens', {
            method: "GET",
            headers: {
                'api-key': 'RTD/=HFnaakw3J6AOmoT2WCZmvKMayZLKqvrZ'
            }
        })
        .then((response) => response.json())
        .then((data) => setTokens(data.data))
        .catch((error) => console.log('Ocurrio un error'))
        .finally(() => lsetToken(false));
    }, [])

    return {tokens, ltoken}

}
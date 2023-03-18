import { useEffect, useState } from "react";

export  function useAdmins() {
    const [admins, setAdmins] = useState('');
    const [esperando, setEsperando] = useState(true);
    useEffect(() => {
        setEsperando(true);
        fetch('http://localhost:3000/api/user/admins', {
            headers: {
                'api-key': 'RTD/=HFnaakw3J6AOmoT2WCZmvKMayZLKqvrZ'
            }
        })

        .then((response) => response.json())
        .then((data) => setAdmins(data))
        .catch((error) => console.log('Ocurrio un error'))
        .finally(() => setEsperando(false));
    }, [])


    return {admins, esperando}
    
    
}

   import { useState } from 'react';
   

   export function tokenCreate() {

    const [error, setError] = useState(false);
    const [succes, setSucces] = useState(false);

    const handleCreateToken  = async (e) => {
      const response = await fetch('http://localhost:3000/api/create/token', {
          method: "POST",
          headers: {
              'api-key': 'RTD/=HFnaakw3J6AOmoT2WCZmvKMayZLKqvrZ'
          }
      })
      if(!response.ok){
          return setError(true) && setTimeout(() => {
              setError(false);
            }, 3250);
      }
  
      const data = await response.json();
      if(data.token){
          navigator.clipboard.writeText(data.token);
          setSucces(true) && setTimeout(() => {
              setSucces(false);
            }, 3250);
      }
      
    }


    return { error, succes, handleCreateToken,  }
  

}
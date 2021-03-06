    import { useEffect, useState } from 'react';
    
    const useToken = (user) => {
        const [token, setToken] = useState("");
        useEffect(()=>{
            const email = user?.user?.email;
            const currentUser = {email:email}
            if(email){
              const url = (`http://localhost:4000/user/${email}`);
              fetch(url,{
                  method: 'PUT',
                  headers: {
                      "content-type" : "application/json"
                  },
                  body: JSON.stringify(currentUser)
              })
              .then(res=>res.json())
              .then(data=>{
                  const accessToken = data.token;
                  localStorage.setItem('accessToken', accessToken);
                  setToken(accessToken);
              })
            }
        },[user])
        console.log("Token User", user);
        return ([token, setToken]);
    };
    
    export default useToken;
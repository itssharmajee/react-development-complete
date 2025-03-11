import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
    const [networkStatus, setNetworkStatus ]= useState(true);


    useEffect(()=>{
        window.addEventListener('online', ()=>{
            setNetworkStatus(true);
        });

        window.addEventListener('offline', ()=>{
            setNetworkStatus(false);
        });

    },[])


    return networkStatus;
}

export default useOnlineStatus;



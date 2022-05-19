import { useEffect, useState } from 'react';

const UseTreatment = () => {
    const [treatments, setTreatments]=useState([])
    useEffect(()=>{
        const url = "http://localhost:4000/treatments";
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTreatments(data))
    },[])
    return [treatments, setTreatments];
};

export default UseTreatment;
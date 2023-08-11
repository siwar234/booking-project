import { useEffect, useState } from "react"
import axios from "axios"

const useFetch=(url)=>{
    const [data,setData]=useState([])
    const [loading,setLodaing]=useState((false))
    const [error,setError]=useState((false))
    
    useEffect(()=>{
        const fetchData=async()=>{
            setLodaing(true)
            try{
            const res= await axios.get(url)
            setData(res.data);
        }catch(err){
            setError(err)
        }
        setLodaing(false)
    };
    fetchData();
},[url])






const refetch=async()=>{
            setLodaing(true)
            try{
            const res=axios.get(url)
            setData(res.data);
        }catch(err){
            setError(err)
        }
        setLodaing(false)
    };
        return {data,loading,error,refetch};}


export default useFetch;




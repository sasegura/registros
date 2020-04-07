import {useEffect, useState } from 'react';

const useFetch=url=>{
    const [result, setResult]=useState(null);
    useEffect(()=>{
        async function fetchData() {
            try{
                const response= await fetch(url);
                const result=await response.json();
                await setResult(result);
            }catch(e){
                console.log(e)
            }
        }
        fetchData();
    }, [url]);
    //console.log(result);
    return result;
}
export default useFetch;
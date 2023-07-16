import { useState, useEffect } from 'react'


const useFetch = (url, category) => {

    const [data, setData] = useState(null)
    const [IsPending, setIspending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('Unalbe to load data from server')
            }
            return res.json()
        })
        .then(data=>{
            const shows = data.filter((movies)=> movies.type === category );
            setData(shows)
            setIspending(false)
            setError(null)
        })
        .catch((err)=>{
            setError(err.message)
            setIspending(false)
        })
    }, []);

    return {data, IsPending, error};
}
 
export default useFetch;
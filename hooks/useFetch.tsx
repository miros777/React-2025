import {useEffect, useState} from "react";

export const useFetch = <T,>(endpoint:string, defaultValue:T) => {

    const [data, setData] = useState<T>(defaultValue);
    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(res => setData(res))
    }, [endpoint]);

    return data;
}
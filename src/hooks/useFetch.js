import { useEffect, useState } from 'react';
import axios from "axios";

export const useFetch = ({ baseURL }) => {
    const [user, setUser] = useState({
        name: "",
        email: ""
    })
    useEffect(() => {
        axios.get(baseURL).then(response => setUser(response.data));
    }, [baseURL])

    return { user }
}
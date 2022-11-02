import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <h1>This is Detail: {id}</h1>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}

export default Detail

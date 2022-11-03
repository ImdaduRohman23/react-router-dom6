import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.log(err));
    }, [id])

    return (
        <div>
            <h1>This is Detail: {id}</h1>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
            <hr />
            <Link to='post'>Post</Link> | <Link to='product'>Product</Link>
            <Outlet />
        </div>
    )
}

export default Detail

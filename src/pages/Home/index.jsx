import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(()  => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    }, []);

    const handleDetail = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div>
            <h1>This is Home</h1>
            <ul>
                {
                    users.map(item => {
                        return <li key={item.id}>{item.name} | <button onClick={() => handleDetail(item.id)}>detail</button></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Home

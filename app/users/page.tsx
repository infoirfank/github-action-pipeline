import React from 'react'
import Link from 'next/link';
interface User {
    id: number;
    name: string;
}
const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    return (
    <div>
        <>
            <h1>Users</h1>
            <hr />
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>

            <hr />
            <button><Link href="/">Back to home</Link></button> 
        </> 
    </div>
  )
}

export default UsersPage

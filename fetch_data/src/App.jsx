import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5054/Person')
            .then(response => {
                console.log('Fetch response:', response);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error fetching data: {error.message}</div>;
    }

    return (
        <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>E-mail</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(Person => (
                        <tr key={Person.id}>
                            <td>{Person.id}</td>
                            <td>{Person.name}</td>
                            <td>{Person.age}</td>
                            <td>{Person.email}</td>
                            <td>{ Person.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

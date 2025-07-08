import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/students')
            .then(res => setStudents(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
            <h2>All Students</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Birth Date</th>
                    <th>Program</th>
                </tr>
                </thead>
                <tbody>
                {students.map(s => (
                    <tr key={s.id}>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>{new Date(s.birthDate).toLocaleDateString()}</td>
                        <td>{s.program}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

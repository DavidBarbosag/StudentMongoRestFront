import { useState } from 'react';
import axios from 'axios';

export default function StudentForm() {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        birthDate: '',
        program: '',
    });

    const handleChange = e => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/students', student);
            alert('Student saved!');
        } catch (err) {
            console.error(err);
            alert('Error saving student');
        }
    };

    return (
        <div className="container">
            <h2>Register Student</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
                <input name="email" placeholder="Email" value={student.email} onChange={handleChange} required />
                <input name="birthDate" type="date" value={student.birthDate} onChange={handleChange} required />
                <input name="program" placeholder="Program" value={student.program} onChange={handleChange} required />
                <button type="submit">Save Student</button>
            </form>
        </div>
    );
}

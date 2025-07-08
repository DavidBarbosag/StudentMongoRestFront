import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentForm from './components/StudentForm.jsx';
import StudentList from './components/StudentList';

export default function App() {
    return (
        <Router>
            <nav style={{ marginBottom: '20px' }}>
                <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                <Link to="/add">Add Student</Link>
            </nav>
            <Routes>
                <Route path="/" element={<StudentList />} />
                <Route path="/add" element={<StudentForm />} />
            </Routes>
        </Router>
    );
}

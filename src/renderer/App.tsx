import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthorizePage from './page/AuthorizePage';
import BuilderPage from './page/BuilderPage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuilderPage />} />
      </Routes>
    </Router>
  );
}

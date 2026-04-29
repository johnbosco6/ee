import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './components/Splash';
import Login from './components/Login';
import Home from './components/Home';
import AccountDetails from './components/AccountDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<AccountDetails />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

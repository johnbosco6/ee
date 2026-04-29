import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to login after 2.5 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="full-screen flex-center" style={{ 
      backgroundColor: 'var(--erste-blue)', 
      color: 'white',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999
    }}>
      <div style={{ textAlign: 'center' }}>
        <img src="/logo.svg" alt="ERSTE Logo" style={{ width: '280px', height: 'auto' }} />
      </div>
    </div>
  );
};

export default Splash;

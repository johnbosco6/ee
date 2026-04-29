import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Smartphone, MessageSquare, Bus, ChevronDown } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');

  const handleNumberClick = (num: string) => {
    const newPin = pin + num;
    if (newPin.length <= 4) {
      setPin(newPin);
    }
    
    if (newPin.length === 4) {
      if (newPin === '2536') {
        setTimeout(() => {
          navigate('/home');
        }, 300);
      } else {
        // Reset PIN if wrong
        setTimeout(() => {
          setPin('');
          alert('Wrong PIN. Please try again.');
        }, 500);
      }
    }
  };

  return (
    <div className="full-screen fade-in" style={{ 
      backgroundImage: 'url(/login-bg.png)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1 }}></div>

      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', padding: '40px 20px 20px' }}>
        
        {/* Top Header */}
        <div className="flex-between" style={{ color: 'white' }}>
          <Bell size={24} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '14px', fontWeight: 'bold' }}>
            Show balance
            <ChevronDown size={16} />
          </div>
          <Smartphone size={24} />
        </div>

        {/* Logo and Greeting */}
        <div style={{ textAlign: 'center', marginTop: '40px', color: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
             <img src="/logo.svg" alt="ERSTE Logo" style={{ width: '180px', height: 'auto', filter: 'brightness(1.5)' }} />
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 'normal', margin: 0 }}>
            Hello, <span style={{ fontWeight: 'bold' }}>Johnbosco!</span>
          </h2>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{ 
                width: '12px', height: '12px', borderRadius: '50%', 
                backgroundColor: pin.length > i ? 'white' : 'transparent',
                border: '1px solid white'
              }}></div>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }}></div>

        {/* PIN Pad */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '20px', 
          maxWidth: '300px', 
          margin: '0 auto',
          marginBottom: '60px'
        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button 
              key={num} 
              onClick={() => handleNumberClick(num.toString())}
              style={{ 
                width: '70px', height: '70px', borderRadius: '50%', 
                border: 'none', backgroundColor: 'white', 
                color: '#0a2342', fontSize: '24px', fontWeight: 'bold',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                margin: '0 auto', cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
              {num}
            </button>
          ))}
          <button 
            onClick={() => setPin('')}
            style={{ 
              width: '70px', height: '70px', borderRadius: '50%', 
              border: 'none', backgroundColor: 'transparent', 
              color: 'white', fontSize: '14px', fontWeight: 'bold',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              margin: '0 auto', cursor: 'pointer'
            }}>
            Clear
          </button>
          <button 
              onClick={() => handleNumberClick('0')}
              style={{ 
                width: '70px', height: '70px', borderRadius: '50%', 
                border: 'none', backgroundColor: 'white', 
                color: '#0a2342', fontSize: '24px', fontWeight: 'bold',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                margin: '0 auto', cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
              0
            </button>
          <button 
            onClick={() => setPin(pin.slice(0, -1))}
            style={{ 
              width: '70px', height: '70px', borderRadius: '50%', 
              border: 'none', backgroundColor: 'transparent', 
              color: 'white', fontSize: '14px', fontWeight: 'bold',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              margin: '0 auto', cursor: 'pointer'
            }}>
            Back
          </button>
        </div>

        {/* Bottom Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0052cc' }}>
              <MessageSquare fill="#0052cc" color="white" />
            </div>
            Help and contact
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontWeight: 'bold', fontSize: '24px' }}>
              <div style={{ border: '2px solid black', borderRadius: '4px', padding: '2px 6px', lineHeight: 1 }}>b</div>
            </div>
            BLIK
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer', textAlign: 'center', width: '80px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0052cc' }}>
              <Bus fill="#0052cc" color="#0052cc" />
            </div>
            Transport, Tickets, Services
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;

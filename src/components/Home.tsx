import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Search, Menu, EyeOff, MoreHorizontal, Bus, Home as HomeIcon, ShoppingBag, ArrowLeftRight, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="full-screen fade-in" style={{ backgroundColor: 'var(--bg-light)' }}>
      {/* Top Header */}
      <div className="flex-between" style={{ backgroundColor: 'var(--erste-blue)', color: 'white', padding: '16px 20px', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, letterSpacing: '1px' }}>ERSTE</h1>
          <div style={{ position: 'relative', height: '20px', width: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: 0, right: '2px' }}></div>
            <div style={{ width: '100%', height: '4px', backgroundColor: 'white', borderRadius: '2px', marginBottom: '2px', marginTop: '8px' }}></div>
            <div style={{ width: '100%', height: '4px', backgroundColor: 'white', borderRadius: '2px' }}></div>
            <div style={{ position: 'absolute', right: 0, top: '8px', height: '10px', width: '4px', backgroundColor: 'white' }}></div>
            <div style={{ position: 'absolute', left: 0, bottom: 0, height: '6px', width: '4px', backgroundColor: 'white', borderRadius: '2px 0 0 2px' }}></div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', fontSize: '10px', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <Mail size={20} />
            <span style={{ marginTop: '2px' }}>Mailbox</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <Search size={20} />
            <span style={{ marginTop: '2px' }}>Search</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <Menu size={20} />
            <span style={{ marginTop: '2px' }}>Menu</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
        {/* Greeting */}
        <div className="flex-between" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'normal', margin: 0 }}>
            Hello, <span style={{ fontWeight: 'bold' }}>Johnbosco!</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--erste-blue)', fontWeight: '500', cursor: 'pointer' }}>
            <EyeOff size={18} />
            Hide
          </div>
        </div>

        {/* Quick Actions Scroll */}
        <div style={{ display: 'flex', overflowX: 'auto', gap: '16px', paddingBottom: '16px', margin: '0 -20px', padding: '0 20px 16px', scrollbarWidth: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px', cursor: 'pointer' }}>
             <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontWeight: 'bold', fontSize: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '8px' }}>
              <div style={{ border: '2px solid black', borderRadius: '4px', padding: '2px 6px', lineHeight: 1 }}>b</div>
            </div>
            <span style={{ fontSize: '12px', textAlign: 'center' }}>BLIK</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px', cursor: 'pointer' }}>
             <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '8px' }}>
              <div style={{ display: 'flex', background: 'linear-gradient(135deg, #a8c0ff, #3f2b96)', borderRadius: '50%', padding: '8px' }}>
                <ArrowLeftRight size={20} color="white" />
              </div>
            </div>
            <span style={{ fontSize: '12px', textAlign: 'center' }}>Erste Exchange</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px', cursor: 'pointer' }}>
             <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0052cc', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '8px' }}>
              <Bus size={24} fill="#0052cc" />
            </div>
            <span style={{ fontSize: '12px', textAlign: 'center' }}>Transport, Tickets, Services</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px', cursor: 'pointer' }}>
             <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--erste-blue)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '8px' }}>
              <MoreHorizontal size={24} />
            </div>
            <span style={{ fontSize: '12px', textAlign: 'center' }}>All shortcuts</span>
          </div>
        </div>

        {/* Promo Banner */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', display: 'flex', gap: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '24px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '12px', right: '12px', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px', color: '#9ca3af' }}>&times;</span>
          </div>
          <div style={{ flexShrink: 0, width: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Simple CSS flower representation */}
            <div style={{ position: 'relative', width: '40px', height: '50px' }}>
               <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#eab308', position: 'absolute', top: 0, left: '5px', zIndex: 2 }}></div>
               <div style={{ width: '40px', height: '20px', backgroundColor: '#9333ea', position: 'absolute', bottom: 0, left: 0, borderRadius: '4px 4px 10px 10px' }}></div>
               <div style={{ width: '4px', height: '15px', backgroundColor: '#16a34a', position: 'absolute', bottom: '15px', left: '18px' }}></div>
               <div style={{ width: '15px', height: '10px', backgroundColor: '#16a34a', position: 'absolute', bottom: '20px', left: '2px', transform: 'rotate(-30deg)', borderRadius: '50%' }}></div>
               <div style={{ width: '15px', height: '10px', backgroundColor: '#16a34a', position: 'absolute', bottom: '20px', right: '2px', transform: 'rotate(30deg)', borderRadius: '50%' }}></div>
            </div>
          </div>
          <div style={{ paddingRight: '12px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px 0' }}>Wiosną oszczędności rosną!</h3>
            <p style={{ fontSize: '12px', color: 'var(--text-gray)', margin: '0 0 16px 0', lineHeight: 1.4 }}>
              Otwórz Lokatę wiosenną 2,5%. 3 miesiące, 1000 - 50 000 zł. Opr. stałe w skali roku.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button style={{ backgroundColor: 'var(--bg-light)', color: 'var(--erste-blue)', border: 'none', borderRadius: '20px', padding: '8px 16px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                Otwieram lokatę
              </button>
            </div>
          </div>
        </div>

        {/* Accounts Section */}
        <div className="flex-between" style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '4px', height: '20px', backgroundColor: 'var(--erste-blue)', borderRadius: '2px' }}></div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>Accounts (2)</h3>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <div style={{ width: '12px', height: '12px', borderTop: '2px solid var(--erste-blue)', borderRight: '2px solid var(--erste-blue)', transform: 'rotate(-45deg)' }}></div>
          </div>
        </div>

        {/* Account Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Account 1 */}
          <div 
            onClick={() => navigate('/account')}
            style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}
          >
            <div className="flex-between" style={{ marginBottom: '8px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>Johnbosco Julius Chuwa</h4>
              <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--erste-blue)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                 <div style={{ width: '12px', height: '10px', position: 'relative' }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '-2px', right: 0 }}></div>
                    <div style={{ width: '100%', height: '2px', backgroundColor: 'white', position: 'absolute', bottom: '4px' }}></div>
                    <div style={{ width: '100%', height: '2px', backgroundColor: 'white', position: 'absolute', bottom: 0 }}></div>
                 </div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)', margin: '0 0 20px 0' }}>*6778</p>
            
            <div className="flex-between">
              <span style={{ fontSize: '14px', color: 'var(--text-gray)' }}>Available funds</span>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>0,00 PLN</span>
            </div>
          </div>

          {/* Account 2 */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div className="flex-between" style={{ marginBottom: '8px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>Konto24 walutowe w EUR</h4>
              <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--erste-blue)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                 <div style={{ width: '12px', height: '10px', position: 'relative' }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '-2px', right: 0 }}></div>
                    <div style={{ width: '100%', height: '2px', backgroundColor: 'white', position: 'absolute', bottom: '4px' }}></div>
                    <div style={{ width: '100%', height: '2px', backgroundColor: 'white', position: 'absolute', bottom: 0 }}></div>
                 </div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)', margin: '0 0 20px 0' }}>*8204</p>
            
            <div className="flex-between">
              <span style={{ fontSize: '14px', color: 'var(--text-gray)' }}>Available funds</span>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>0,00 EUR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '12px 0 20px 0', backgroundColor: 'white', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--erste-blue)', cursor: 'pointer' }}>
          <div style={{ borderTop: '2px solid var(--erste-blue)', width: '40px', position: 'absolute', top: 0 }}></div>
          <HomeIcon size={24} />
          <span style={{ fontSize: '12px', marginTop: '4px', fontWeight: 'bold' }}>Home</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-gray)', cursor: 'pointer' }}>
          <ShoppingBag size={24} />
          <span style={{ fontSize: '12px', marginTop: '4px' }}>Offer</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-gray)', cursor: 'pointer' }}>
          <ArrowLeftRight size={24} />
          <span style={{ fontSize: '12px', marginTop: '4px' }}>Payments</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-gray)', cursor: 'pointer' }}>
          <Clock size={24} />
          <span style={{ fontSize: '12px', marginTop: '4px' }}>History</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-gray)', cursor: 'pointer' }}>
          <MoreHorizontal size={24} />
          <span style={{ fontSize: '12px', marginTop: '4px' }}>More</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

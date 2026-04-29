import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, Menu, FileText, Share2, Copy, ArrowUpRight 
} from 'lucide-react';

const TransactionDetail: React.FC = () => {
  const navigate = useNavigate();

  // For now, we mimic the "Ceji" details from the screenshot 1018, but with updated values
  const details = {
    title: 'Ceji',
    amount: '-400,00 PLN',
    date: '21 april 2026',
    balance: '7,33 PLN',
    status: 'Posted',
    bookingDate: '21 April 2026',
    recipient: {
      name: 'Ceji',
      account: '57 1090 2590 0000 0001 5323 1520'
    },
    sender: {
      name: 'JOHNBOSCO JULIUS CHUWA UL. ZGODNA 9A/8 20-304 LUBLIN',
      account: '62 1090 2590 0000 0001 4718 6778'
    },
    category: 'Unknown expense',
    txTitle: 'Transfer to the phone'
  };

  return (
    <div className="full-screen fade-in" style={{ backgroundColor: 'white' }}>
      {/* Header */}
      <div className="flex-between" style={{ padding: '16px 20px', color: 'var(--erste-blue)', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
          <span style={{ fontSize: '10px', marginTop: '2px' }}>Back</span>
        </div>
        
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Transaction details</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
          <Menu size={24} />
          <span style={{ fontSize: '10px', marginTop: '2px' }}>Menu</span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {/* Summary Card */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          padding: '24px', 
          border: '1px solid #e5e7eb',
          marginBottom: '30px'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 12px 0', color: '#0a2342' }}>{details.title}</h2>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0a2342', marginBottom: '20px' }}>
            {details.amount.split(',')[0]}<span style={{ fontSize: '20px' }}>,{details.amount.split(',')[1]}</span>
          </div>
          <div style={{ color: 'var(--text-gray)', fontSize: '14px', marginBottom: '4px' }}>
            Transaction date: {details.date}
          </div>
          <div style={{ color: 'var(--text-gray)', fontSize: '14px' }}>
            Current balance {details.balance}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--erste-blue)' }}>
               <div style={{ position: 'relative' }}>
                  <FileText size={28} />
                  <div style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#dc2626', color: 'white', fontSize: '8px', padding: '1px 2px', borderRadius: '2px', fontWeight: 'bold' }}>PDF</div>
               </div>
            </div>
            <span style={{ fontSize: '12px', color: '#0a2342' }}>View PDF</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--erste-blue)' }}>
              <Share2 size={28} />
            </div>
            <span style={{ fontSize: '12px', color: '#0a2342' }}>Share</span>
          </div>
        </div>

        {/* Detailed Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Status */}
          <div style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '16px' }}>
            <div className="flex-between">
              <span style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Status</span>
              <span style={{ 
                backgroundColor: '#ecfdf5', color: '#10b981', 
                fontSize: '12px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '4px' 
              }}>Posted</span>
            </div>
          </div>

          {/* Booking Date */}
          <div style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '16px' }}>
            <div style={{ color: 'var(--text-gray)', fontSize: '14px', marginBottom: '4px' }}>Booking date</div>
            <div style={{ color: '#0a2342', fontSize: '16px' }}>{details.bookingDate}</div>
          </div>

          {/* Recipient */}
          <div style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '16px' }}>
            <div style={{ color: 'var(--text-gray)', fontSize: '14px', marginBottom: '4px' }}>Recipient</div>
            <div style={{ color: '#0a2342', fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{details.recipient.name}</div>
            <div style={{ color: 'var(--text-gray)', fontSize: '14px', marginBottom: '8px' }}>{details.recipient.account}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--erste-blue)', fontSize: '14px', fontWeight: 'bold' }}>
              <Copy size={16} />
              Copy the recipient's account number
            </div>
          </div>

          {/* Sender */}
          <div style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '16px' }}>
            <div style={{ color: 'var(--text-gray)', fontSize: '14px', marginBottom: '4px' }}>Sender</div>
            <div style={{ color: '#0a2342', fontSize: '16px', fontWeight: 'bold', marginBottom: '4px', textTransform: 'uppercase' }}>{details.sender.name}</div>
            <div style={{ color: 'var(--text-gray)', fontSize: '14px', marginBottom: '8px' }}>{details.sender.account}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--erste-blue)', fontSize: '14px', fontWeight: 'bold' }}>
              <Copy size={16} />
              Copy the sender's account number
            </div>
          </div>

          {/* Category */}
          <div style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '16px' }}>
            <div style={{ color: 'var(--text-gray)', fontSize: '14px', marginBottom: '8px' }}>Transaction category</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0a2342', fontSize: '16px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#f3f4f6', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--erste-blue)' }}>
                <ArrowUpRight size={18} />
              </div>
              {details.category}
            </div>
          </div>

          {/* Title */}
          <div style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '16px' }}>
            <div style={{ color: 'var(--text-gray)', fontSize: '14px', marginBottom: '4px' }}>Title</div>
            <div style={{ color: '#0a2342', fontSize: '16px' }}>{details.txTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;

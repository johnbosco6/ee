import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Search, Menu, Download, Filter, HelpCircle, 
  ArrowUpRight, Landmark, CreditCard, ShoppingCart, XCircle, 
  ArrowRightLeft, Car, Heart 
} from 'lucide-react';

const transactionsData = [
  {
    dateLabel: 'Today',
    items: [
      { id: '1', title: 'Opłata za wypłatę gotówki z bankomat...', amount: '-3,00 PLN', balance: '10,80 PLN', icon: 'Landmark' }
    ]
  },
  {
    dateLabel: 'Yesterday',
    items: [
      { id: '2', title: 'GOOGLE *Google One', amount: '-70,67 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '3', title: 'CWIARTEK ALKOHOLE S01', amount: '-4,99 PLN', status: 'Blockade', icon: 'CreditCard' },
      { id: '4', title: 'RUTENDO GRACE MUREWA UL. JURIJA...', amount: '5,00 PLN', balance: '115,79 PLN', icon: 'CreditCard', isPositive: true },
      { id: '5', title: 'CWIARTEK ALKOHOLE S01', amount: '-2,99 PLN', status: 'Blockade', icon: 'CreditCard' },
    ]
  },
  {
    dateLabel: '27 April, Monday',
    items: [
      { id: '6', title: 'GOOGLE *Google One', amount: '-70,87 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '7', title: 'CWIARTEK ALKOHOLE S01', amount: '-1,99 PLN', balance: '113,80 PLN', icon: 'ShoppingCart' },
      { id: '8', title: '1616000011', amount: '-100,00 PLN', balance: '13,80 PLN', icon: 'CreditCard' },
      { id: '9', title: 'BRENDA MUKANDE ROSSCAMP 61...', amount: '100,00 PLN', balance: '120,28 PLN', icon: 'CreditCard', isPositive: true },
      { id: '10', title: '00117 4418W4560 UL. SZEROKA 20', amount: '-100,00 PLN', balance: '20,28 PLN', icon: 'CreditCard' },
      { id: '11', title: 'AINEBYONA ROBERT', amount: '20,00 PLN', balance: '120,28 PLN', icon: 'CreditCard', isPositive: true },
      { id: '12', title: 'AINEBYONA ROBERT', amount: '85,00 PLN', balance: '100,28 PLN', icon: 'CreditCard', isPositive: true },
      { id: '13', title: 'ZABKA Z5102 K.2', amount: '-5,70 PLN', status: 'Blockade', icon: 'CreditCard' },
    ]
  },
  {
    dateLabel: '26 April, Sunday',
    items: [
      { id: '14', title: 'Google One', amount: '-70,87 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '15', title: 'VERCEL INC.', amount: '-75,03 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '16', title: 'ZABKA ZE862 K.2', amount: '-4,49 PLN', balance: '115,79 PLN', icon: 'ShoppingCart' },
      { id: '17', title: 'ZABKA Z5102 K.2', amount: '-5,00 PLN', balance: '110,79 PLN', icon: 'ShoppingCart' },
      { id: '18', title: 'JOHNBOSCO JULIUS CHUWA UL. ZGO...', amount: '7,00 PLN', balance: '139,68 PLN', icon: 'ArrowRightLeft', isPositive: true },
    ]
  },
  {
    dateLabel: '25 April, Saturday',
    items: [
      { id: '19', title: 'Google One', amount: '-70,87 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '20', title: 'ZABKA Z5102 K.1 UL. SZEROKA 13 I....', amount: '-21,99 PLN', balance: '220,37 PLN', icon: 'ShoppingCart' },
      { id: '21', title: 'JOHNBOSCO JULIUS CHUWA UL. ZG...', amount: '30,00 PLN', balance: '242,36 PLN', icon: 'ArrowRightLeft', isPositive: true },
    ]
  },
  {
    dateLabel: '24 April, Friday',
    items: [
      { id: '22', title: 'JOHNBOSCO', amount: '-26,00 PLN', balance: '212,36 PLN', icon: 'ArrowRightLeft' },
      { id: '23', title: 'ZABKA Z5102 K.2', amount: '-22,00 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '24', title: 'ZABKA Z5102 K.2', amount: '-22,00 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '25', title: 'JOHNBOSCO JULIUS CHUWA UL. ZG...', amount: '22,00 PLN', balance: '238,36 PLN', icon: 'ArrowRightLeft', isPositive: true },
      { id: '26', title: 'ZABKA Z5102 K.1', amount: '-20,00 PLN', balance: '28,77 PLN', icon: 'ShoppingCart' },
      { id: '27', title: 'JOHNBOSCO JULIUS CHUWA UL. ZG...', amount: '20,00 PLN', balance: '216,36 PLN', icon: 'ArrowRightLeft', isPositive: true },
      { id: '28', title: 'ROSSMANN SP. Z O.O.', amount: '-7,49 PLN', balance: '59,47 PLN', icon: 'ShoppingCart' },
      { id: '29', title: 'JOHNBOSCO JULIUS CHUWA UL. ZGO...', amount: '7,00 PLN', balance: '196,36 PLN', icon: 'ArrowRightLeft', isPositive: true },
      { id: '30', title: 'Google One', amount: '-70,59 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '31', title: 'ZABKA Z5102 K.1', amount: '-5,00 PLN', balance: '54,47 PLN', icon: 'ShoppingCart' },
    ]
  },
  {
    dateLabel: '23 April, Thursday',
    items: [
      { id: '32', title: 'ZABKA ZA270 K.1', amount: '-15,99 PLN', balance: '74,76 PLN', icon: 'ShoppingCart' },
      { id: '33', title: 'JOHNBOSCO JULIUS CHUWA UL. ZG...', amount: '20,00 PLN', balance: '171,40 PLN', icon: 'ArrowRightLeft', isPositive: true },
      { id: '34', title: 'UBR* PENDING.UBER.COM', amount: '-12,35 PLN', balance: '127,33 PLN', icon: 'Car' },
      { id: '35', title: 'JOHNBOSCO JULIUS CHUWA UL. ZG...', amount: '13,00 PLN', balance: '151,40 PLN', icon: 'ArrowRightLeft', isPositive: true },
      { id: '36', title: 'ZABKA ZA270 K.1', amount: '-36,58 PLN', balance: '90,75 PLN', icon: 'ShoppingCart' },
      { id: '37', title: 'JOHNBOSCO JULIUS CHUWA UL. ZG...', amount: '37,00 PLN', balance: '138,40 PLN', icon: 'ArrowRightLeft', isPositive: true },
      { id: '38', title: 'CWIARTEK ALKOHOLE S01', amount: '-3,99 PLN', balance: '141,18 PLN', icon: 'ShoppingCart' },
      { id: '39', title: 'JOHNBOSCO JULIUS CHUWA UL. ZGO...', amount: '5,00 PLN', balance: '101,40 PLN', icon: 'ArrowRightLeft', isPositive: true },
      { id: '40', title: 'Apteka Tilia s.c.', amount: '-12,00 PLN', balance: '178,44 PLN', icon: 'Heart' },
      { id: '41', title: 'JOHNBOSCO JULIUS CHUWA UL. ZG...', amount: '12,00 PLN', balance: '96,40 PLN', icon: 'ArrowRightLeft', isPositive: true },
      { id: '42', title: 'CWIARTEK ALKOHOLE S01', amount: '-2,70 PLN', balance: '190,44 PLN', icon: 'ShoppingCart' },
      { id: '43', title: 'CWIARTEK ALKOHOLE S01', amount: '-25,98 PLN', balance: '150,87 PLN', icon: 'ShoppingCart' },
      { id: '44', title: 'JOHNBOSCO', amount: '-100,00 PLN', balance: '80,40 PLN', icon: 'ArrowRightLeft' },
      { id: '45', title: 'JOHNBOSCO JULIUS CHUWA UL. ZG...', amount: '50,00 PLN', balance: '180,40 PLN', icon: 'ArrowRightLeft', isPositive: true },
      { id: '46', title: 'RAFAŁ TADEUSZ ZIÓŁKOWSKI UL. ELE...', amount: '50,00 PLN', balance: '130,40 PLN', icon: 'CreditCard', isPositive: true },
      { id: '47', title: 'JOHNBOSCO', amount: '-70,00 PLN', balance: '80,40 PLN', icon: 'ArrowRightLeft' },
      { id: '48', title: 'RAFAŁ TADEUSZ ZIÓŁKOWSKI UL. EL...', amount: '100,00 PLN', balance: '150,40 PLN', icon: 'CreditCard', isPositive: true },
      { id: '49', title: 'CWIARTEK ALKOHOLE S01', amount: '-2,00 PLN', balance: '148,87 PLN', icon: 'ShoppingCart' },
      { id: '50', title: 'Hotel at Booking.com', amount: '-484,20 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '51', title: 'CWIARTEK ALKOHOLE S01', amount: '-1,59 PLN', balance: '176,85 PLN', icon: 'ShoppingCart' },
      { id: '52', title: 'CWIARTEK ALKOHOLE S01', amount: '-4,99 PLN', balance: '193,14 PLN', icon: 'ShoppingCart' },
    ]
  },
  {
    dateLabel: '22 April, Wednesday',
    items: [
      { id: '53', title: 'CWIARTEK ALKOHOLE S01', amount: '-2,00 PLN', balance: '169,64 PLN', icon: 'ShoppingCart' },
      { id: '54', title: 'CWIARTEK ALKOHOLE S01', amount: '-3,99 PLN', balance: '165,65 PLN', icon: 'ShoppingCart' },
      { id: '55', title: 'JMP S.A. BIEDRONKA 4927', amount: '-9,76 PLN', balance: '161,64 PLN', icon: 'ShoppingCart' },
      { id: '56', title: 'JOHNBOSCO JULIUS CHUWA UL. ZG...', amount: '10,00 PLN', balance: '69,55 PLN', icon: 'ArrowRightLeft', isPositive: true },
      { id: '57', title: 'CWIARTEK ALKOHOLE S01', amount: '-5,99 PLN', balance: '159,66 PLN', icon: 'ShoppingCart' },
      { id: '58', title: 'PIJALNIA WODKI I PIWA', amount: '-8,50 PLN', balance: '132,68 PLN', icon: 'ShoppingCart' },
      { id: '59', title: 'JOHNBOSCO', amount: '-30,00 PLN', balance: '59,55 PLN', icon: 'ArrowRightLeft' },
      { id: '60', title: 'Ceji', amount: '-400,00 PLN', balance: '89,55 PLN', icon: 'Download' },
      { id: '61', title: 'DOP. VISA 421352******9981 WPŁA...', amount: '450,00 PLN', balance: '489,55 PLN', icon: 'CreditCard', isPositive: true },
      { id: '62', title: 'Google One', amount: '-70,05 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '63', title: 'VERCEL INC.', amount: '-74,44 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
    ]
  },
  {
    dateLabel: '21 April, Tuesday',
    items: [
      { id: '64', title: 'CWIARTEK ALKOHOLE S01', amount: '-4,99 PLN', balance: '2,34 PLN', icon: 'ShoppingCart' },
      { id: '65', title: 'Ceji', amount: '-400,00 PLN', balance: '7,33 PLN', icon: 'Download' },
      { id: '66', title: 'CWIARTEK ALKOHOLE S01', amount: '-5,99 PLN', balance: '52,40 PLN', icon: 'ShoppingCart' },
      { id: '67', title: 'PIJALNIA WODKI I PIWA', amount: '-8,50 PLN', balance: '151,16 PLN', icon: 'ShoppingCart' },
      { id: '68', title: 'YOLANDA MUNYULWA UL. CYPRIANA...', amount: '20,00 PLN', balance: '50,33 PLN', icon: 'CreditCard', isPositive: true },
      { id: '69', title: 'VERCEL INC.', amount: '-74,44 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '70', title: 'CWIARTEK ALKOHOLE S01', amount: '-2,00 PLN', balance: '50,40 PLN', icon: 'ShoppingCart' },
      { id: '71', title: 'CWIARTEK ALKOHOLE S01', amount: '-4,79 PLN', balance: '63,38 PLN', icon: 'ShoppingCart' },
      { id: '72', title: 'CWIARTEK ALKOHOLE S01', amount: '-1,80 PLN', balance: '67,75 PLN', icon: 'ShoppingCart' },
      { id: '73', title: 'SQSP* DOMAIN#231372035', amount: '-103,32 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '74', title: 'CWIARTEK ALKOHOLE S01', amount: '-3,79 PLN', balance: '73,96 PLN', icon: 'ShoppingCart' },
    ]
  },
  {
    dateLabel: '20 April, Monday',
    items: [
      { id: '75', title: 'CWIARTEK ALKOHOLE S01', amount: '-1,80 PLN', balance: '40,35 PLN', icon: 'ShoppingCart' },
      { id: '76', title: 'CWIARTEK ALKOHOLE S01', amount: '-0,80 PLN', balance: '39,55 PLN', icon: 'ShoppingCart' },
      { id: '77', title: 'CWIARTEK ALKOHOLE S01', amount: '-7,18 PLN', balance: '42,15 PLN', icon: 'ShoppingCart' },
      { id: '78', title: 'RUTENDO GRACE MUREWA UL. JURIJ...', amount: '10,00 PLN', balance: '10,33 PLN', icon: 'CreditCard', isPositive: true },
    ]
  },
  {
    dateLabel: '18 April, Saturday',
    items: [
      { id: '79', title: 'VERCEL INC.', amount: '-74,10 PLN', status: 'Rejected', icon: 'XCircle', isNegative: true },
      { id: '80', title: 'CWIARTEK ALKOHOLE S01', amount: '-4,79 PLN', balance: '0,33 PLN', icon: 'ShoppingCart' },
      { id: '81', title: 'RUTENDO GRACE MUREWA UL. JURIJA...', amount: '5,00 PLN', balance: '43,16 PLN', icon: 'CreditCard', isPositive: true },
      { id: '82', title: 'CWIARTEK ALKOHOLE S01', amount: '-1,80 PLN', balance: '5,12 PLN', icon: 'ShoppingCart' },
    ]
  },
  {
    dateLabel: '17 April, Friday',
    items: [
      { id: '83', title: 'CWIARTEK ALKOHOLE S01', amount: '-3,20 PLN', balance: '11,71 PLN', icon: 'ShoppingCart' },
      { id: '84', title: 'CWIARTEK ALKOHOLE S01', amount: '-4,79 PLN', balance: '6,92 PLN', icon: 'ShoppingCart' },
    ]
  }
];

const renderIcon = (iconType: string) => {
  switch (iconType) {
    case 'Landmark': return <Landmark size={18} />;
    case 'XCircle': return <XCircle size={18} />;
    case 'CreditCard': return <CreditCard size={18} />;
    case 'ShoppingCart': return <ShoppingCart size={18} />;
    case 'ArrowRightLeft': return <ArrowRightLeft size={18} />;
    case 'Car': return <Car size={18} />;
    case 'Heart': return <Heart size={18} />;
    case 'Download': return <Download size={18} style={{ transform: 'rotate(180deg)' }} />;
    default: return <CreditCard size={18} />;
  }
};

const AccountDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="full-screen fade-in" style={{ backgroundColor: 'var(--bg-light)' }}>
      {/* Top Header */}
      <div className="flex-between" style={{ backgroundColor: 'white', padding: '16px 20px', color: 'var(--erste-blue)', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/home')}>
          <ArrowLeft size={24} />
          <span style={{ fontSize: '10px', marginTop: '2px' }}>Back</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}>
          Accounts <HelpCircle size={14} />
        </div>
        
        <div style={{ display: 'flex', gap: '16px', fontSize: '10px', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <Search size={24} />
            <span style={{ marginTop: '2px' }}>Search</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <Menu size={24} />
            <span style={{ marginTop: '2px' }}>Menu</span>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Account Info Card */}
        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
          <div className="flex-between" style={{ marginBottom: '4px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, color: '#0a2342' }}>Johnbosco Julius Chuwa</h2>
            <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--erste-blue)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '16px', height: '14px', position: 'relative' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '-3px', right: 0 }}></div>
                <div style={{ width: '100%', height: '3px', backgroundColor: 'white', position: 'absolute', bottom: '5px' }}></div>
                <div style={{ width: '100%', height: '3px', backgroundColor: 'white', position: 'absolute', bottom: 0 }}></div>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--erste-blue)', marginBottom: '16px' }}>
            <span style={{ fontSize: '14px' }}>62 1090 2590 0000 0001 4718 6778</span>
            <ArrowUpRight size={16} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-gray)', marginBottom: '4px' }}>
            <span style={{ fontSize: '14px' }}>Available funds</span>
            <HelpCircle size={16} color="var(--erste-blue)" />
          </div>
          <h3 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 16px 0', color: '#0a2342' }}>0,<span style={{ fontSize: '20px' }}>00 PLN</span></h3>

          <div className="flex-between" style={{ marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', color: 'var(--text-gray)' }}>Current balance</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#0a2342' }}>10,80 PLN</span>
          </div>
          <div className="flex-between" style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '14px', color: 'var(--text-gray)' }}>Overdraft</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#0a2342' }}>0,00 PLN</span>
          </div>
          
          <div className="flex-between" style={{ backgroundColor: '#f0f5ff', padding: '12px 16px', borderRadius: '8px', margin: '0 -16px' }}>
            <span style={{ fontSize: '14px', color: '#0a2342' }}>Withholdings</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--erste-blue)' }}>-13,68 PLN</span>
              <HelpCircle size={16} color="var(--erste-blue)" />
            </div>
          </div>

          {/* Pagination dots equivalent */}
          <div className="flex-between" style={{ marginTop: '16px', color: 'var(--text-gray)' }}>
            <ArrowLeft size={16} color="#d1d5db" />
            <span style={{ fontSize: '14px' }}>1 of 2</span>
            <ArrowLeft size={16} color="var(--erste-blue)" style={{ transform: 'rotate(180deg)' }} />
          </div>

          {/* Quick Actions Scroll */}
          <div style={{ display: 'flex', overflowX: 'auto', gap: '16px', paddingTop: '24px', scrollbarWidth: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', cursor: 'pointer' }}>
               <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#10b981', marginBottom: '8px', position: 'relative' }}>
                <Landmark size={20} />
                <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'var(--erste-blue)', borderRadius: '50%', padding: '2px' }}>
                  <ArrowUpRight size={10} color="white" />
                </div>
              </div>
              <span style={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.2 }}>New<br/>transfer</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', cursor: 'pointer' }}>
               <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontWeight: 'bold', fontSize: '20px', marginBottom: '8px' }}>
                <div style={{ border: '2px solid black', borderRadius: '4px', padding: '1px 4px', lineHeight: 1 }}>b</div>
              </div>
              <span style={{ fontSize: '12px', textAlign: 'center' }}>BLIK</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', cursor: 'pointer' }}>
               <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '8px', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ width: '16px', height: '4px', backgroundColor: '#eab308', borderRadius: '2px' }}></div>
                  <div style={{ width: '16px', height: '4px', backgroundColor: '#f97316', borderRadius: '2px' }}></div>
                  <div style={{ width: '16px', height: '4px', backgroundColor: '#ef4444', borderRadius: '2px' }}></div>
                </div>
                <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'var(--erste-blue)', borderRadius: '50%', width: '12px', height: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '8px', fontWeight: 'bold' }}>i</div>
              </div>
              <span style={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.2 }}>Price<br/>advisor</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', cursor: 'pointer' }}>
               <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--erste-blue)', marginBottom: '8px' }}>
                <span style={{ fontSize: '24px', letterSpacing: '-2px' }}>•••</span>
              </div>
              <span style={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.2 }}>All<br/>shortcuts</span>
            </div>
          </div>
        </div>

        {/* History Header */}
        <div className="flex-between" style={{ padding: '0 20px 16px', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 9 }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0, color: '#0a2342' }}>History</h3>
          <div style={{ display: 'flex', gap: '16px', color: 'var(--erste-blue)', fontWeight: 'bold', fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              PDF <Download size={18} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              Filters <Filter size={18} />
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div style={{ backgroundColor: 'white', paddingBottom: '40px' }}>
          {transactionsData.map((dayGroup, groupIndex) => (
            <React.Fragment key={groupIndex}>
              <div style={{ padding: '24px 20px 8px', fontSize: '14px', fontWeight: 'bold', color: '#0a2342' }}>
                {dayGroup.dateLabel}
              </div>
              
              {dayGroup.items.map((tx) => (
                <div 
                  key={tx.id} 
                  className="flex-between" 
                  style={{ padding: '12px 20px', borderBottom: '1px dashed #e5e7eb', cursor: 'pointer' }}
                  onClick={() => navigate(`/transaction/${tx.id}`)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: 0 }}>
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                      border: '1px solid var(--erste-blue)', display: 'flex', 
                      justifyContent: 'center', alignItems: 'center', color: 'var(--erste-blue)' 
                    }}>
                      {renderIcon(tx.icon)}
                    </div>
                    <span style={{ fontSize: '14px', color: '#0a2342', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {tx.title}
                    </span>
                  </div>
                  
                  <div style={{ textAlign: 'right', flexShrink: 0, paddingLeft: '16px' }}>
                    <div style={{ 
                      fontSize: '16px', fontWeight: 'bold', 
                      color: tx.isNegative ? 'var(--red-negative)' : tx.isPositive ? 'var(--green-positive)' : '#0a2342' 
                    }}>
                      {tx.amount}
                    </div>
                    
                    {tx.status && (
                      <div style={{ 
                        fontSize: '10px', fontWeight: 'bold', color: 'white', 
                        backgroundColor: tx.status === 'Rejected' ? 'var(--red-negative)' : '#64748b', 
                        padding: '2px 4px', borderRadius: '4px', display: 'inline-block', marginTop: '2px' 
                      }}>
                        {tx.status}
                      </div>
                    )}
                    
                    {tx.balance && !tx.status && (
                      <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>
                        {tx.balance}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;

import React, { useState, useEffect } from 'react';
import Nav from './components/nav';
// import Footer from './components/footer';
import { BsPatchCheckFill } from 'react-icons/bs';
import HeroImage from './assets/Property 1=mockuuups-free-iphone-15-pro-hand-mockup 2.png';
import { useProductList } from './hooks/useProductList';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import 'swiper/css';
import { useWindowDimension } from './hooks/useWindowWidth';

interface PaymentType {
  id: number;
  name: string;
  studentOnly?: boolean;
}

interface PaymentResponse {
  status: string;
  message: string;
  data: {
    reference_number: string;
    amount: number;
    status: string;
    authorization_url: string;
    studentOnly?: boolean;
  };
}

interface PaymentData {
  payment_type: number | undefined;
  payer_name: string;
  payer_email: string;
  payer_matric_number?: string;
  payer_class_level?: string;
}

const SchoolPay: React.FC = () => {
  const [feature, setFeature] = useState<string>('banking');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('Card');
  const [paymentTypes, setPaymentTypes] = useState<PaymentType[]>([]);
  const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType | null>(null);
  const [paymentResponse, setPaymentResponse] = useState<PaymentResponse | null>(null);
  const [isPaymentResponseModalOpen, setIsPaymentResponseModalOpen] = useState<boolean>(false);
  const { productList } = useProductList();
  const { height, width } = useWindowDimension();

  const schools = [
    "University of Ilorin",
    "University of Ibadan",
    "University of Lagos",
    "Oke Ogun Polytechnic, Saki, Oyo State",
    "University of Abuja",
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(e.target.value !== "");
  };

  const handleSchoolSelect = async (school: string) => {
    setSearchTerm(school);
    setIsDropdownOpen(false);
    setSelectedSchool(school);
    setIsModalOpen(true);

    if (school === "Oke Ogun Polytechnic, Saki, Oyo State") {
      try {
        const response = await fetch('https://support.techitcheap.com/payment/payment-types/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data); // Log the entire response
        setPaymentTypes(data.results || []); // Ensure this matches the structure of the response
      } catch (error) {
        console.error('Failed to fetch payment types:', error);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSchool(null);
    setPaymentTypes([]);
  };

  const handleProceed = () => {
    if (selectedPaymentType) {
      setIsPaymentModalOpen(true);
      setIsModalOpen(false);
    } else {
      alert("Please select a payment type.");
    }
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handlePayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    const form = event.target as HTMLFormElement;
    let paymentData: PaymentData = {
      payment_type: selectedPaymentType?.id,
      payer_name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      payer_email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
    };

    if (paymentTypes.filter((item) => item.id === selectedPaymentType?.id)[0]?.studentOnly) {
      paymentData = {
        ...paymentData,
        payer_matric_number: (form.elements.namedItem('matricNumber') as HTMLInputElement)?.value,
        payer_class_level: (form.elements.namedItem('classLevel') as HTMLInputElement)?.value,
      };
    }

    try {
      const response = await fetch('https://support.techitcheap.com/payment/payments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error('Payment failed');
      }
      
      const data = await response.json();
      console.log('Payment processed successfully', data);
      setIsPaymentModalOpen(false); 
      setPaymentResponse(data); 
      setIsPaymentResponseModalOpen(true); 
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const closePaymentResponseModal = () => {
    setIsPaymentResponseModalOpen(false);
    setPaymentResponse(null);
  };

  const handleDownload = () => {
    const userAgent = window.navigator.userAgent;
    
    if (/android/i.test(userAgent)) {
      // Redirect to Google Play Store
      window.location.href = "http://play.google.com/store/apps/details?id=com.techitcheap.app8tpli=1";
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      // Redirect to Apple App Store
      window.location.href = "https://apps.apple.com/ng/app/techitcheap-tech-it-cheap/id6449785424"; 
    } else {
      // Handle other cases
      window.location.href = "http://play.google.com/store/apps/details?id=com.techitcheap.app8tpli=1";
    }
  };

  useEffect(() => {
    console.log(width, height);
  }, [width, height]);

  useEffect(() => {
    console.log('Updated paymentTypes:', paymentTypes);
  }, [paymentTypes]);

  const SchoolFeeModal: React.FC<{ onClose: () => void; onProceed: () => void }> = ({ onClose, onProceed }) => {
    if (paymentTypes.length === 0) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black font-montserrat rounded p-6 w-80 md:w-96 shadow-lg">
            <p>Loading payment options...</p>
            <div className="flex justify-end mt-4">
              <button 
                type="button" 
                onClick={onClose} 
                className="mr-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button 
                type="button" 
                onClick={() => {}}
                disabled={true}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 opacity-50 cursor-not-allowed"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white text-black font-montserrat rounded p-6 w-80 md:w-96 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Pay your fees</h2>
          <p className="mb-4">Select the fee you intend to pay and swiftly make your payment.</p>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Fees</label>
              {paymentTypes.map(type => (
                <label key={type.id} className="block text-gray-700 text-sm mb-2">
                  <input 
                    type="radio" 
                    name="feeType" 
                    value={type.id} 
                    className="mr-2" 
                    onChange={() => setSelectedPaymentType(type)}
                  /> 
                  {type.name}
                </label>
              ))}
            </div>
            <div className="flex justify-end">
              <button 
                type="button" 
                onClick={onClose} 
                className="mr-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button 
                type="button" 
                onClick={onProceed} 
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                disabled={!selectedPaymentType}
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const PaymentModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white text-black font-montserrat rounded-lg p-6 w-80 md:w-[400px] shadow-lg">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <h2 className="text-xl font-bold mb-4">Identity details</h2>
          <p className="mb-4">Input your details to complete this transaction</p>
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="ex: John Doe" className="w-full px-3 py-2 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="ex: Emailaddress@gmail.com" className="w-full px-3 py-2 border rounded" required />
            </div>
            {paymentResponse && (
              <>
                {console.log(paymentResponse.data)}

              </>
            )}
                        {paymentTypes && (
              <>
                {console.log(paymentTypes.filter((item)=> item.id === selectedPaymentType?.id))}
                
              </>
            )}
            {paymentTypes.filter((item)=> item.id === selectedPaymentType?.id)[0].studentOnly?
     <div>
              <label className="block text-sm font-bold mb-2" htmlFor="matricNumber">Matric Number</label>
              <input type="text" id="matricNumber" name="matricNumber" placeholder="ex: Matric Number" className="w-full px-3 py-2 border rounded" />
            </div>:<></>
  }
            {paymentTypes.filter((item)=> item.id === selectedPaymentType?.id)[0].studentOnly?
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="classLevel">Class/Level</label>
              <input type="text" id="classLevel" name="classLevel" placeholder="ex: ND1, ND2 or more" className="w-full px-3 py-2 border rounded" />
            </div>:<></>}
            <p className="text-sm text-gray-600">* For student-related payments, please input your matric number.</p>
            <button type="submit" className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Initiate Payment
            </button>
          </form>
        </div>
      </div>
    );
  };

  const PaymentResponseModal: React.FC = () => {
    if (!paymentResponse) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white text-black font-montserrat rounded-lg p-6 w-80 md:w-[400px] shadow-lg">
          <h2 className="text-xl font-bold mb-4">Payment Response</h2>
          <div>
            <p><strong>Status:</strong> {paymentResponse.status}</p>
            <p><strong>Message:</strong> {paymentResponse.message}</p>
            <p><strong>Reference Number:</strong> {paymentResponse.data.reference_number}</p>
            <p><strong>Amount:</strong> {paymentResponse.data.amount} NGN</p>
            <p><strong>Payment Status:</strong> {paymentResponse.data.status}</p>
          </div>
          <div className="flex justify-end mt-4">
            <button 
              type="button" 
              onClick={closePaymentResponseModal} 
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
            >
              Close
            </button>
            <a 
              href={paymentResponse.data.authorization_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Proceed to Checkout
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white">
      <div className="hero-section relative">
        {/* <Nav /> */}
        <div className="xl:w-[60vw] md:w-[80vw] w-full px-10 font-fontMont flex text-white flex-col gap-4 justify-center items-center absolute mt-10 xs:mt-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          
          
          <div className="flex justify-center items-center h-6 rounded-full bg-[#E7DCE8] gap-2 px-3">
            <BsPatchCheckFill color="#82006F" size={15} />
            <p className="text-primaryPurple text-sm">
              Fully Secured, highly protected
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-center leading-tight">
            Pay your school bills <br /> and more.
          </h1>

          <p className="text-base sm:text-lg text-center lg:w-[700px] w-full">
            Seamlessly pay your school bills and other fees.
          </p>

          <div className="relative w-full max-w-md mt-6">
            
  <input
    type="text"
    value={searchTerm}
    onChange={handleSearchChange}
    onFocus={() => setIsDropdownOpen(true)}
    onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
    placeholder="Search for your school"
    className="w-full px-4 py-2 rounded border border-gray-600 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primaryPurple"
  />
  {isDropdownOpen && (
    <div className="absolute z-10 w-full mt-2 bg-white text-black rounded shadow-lg opacity-100">
      {schools
        .filter((school) =>
          school.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((school, index) => (
          <div 
            key={index}
            onClick={() => handleSchoolSelect(school)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            {school}
          </div>
        ))}
    </div>
  )}
</div>

          <div className="mt-6">
            <button
              onClick={handleDownload}
              className="relative bg-primaryPurple text-white px-8 py-3 rounded-full flex items-center gap-3 text-lg font-medium border-2 border-[#FF00FF] overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#FF00FF] opacity-40 blur-2xl rounded-full" aria-hidden="true"></span>
              <span className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md rounded-full" aria-hidden="true"></span>
              <span className="relative z-10 flex items-center gap-3">
                Download App
                <div className="flex items-center gap-2">
                  <FaApple size={16} />
                  <FaGooglePlay size={12} />
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <img 
          src={HeroImage} 
          alt="hero" 
          className="max-w-full h-auto w-[90%] md:w-[70%] lg:w-[55%] lg:h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      {isModalOpen && (
        <SchoolFeeModal 
          onClose={closeModal} 
          onProceed={handleProceed} 
        />
      )}
      {isPaymentModalOpen && (
        <PaymentModal onClose={closePaymentModal} />
      )}
      {isPaymentResponseModalOpen && (
        <PaymentResponseModal />
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default SchoolPay;

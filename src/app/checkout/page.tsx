"use client";

import React, { useState } from 'react';

// Define the payment URLs
const paymentLinks: { [key: string]: string | null } = {
  Stripe: 'https://book.stripe.com/aEU03N26LdqAdHi4gh',
  PayU: null,
  Razorpay: null,
  Cashfree: null,
  PhonePe: null,
  InstaMojo: 'https://imjo.in/aAvQVQ',
  Easebuzz: null,
};


// Define payment gateways after the components have been defined
interface PaymentGateway {
  name: string;
  logo: string;
  isAvailable: boolean;
}

const paymentGateways: PaymentGateway[] = [
  {
    name: 'Stripe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png',
    isAvailable: true,
  },
  {
    name: 'PayU',
    logo: 'https://onboarding.payu.in/assets/images/PayU-Icon.svg',
    isAvailable: false,
  },
  {
    name: 'Razorpay',
    logo: 'https://easy.razorpay.com/federated-bundles/onboarding/build/browser/static/src/App/Onboarding/images/rzp-logo-dark.svg',
    isAvailable: false,
  },
  {
    name: 'Cashfree',
    logo: 'https://cashfreelogo.cashfree.com/cashfreepayments/logopng4x/Cashfree_Payments_Logo.png',
    isAvailable: false,
  },
  {
    name: 'PhonePe',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ldkghwns1fmi3nhbzp11',
    isAvailable: false,
  },
  {
    name: 'InstaMojo',
    logo: 'https://support.instamojo.com/hc/theming_assets/01HZM1D3NKB70G9E5QFZBK6V9F',
    isAvailable: true,
  },
  {
    name: 'Easebuzz',
    logo: 'https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/home/logo-red.svg',
    isAvailable: false,
  },
];

const Modal: React.FC<{
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  gatewayName: string;
}> = ({ show, onClose, onConfirm, gatewayName }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        {/* Set text color to dark */}
        <h2 className="text-2xl mb-4 text-black">Proceed with {gatewayName}?</h2>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={onConfirm}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};


const Checkout: React.FC = () => {
  const [selectedGateway, setSelectedGateway] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleGatewaySelect = (gatewayName: string) => {
    setSelectedGateway(gatewayName);
    setShowModal(true); // Show modal after selecting gateway
  };

  const handleProceedToPayment = () => {
    setShowModal(false); // Close modal
    const paymentUrl = paymentLinks[selectedGateway!];
    if (paymentUrl) {
      window.open(paymentUrl, '_blank');
    } else {
      alert('This payment gateway is currently not available. Please choose another one.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold mb-6 text-white">Checkout</h2>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-white">Select Payment Gateway:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {paymentGateways.map((gateway) => (
            <div
              key={gateway.name}
              className={`border border-gray-300 rounded-md p-4 cursor-pointer ${
                selectedGateway === gateway.name ? 'bg-blue-100' : 'bg-white'
              } ${!gateway.isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => gateway.isAvailable && handleGatewaySelect(gateway.name)}
            >
              <img
                src={gateway.logo}
                alt={gateway.name}
                className="w-full mb-4"
                style={{ maxHeight: '80px', objectFit: 'contain' }} // Ensure logo size consistency
              />
              <span className={`text-lg font-semibold ${gateway.isAvailable ? 'text-black' : 'text-gray-400'}`}>
                {gateway.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for proceeding */}
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleProceedToPayment}
        gatewayName={selectedGateway || ''}
      />

  
    </div>
  );
};

export default Checkout;

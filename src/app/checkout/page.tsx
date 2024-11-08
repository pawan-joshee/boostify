"use client";

import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component

// Define the payment URLs
const paymentLinks: { [key: string]: string | null } = {
  Stripe: "https://book.stripe.com/",
  PayU: "https://pmny.in/",
  Razorpay: null,
  Cashfree: null,
  PhonePe: null,
  InstaMojo: "https://imjo.in/",
  Easebuzz: null,
};

// Define payment gateways
interface PaymentGateway {
  name: string;
  logo: string;
  isAvailable: boolean;
}

const paymentGateways: PaymentGateway[] = [
  {
    name: "Stripe",
    logo: "/images/stripe.png", // Local image path
    isAvailable: true,
  },
  {
    name: "PayU",
    logo: "/images/payu.png", // Local image path
    isAvailable: true,
  },
  {
    name: "Razorpay",
    logo: "/images/razorpay.png", // Local image path
    isAvailable: false,
  },
  {
    name: "Cashfree",
    logo: "/images/cashfree.png", // Local image path
    isAvailable: false,
  },
  {
    name: "PhonePe",
    logo: "/images/phonepe.png", // Local image path
    isAvailable: false,
  },
  {
    name: "InstaMojo",
    logo: "/images/instamojo.png", // Local image path
    isAvailable: true,
  },
  {
    name: "Easebuzz",
    logo: "/images/easebuzz.png", // Local image path
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
      window.open(paymentUrl, "_blank");
    } else {
      alert("This payment gateway is currently not available. Please choose another one.");
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentGateways.map((gateway) => (
            <div
              key={gateway.name}
              className={`border border-gray-300 rounded-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer ${
                selectedGateway === gateway.name ? "bg-blue-100" : "bg-white"
              } ${!gateway.isAvailable ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => gateway.isAvailable && handleGatewaySelect(gateway.name)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "150px",
              }}
            >
              <div style={{ width: "100%", aspectRatio: "16/9" }} className="flex items-center justify-center">
                <Image
                  src={gateway.logo}
                  alt={gateway.name}
                  width={200}
                  height={50}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                  onError={(e) => (e.currentTarget.src = "/images/fallback-image.png")}
                  priority={true}
                />
              </div>
              <span
                className={`text-lg font-semibold mt-4 ${
                  gateway.isAvailable ? "text-black" : "text-gray-400"
                }`}
              >
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
        gatewayName={selectedGateway || ""}
      />
    </div>
  );
};

export default Checkout;

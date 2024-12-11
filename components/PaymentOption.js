export default function PaymentOption({ selectedOption }) {
    return (
      <div className="w-full max-w-lg border p-6 rounded-lg">
        {selectedOption === 'Credit Card' && (
          <div>
            <p className="mb-4">Choose your credit card:</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center border bg-[#f9fafb] p-4 rounded-md">
                <div>
                  <p className="text-md font-medium">Visa ending in 7658</p>
                  <p className="text-xs text-gray-400">Expiry 10/2024</p>
                </div>
                <div className="text-gray-400">VISA</div>
              </div>
              <div className="flex justify-between items-center border bg-[#f9fafb] p-4 rounded-md">
                <div>
                  <p className="text-md font-medium">Mastercard ending in 8429</p>
                  <p className="text-xs text-gray-400">Expiry 04/2026</p>
                </div>
                <div className="text-gray-400">Mastercard</div>
              </div>
            </div>
          </div>
        )}
  
        {selectedOption === 'Monthly Fees' && (
          <div>
            <p className="mb-4">Select monthly plan:</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
                <p>Flowbite Bank</p>
                <p className="text-sm font-medium">$49/month</p>
              </div>
              <div className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
                <p>JPMorgan Bank</p>
                <p className="text-sm font-medium">$39/month</p>
              </div>
              <div className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
                <p>Wells Fargo Bank</p>
                <p className="text-sm font-medium">$59/month</p>
              </div>
            </div>
          </div>
        )}
  
        {selectedOption === 'Crypto' && (
          <div>
            <p className="mb-4">Enter your crypto wallet details:</p>
            <input
              type="text"
              placeholder="Wallet Address"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-md"
            />
          </div>
        )}
  
        {selectedOption === 'Paypal' && (
          <div>
            <p className="mb-4">Login to your Paypal account:</p>
            <input
              type="email"
              placeholder="Paypal Email"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-md"
            />
          </div>
        )}
      </div>
    );
  }
  
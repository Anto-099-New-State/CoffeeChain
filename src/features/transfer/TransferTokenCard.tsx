import React, { useState } from 'react';
import { Card } from '../../components/layout/Card';

interface TransferTokenCardProps {
  amount?: string;
  recipient?: string;
}

export function TransferTokenCard({ amount: initialAmount, recipient: initialRecipient }: TransferTokenCardProps) {
  const [amount, setAmount] = useState(initialAmount || '');
  const [recipient, setRecipient] = useState(initialRecipient || '');
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate the URL with query parameters for amount and recipient
    const link = `/transfer-token?amount=${encodeURIComponent(amount)}&recipient=${encodeURIComponent(recipient)}`;
    // Instead of opening it directly, set the generated link state to display it as a hyperlink
    setGeneratedLink(link);
  };

  return (
    <Card className="w-100 sm:w-[31rem]">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-amber-600">Transfer Details</h2>
        <form onSubmit={handleContinue}>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium mb-1 text-amber-200">
              Amount
            </label>
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded-md "
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="recipient" className="block text-sm font-medium mb-1 text-amber-200">
              Recipient Address
            </label>
            <input
              id="recipient"
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter wallet address"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            Continue
          </button>
        </form>
        {generatedLink && (
          <div className="mt-4">
            <a href={generatedLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Generated Link
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}

import { useRouter } from 'next/router';
import { Card } from '../components/layout/Card';
import { TransferTokenForm } from '../features/transfer/TransferTokenForm';

export default function TransferTokenPage() {
  const router = useRouter();
  const { amount, recipient } = router.query;

  if (!amount || !recipient) {
    return (
      <Card className="w-100 sm:w-[31rem]">
        <div className="p-6">
          <p>Transfer details are missing. Please try again.</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-100 sm:w-[31rem]">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4 text-amber-600">Complete Your Transfer</h1>
        <TransferTokenForm amount={amount as string} recipient={recipient as string} />
      </div>
    </Card>
  );
}

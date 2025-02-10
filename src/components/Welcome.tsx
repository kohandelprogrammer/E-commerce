import { MonitorSmartphone } from 'lucide-react';
import React from 'react';
import { Button } from './ui';
import Link from 'next/link';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div>Welcome to</div>
      <div className="flex items-center gap-3">
        <MonitorSmartphone />
        <h1 className="text-2xl font-bold text-gray-800">Digital Shop</h1>
      </div>

      <Button asChild className="mt-6">
        <Link href="/products">Go To Products</Link>
      </Button>
    </div>
  );
};

export default Welcome;

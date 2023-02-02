import { Music } from 'lucide-react';
import Link from 'next/link';
import { cn } from 'ui';

const navList = [
  {
    href: '/music',
    icon: <Music size={24}></Music>,
    className: 'bg-red-500',
  },
];

export default function Web() {
  return (
    <div className="grid w-screen min-h-screen bg-gradient-to-b from-rose-500 to-indigo-700 place-content-center">
      <div className="grid grid-cols-4 gap-4">
        {navList.map((item) => (
          <Link
            href={item.href}
            className={cn(
              'flex items-center justify-center p-4 rounded-lg shadow-lg bg-grey-500',
              item.className
            )}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

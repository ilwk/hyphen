import { MessageCircle, Music } from 'lucide-react';
import Link from 'next/link';
import { cn } from 'ui';

const navList = [
  {
    href: '/music',
    icon: <Music size={32}></Music>,
    className: 'bg-red-500',
  },
  {
    href: '/chat',
    icon: <MessageCircle size={32} />,
    className: 'bg-green-500',
  },
];

export default function Web() {
  return (
    <div className="grid w-screen min-h-screen bg-gradient-to-b from-rose-500 to-indigo-700 place-content-center">
      <div className="grid grid-cols-4 gap-8">
        {navList.map((item) => (
          <Link
            href={item.href}
            className={cn(
              'flex items-center justify-center p-4 rounded-lg shadow-lg bg-grey-500',
              'transition hover:scale-110 ease-in-out duration-300',
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

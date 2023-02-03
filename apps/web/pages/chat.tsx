import * as React from 'react';
import { Slack } from 'lucide-react';

import { cn, Avatar, AvatarImage, Button, ScrollArea } from 'ui';
import { AppMenubar } from '~/components/app-menubar';

const playlists = [
  'Recently Added',
  'Recently Played',
  'Top Songs',
  'Top Albums',
  'Top Artists',
  'Logic Discography',
  'Bedtime Beats',
  'Feeling Happy',
  'I miss Y2K Pop',
  'Runtober',
  'Mellow Days',
  'Eminem Essentials',
];

const channels = [
  {
    name: 'Next.js',
    id: 'next.js',
  },
  {
    name: 'React',
    id: 'react',
  },
  {
    name: 'TurboPack',
    id: 'turbo',
  },
];

const messages = [
  {
    name: 'Hubert Lewis',
    avatar:
      'https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=300&dpr=2&q=80',
    id: '1',
  },
  {
    name: 'Eric McIntosh',
    avatar:
      'https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=300&dpr=2&q=80',
    id: '2',
  },
];

export function ChatDemo() {
  return (
    <div className="overflow-hidden border rounded-md shadow-2xl border-slate-200 bg-gradient-to-b from-rose-500 to-indigo-700 dark:border-slate-800">
      <AppMenubar name={'Slack Clone'}></AppMenubar>
      <div className="p-8">
        <div className="transition-all bg-white rounded-md shadow-2xl dark:bg-slate-900">
          <div className="grid grid-cols-4 xl:grid-cols-5">
            <aside>
              <div className="px-8 py-6">
                <p className="flex items-center text-2xl font-semibold tracking-tight">
                  <Slack className="mr-2" />
                  Slack Clone
                </p>
              </div>
              <div className="space-y-4">
                <div className="px-6 py-2">
                  <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
                    Channels
                  </h2>
                  <div className="space-y-1">
                    {channels.map((item) => (
                      <Button
                        key={item.id}
                        variant="ghost"
                        size="sm"
                        className="justify-start w-full"
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-2">
                  <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
                    Direct Messages
                  </h2>
                  <div className="space-y-1">
                    {messages.map((item) => (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start w-full space-x-2"
                      >
                        <Avatar className="w-6 h-6">
                          <AvatarImage
                            src={item.avatar}
                            alt={item.name}
                          />
                        </Avatar>
                        <span>{item.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            <div className="col-span-3 border-l border-l-slate-200 dark:border-l-slate-700 xl:col-span-4">
              <div className="flex flex-col h-full px-8 py-6 space-y-2">
                <div>
                  <h3 className="text-xl">Next.js</h3>
                  <p>Welcome</p>
                </div>
                <ScrollArea className="flex-1">
                  <div>123123</div>
                </ScrollArea>
                <div>
                  <textarea
                    className="w-full p-3 border rounded"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatDemo;

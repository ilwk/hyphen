import * as React from 'react';
import Image from 'next/image';
import {
  Album,
  CreditCard,
  Keyboard,
  LayoutGrid,
  Library,
  ListMusic,
  LogOut,
  Mail,
  MessageSquare,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  Plus,
  PlusCircle,
  Podcast,
  Radio,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

import {
  cn,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
  Label,
  ScrollArea,
  ScrollBar,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'ui';
import { AppMenubar } from './app-menubar';

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

interface Album {
  name: string;
  artist: string;
  cover: string;
}

const listenNowAlbums: Album[] = [
  {
    name: 'Async Awakenings',
    artist: 'Nina Netcode',
    cover:
      'https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=300&dpr=2&q=80',
  },
  {
    name: 'The Art of Reusability',
    artist: 'Lena Logic',
    cover:
      'https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80',
  },
  {
    name: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover:
      'https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80',
  },
  {
    name: 'React Rendezvous',
    artist: 'Ethan Byte',
    cover:
      'https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80',
  },
];

const madeForYouAlbums: Album[] = [
  {
    name: 'Async Awakenings',
    artist: 'Nina Netcode',
    cover:
      'https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?w=300&dpr=2&q=80',
  },

  {
    name: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover:
      'https://images.unsplash.com/photo-1598062548091-a6fb6a052562?w=300&dpr=2&q=80',
  },
  {
    name: 'The Art of Reusability',
    artist: 'Lena Logic',
    cover:
      'https://images.unsplash.com/photo-1626759486966-c067e3f79982?w=300&dpr=2&q=80',
  },
  {
    name: 'Thinking Components',
    artist: 'Lena Logic',
    cover:
      'https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80',
  },
  {
    name: 'Functional Fury',
    artist: 'Beth Binary',
    cover:
      'https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80',
  },
  {
    name: 'React Rendezvous',
    artist: 'Ethan Byte',
    cover:
      'https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80',
  },
];

export function AppleMusicDemo() {
  return (
    <div className="overflow-hidden border rounded-md shadow-2xl border-slate-200 bg-gradient-to-b from-rose-500 to-indigo-700 dark:border-slate-800">
      <AppMenubar name={'Music'} />
      <div className="p-8">
        <div className="transition-all bg-white rounded-md shadow-2xl dark:bg-slate-900">
          <div className="grid grid-cols-4 xl:grid-cols-5">
            <aside>
              <div className="px-8 py-6">
                <p className="flex items-center text-2xl font-semibold tracking-tight">
                  <Music className="mr-2" />
                  Music
                </p>
              </div>
              <div className="space-y-4">
                <div className="px-6 py-2">
                  <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
                    Discover
                  </h2>
                  <div className="space-y-1">
                    <Button
                      variant="subtle"
                      size="sm"
                      className="justify-start w-full"
                    >
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Listen Now
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start w-full"
                    >
                      <LayoutGrid className="w-4 h-4 mr-2" />
                      Browse
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start w-full"
                    >
                      <Radio className="w-4 h-4 mr-2" />
                      Radio
                    </Button>
                  </div>
                </div>
                <div className="px-6 py-2">
                  <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
                    Library
                  </h2>
                  <div className="space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start w-full"
                    >
                      <ListMusic className="w-4 h-4 mr-2" />
                      Playlists
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start w-full"
                    >
                      <Music2 className="w-4 h-4 mr-2" />
                      Songs
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start w-full"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Made for You
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start w-full"
                    >
                      <Mic2 className="w-4 h-4 mr-2" />
                      Artists
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start w-full"
                    >
                      <Library className="w-4 h-4 mr-2" />
                      Albums
                    </Button>
                  </div>
                </div>
                <div className="py-2">
                  <h2 className="relative px-8 mb-2 text-lg font-semibold tracking-tight">
                    Playlists
                  </h2>
                  <ScrollArea className="h-[280px] px-4">
                    <div className="p-2 space-y-1">
                      {playlists.map((playlist) => (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="justify-start w-full font-normal"
                          key={playlist}
                        >
                          <ListMusic className="w-4 h-4 mr-2" />
                          {playlist}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </aside>
            <div className="col-span-3 border-l border-l-slate-200 dark:border-l-slate-700 xl:col-span-4">
              <div className="h-full px-8 py-6">
                <Tabs
                  defaultValue="music"
                  className="h-full space-y-6"
                >
                  <div className="flex items-center space-between">
                    <TabsList>
                      <TabsTrigger value="music" className="relative">
                        Music <DemoIndicator className="right-2" />
                      </TabsTrigger>
                      <TabsTrigger value="podcasts">
                        Podcasts
                      </TabsTrigger>
                      <TabsTrigger value="live" disabled>
                        Live
                      </TabsTrigger>
                    </TabsList>
                    <div className="ml-auto mr-4">
                      <h3 className="text-sm font-semibold">
                        Welcome back
                      </h3>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="relative w-10 h-10 rounded-full"
                        >
                          <Avatar>
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                            />
                            <AvatarFallback>SC</AvatarFallback>
                          </Avatar>
                          <DemoIndicator className="top-0 right-0" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-56"
                        align="end"
                        forceMount
                      >
                        <DropdownMenuLabel>
                          My Account
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <User className="w-4 h-4 mr-2" />
                            <span>Profile</span>
                            <DropdownMenuShortcut>
                              ⇧⌘P
                            </DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CreditCard className="w-4 h-4 mr-2" />
                            <span>Billing</span>
                            <DropdownMenuShortcut>
                              ⌘B
                            </DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="w-4 h-4 mr-2" />
                            <span>Settings</span>
                            <DropdownMenuShortcut>
                              ⌘S
                            </DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Keyboard className="w-4 h-4 mr-2" />
                            <span>Keyboard shortcuts</span>
                            <DropdownMenuShortcut>
                              ⌘K
                            </DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <Users className="w-4 h-4 mr-2" />
                            <span>Team</span>
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <UserPlus className="w-4 h-4 mr-2" />
                              <span>Invite users</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent forceMount>
                                <DropdownMenuItem>
                                  <Mail className="w-4 h-4 mr-2" />
                                  <span>Email</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <MessageSquare className="w-4 h-4 mr-2" />
                                  <span>Message</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <PlusCircle className="w-4 h-4 mr-2" />
                                  <span>More...</span>
                                </DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <LogOut className="w-4 h-4 mr-2" />
                          <span>Log out</span>
                          <DropdownMenuShortcut>
                            ⇧⌘Q
                          </DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <TabsContent
                    value="music"
                    className="p-0 border-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Listen Now
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Top picks for you. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="relative">
                      <DemoIndicator className="right-auto z-30 left-24 top-32" />
                      <div className="relative flex space-x-4">
                        {listenNowAlbums.map((album) => (
                          <AlbumArtwork
                            key={album.name}
                            album={album}
                            className="w-[250px]"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Made for You
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Your personal playlists. Updated daily.
                      </p>
                    </div>
                    <Separator className="my-4" />
                    <div className="relative">
                      <DemoIndicator className="right-auto z-30 top-32 left-16" />
                      <ScrollArea>
                        <div className="flex pb-4 space-x-4">
                          {madeForYouAlbums.map((album) => (
                            <AlbumArtwork
                              key={album.name}
                              album={album}
                              className="w-[150px]"
                              aspectRatio={1 / 1}
                            />
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="podcasts"
                    className="h-full flex-col border-none p-0 data-[state=active]:flex"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          New Episodes
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Your favorite podcasts. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed border-slate-200 dark:border-slate-700">
                      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                        <Podcast className="w-10 h-10 text-slate-400" />
                        <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
                          No episodes added
                        </h3>
                        <p className="mt-2 mb-4 text-sm text-slate-500 dark:text-slate-400">
                          You have not added any podcasts. Add one
                          below.
                        </p>
                        <Dialog>
                          <DialogTrigger>
                            <Button size="sm" className="relative">
                              <Plus className="w-4 h-4 mr-2" />
                              Add Podcast
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Add Podcast</DialogTitle>
                              <DialogDescription>
                                Copy and paste the podcast feed URL to
                                import.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                <Label htmlFor="url">
                                  Podcast URL
                                </Label>
                                <Input
                                  id="url"
                                  placeholder="https://example.com/feed.xml"
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button>Import Podcast</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AlbumArtworkProps
  extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: number;
}

function AlbumArtwork({
  album,
  aspectRatio = 3 / 4,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn('space-y-3', className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <AspectRatio
            ratio={aspectRatio}
            className="overflow-hidden rounded-md"
          >
            <Image
              src={album.cover}
              alt={album.name}
              fill
              className="object-cover transition-all hover:scale-105"
            />
          </AspectRatio>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              Add to Playlist
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircle className="w-4 h-4 mr-2" />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map((playlist) => (
                <ContextMenuItem key={playlist}>
                  <ListMusic className="w-4 h-4 mr-2" /> {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {album.artist}
        </p>
      </div>
    </div>
  );
}

interface DemoIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export function DemoIndicator({ className }: DemoIndicatorProps) {
  return (
    <span
      className={cn(
        'absolute top-1 right-0 flex h-5 w-5 animate-bounce items-center justify-center',
        className
      )}
    >
      <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400" />
      <span className="relative inline-flex w-3 h-3 rounded-full bg-sky-500" />
    </span>
  );
}

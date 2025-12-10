"use client";

import { Card } from "@/components/ui/card";
import {
  BookOpenText,
  Bot,
  CloudDownload,
  CodeXml,
  Earth,
  EarthLock,
  Gamepad2,
  Headphones,
  LibraryBig,
  Projector,
  ShieldEllipsis,
  Smartphone,
  SwatchBook,
  Terminal,
  Waypoints
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type Feature = {
  title: string;
  desc: string;
  icon: React.JSX.Element;
  bg: string;
  href?: string;
};

const features: Feature[] = [
  {
    title: "Adblocking & Privacy",
    desc: "Learn how to block ads, trackers and other nasty things.",
    icon: <ShieldEllipsis className="size-6 text-rose-500" />,
    bg: "255, 0, 0",
    href: "/read/wiki/privacy"
  },
  {
    title: "Artificial Intelligence",
    desc: "Explore the world of AI and machine learning.",
    icon: <Bot className="size-6 text-violet-500" />,
    bg: "139,92,246",
    href: "/read/wiki/ai"
  },
  {
    title: "Streaming",
    desc: "Stream, download, torrent and binge all your favourite movies and shows!",
    icon: <Projector className="size-6 text-blue-500" />,
    bg: "0, 123, 255",
    href: "/read/wiki/video"
  },
  {
    title: "Listening",
    desc: "Stream, download and torrent songs, podcasts and more!",
    icon: <Headphones className="size-6 text-violet-500" />,
    bg: "119, 0, 255",
    href: "/read/wiki/audio"
  },
  {
    title: "Gaming",
    desc: "Download and play all your favourite games or emulate some old but gold ones!",
    icon: <Gamepad2 className="size-6 text-cyan-500" />,
    bg: "0, 234, 255",
    href: "/read/wiki/gaming"
  },
  {
    title: "Reading",
    desc: "Whether you're a bookworm, otaku or comic book fan, you'll be able to find your favourite pieces of literature here!",
    icon: <BookOpenText className="size-6 text-teal-500" />,
    bg: "0, 255, 132",
    href: "/read/wiki/reading"
  },
  {
    title: "Downloading",
    desc: "Download all your favourite software, movies, shows, music, games and more!",
    icon: <CloudDownload className="size-6 text-yellow-500" />,
    bg: "255, 217, 0",
    href: "/read/wiki/downloading"
  },
  {
    title: "Torrenting",
    desc: "Download your favourite media using the BitTorrent protocol.",
    icon: <Waypoints className="size-6 text-purple-500" />,
    bg: "179, 0, 255",
    href: "/read/wiki/torrenting"
  },
  {
    title: "Educational",
    desc: "Educational content for all ages.",
    icon: <LibraryBig className="size-6 text-green-500" />,
    bg: "4, 255, 0",
    href: "/read/wiki/educational"
  },
  {
    title: "Android & iOS",
    desc: "All forms of content for Android and iOS.",
    icon: <Smartphone className="size-6 text-khaki-500" />,
    bg: "237, 237, 185",
    href: "/read/wiki/mobile"
  },
  {
    title: "Linux & MacOS",
    desc: "The $HOME of Linux and macOS.",
    icon: <Terminal className="size-6 text-amber-500" />,
    bg: "255, 155, 33",
    href: "/read/wiki/linux-macos"
  },
  {
    title: "Non-English",
    desc: "Content in languages other than English.",
    icon: <Earth className="size-6 text-zinc-500" />,
    bg: "196, 196, 196",
    href: "/read/wiki/non-english"
  },
  {
    title: "Hacking",
    desc: "Psst... Wanna learn some hacking? You wish you knew earlier?",
    icon: <EarthLock className="size-6 text-pink-500" />,
    bg: "255, 10, 173",
    href: "/read/wiki/hacking"
  },
  {
    title: "Source Code",
    desc: "Get All Free Source Codes for Various Applications and Websites.",
    icon: <CodeXml className="size-6 text-cyan-500" />,
    bg: "0, 234, 255",
    href: "/read/wiki/source-code"
  },
  {
    title: "Miscellaneous",
    desc: "Various topics like food, travel, news, shopping, fun sites and more!",
    icon: <SwatchBook className="size-6 text-zinc-200" />,
    bg: "138, 135, 135",
    href: "/read/wiki/misc"
  },
];

export function FeatureSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="container mx-auto max-w-7xl px-4 py-12 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => {
          const outerShadow = active === f.title ? `0 0 0 4px rgba(${f.bg}, 0.10)` : "none";

          return (
            <Link
              key={f.title}
              href={f.href ?? "#"}
              className="block rounded-xl"
              onMouseEnter={() => setActive(f.title)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(f.title)}
              onBlur={() => setActive(null)}
              style={{ boxShadow: outerShadow }}
            >
              <Card.Root className="bg-zinc-500/10 border-1 h-full flex flex-col p-4 transition-transform duration-150 hover:-translate-y-0.5">
                <div className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center p-2 rounded-full" style={{ backgroundColor: `rgba(${f.bg}, 0.12)` }}>
                    {f.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-semibold">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2.5">{f.desc}</p>
                  </div>
                </div>
              </Card.Root>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

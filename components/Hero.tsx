import { HeartHandshake, MoveRight, Newspaper } from "lucide-react";
import Link from 'next/link';
import { HeroIllustration } from "./hero-illustration";
import { Button } from "./ui/button";
import HomeBadge from "./ui/home-badge";

export function HeroSection() {
    return (
        <section className="container mx-auto max-w-7xl max-h-120 px-4 py-12 md:py-24 lg:py-32">
            <div className="space-y-6 pt-4">
                <HomeBadge />
                <h1 className="max-w-4xl text-balance font-bold font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
                    Hello I'm Ardean,{" "}
                    <span className="bg-linear-to-br from-blue-300 to-blue-700 bg-clip-text text-transparent">
                        Welcome to My World
                    </span>
                </h1>
                <p className="text-md text-muted-foreground md:text-lg lg:text-xl">
                    Things you wish you knew earlier. It's okay, it's not too late. Time for you to Dive Deeper!
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="/read">
                    <Button className="bg-gradient-to-b from-blue-500 to-blue-700 text-sm text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
                            Read Beginner's Guide
                            <MoveRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="/posts">
                    <Button
                        className="bg-gradient-to-b from-black to-zinc-900 text-sm text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
                    >
                        <Newspaper className="ml-2 h-4 w-4" />
                        Posts
                        </Button>
                    </Link>
                    <Link href="/read/contribute">
                    <Button
                        className="bg-gradient-to-b from-amber-500 to-amber-700 text-sm text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
                    >
                        <HeartHandshake className="ml-2 h-4 w-4" />
                        Contribute
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="hidden px-10 lg:block xl:px-20">
                <HeroIllustration />
            </div>
        </section>
    );
}

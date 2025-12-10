export const siteConfig = {
  description:
    "A set of perfect-designed components built on top of React Aria and Motion.",
  links: {
    github: "https://github.com/ardeanx",
    twitter: "https://x.com/ardeanbimasptra",
  },
  name: "Welcome • Ardean Bima Saputra",
  url: "https://ardean.me",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "React Aria",
    "Radix UI",
    "TypeScript",
    "Component Library",
    "Open Source",
    "Accessible",
    "Customizable",
  ] as string[],
} as const;

export type SiteConfig = typeof siteConfig;
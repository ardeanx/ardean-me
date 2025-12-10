import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookA, Film, Home } from 'lucide-react';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/ardeanx/ardean-me',
  nav: {
    title: (
      <div className="flex items-center justify-center gap-2">
        <Image
          width={500}
          height={500}
          src="/logo.png"
          alt="logo"
          className="h-8 w-8 rounded-full"
        />
        <span className="bg-blue-600 from-white to-blue via-blue-300 bg-clip-text text-2xl font-semibold text-transparent md:text-xl dark:bg-gradient-to-b">
          ARDEAN
        </span>
      </div>
    ),
    transparentMode: 'top',
  },

  links: [
    {
      text: 'Glosary',
      url: '/',
      active: 'nested-url',
      icon: <Home />,
    },
    {
      text: 'Posts',
      url: '/posts',
      active: 'nested-url',
      icon: <BookA />,
    },
    {
      text: 'Ecosystem',
      url: '/showcase',
      active: 'nested-url',
      icon: <Film />,
    },
  ],
};

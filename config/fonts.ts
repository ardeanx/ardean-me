import { Bricolage_Grotesque, DM_Sans, Geist } from 'next/font/google';

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
});

export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-carlito',
  weight: '400',
});

export const dm = DM_Sans({
  subsets: ['latin'],
});

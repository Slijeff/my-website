import { ProgressBar } from '@/components/progressbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}

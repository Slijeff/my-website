import { ProgressBar } from '@/components/progressbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
};

export default PageLayout;

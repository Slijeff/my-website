import { ProgressBar } from '@/components/progressbar';

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
};

export default PageTemplate;

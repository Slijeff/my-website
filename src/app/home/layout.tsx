"use client";

import { ProgressBar } from "@/components/progressbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
};

export default PageLayout;

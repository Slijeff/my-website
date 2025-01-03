"use client";

import { ProgressBar } from "@/components/progressbar";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
};

export default PageLayout;

import { ReactNode } from "react";

interface WizardLayoutProps {
  children: ReactNode;
}

export default function WizardLayout({ children }: WizardLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        {children}
      </div>
    </div>
  );
}

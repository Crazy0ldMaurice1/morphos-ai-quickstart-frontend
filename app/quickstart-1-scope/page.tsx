"use client";

import { Button } from "@/components/ui/Button";
import WizardLayout from "@/components/wizard/WizardLayout";
import { useRouter } from "next/navigation";

export default function DefineScopePage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/quickstart-2-goals");
  };

  return (
    <WizardLayout>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Define Your AI Solution Scope</h1>
      <p className="mb-6">
        Describe what kind of information you want to process with your AI solution.
        This could include policies, transcripts, knowledge bases, or customer records.
      </p>
      <Button onClick={handleNext}>Continue to Set Goals</Button>
    </WizardLayout>
  );
}
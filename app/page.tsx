"use client";

import { Button } from "@/components/ui/Button";
import WizardLayout from "@/components/wizard/WizardLayout";
import { useRouter } from "next/navigation";

export default function IntroductionPage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/quickstart-1-scope");
  };

  return (
    <WizardLayout>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Morphos AI Quickstart</h1>
      <p className="mb-4">
        This wizard will guide you through configuring your AI solution using Green Vectors™.
      </p>
      <div className="flex justify-center">
        <Button onClick={handleGetStarted} size="lg">
          Get Started
        </Button>
      </div>
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-4">
        <h3 className="text-lg font-medium text-blue-800 mb-2">What are Green Vectors™?</h3>
        <p className="text-blue-700">
          Green Vectors™ is Morphos AI's proprietary approach to data vectorization that optimizes
          for both performance and cost. By structuring your data into vector groups with specific
          facets and metadata, we enable more efficient and effective AI applications.
        </p>
      </div>
    </WizardLayout>
  );
}
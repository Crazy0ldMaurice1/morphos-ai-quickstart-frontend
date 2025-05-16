"use client";
import { Button } from "@/components/ui/Button";
import WizardLayout from "@/components/wizard/WizardLayout";
import { useRouter } from "next/navigation";

export default function DataMappingPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/quickstart-4-action");
  };

  return (
    <WizardLayout>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Data Mapping</h1>
      <p className="mb-6">
        Define how your data should be structured into vectors. This may include facets like
        categories, tags, or metadata fields that help optimize search and retrieval.
      </p>
      <Button onClick={handleNext}>Continue to Take Action</Button>
    </WizardLayout>
  );
}
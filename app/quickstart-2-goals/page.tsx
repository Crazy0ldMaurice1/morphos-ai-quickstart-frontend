"use client";
import { Button } from "@/components/ui/Button";
import WizardLayout from "@/components/wizard/WizardLayout";
import { useRouter } from "next/navigation";

export default function SetGoalsPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/quickstart-3-data");
  };

  return (
    <WizardLayout>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Set Your AI Solution Goals</h1>
      <p className="mb-6">
        Define what success looks like for this AI solution. Consider outcomes like improving search, 
        personalizing recommendations, or reducing response times.
      </p>
      <Button onClick={handleNext}>Continue to Data Mapping</Button>
    </WizardLayout>
  );
}
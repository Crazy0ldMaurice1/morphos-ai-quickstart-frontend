"use client";
import { Button } from "@/components/ui/Button";
import WizardLayout from "@/components/wizard/WizardLayout";
import { useRouter } from "next/navigation";

export default function IntegrationInstructionsPage() {
  const router = useRouter();

  const handleRestart = () => {
    router.push("/");
  };

  return (
    <WizardLayout>
      <h1 className="text-2xl font-bold mb-4">Integration Instructions</h1>
      <p className="mb-6">
        Your AI solution has been configured. Please follow the provided instructions
        to integrate with Morphos AI services.
      </p>
      <Button onClick={handleRestart}>Start Over</Button>
    </WizardLayout>
  );
}

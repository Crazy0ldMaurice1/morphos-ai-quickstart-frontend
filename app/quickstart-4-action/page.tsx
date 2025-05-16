"use client";
import { Button } from "@/components/ui/Button";
import WizardLayout from "@/components/wizard/WizardLayout";
import { useRouter } from "next/navigation";

export default function TakeActionPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/quickstart-5-subscription");
  };

  return (
    <WizardLayout>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Take Action</h1>
      <p className="mb-6">
        Select your AI activation options that help you achieve your defined goals.
      </p>
      <Button onClick={handleNext}>Proceed to Subscription</Button>
    </WizardLayout>
  );
}
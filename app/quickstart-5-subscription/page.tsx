"use client";
import { Button } from "@/components/ui/Button";
import WizardLayout from "@/components/wizard/WizardLayout";
import { useRouter } from "next/navigation";

export default function SubscriptionPage() {
  const router = useRouter();

  const handleFinish = () => {
    router.push("/");
  };

  return (
    <WizardLayout>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Subscribe to Morphos AI</h1>
      <p className="mb-6">
        You’re ready to activate your Morphos AI solution. Complete your subscription to proceed.
      </p>
      <Button onClick={handleFinish}>Complete Subscription</Button>
    </WizardLayout>
  );
}

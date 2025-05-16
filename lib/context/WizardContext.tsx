'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define wizard steps
export enum WizardStep {
  INTRODUCTION = 1,
  DEFINE_SCOPE = 2,
  SET_GOALS = 3,
  DATA_MAPPING = 4,
  AI_ACTIVATION = 5,
  SUBSCRIPTION = 6
}

// Define wizard context type
type WizardContextType = {
  currentStep: WizardStep;
  setCurrentStep: (step: WizardStep) => void;
  isStepCompleted: (step: WizardStep) => boolean;
  markStepAsCompleted: (step: WizardStep) => void;
  configuration: any;
  updateConfiguration: (data: any) => void;
};

// Create context with default values
const WizardContext = createContext<WizardContextType | undefined>(undefined);

// Create provider component
export function WizardProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<WizardStep>(WizardStep.INTRODUCTION);
  const [completedSteps, setCompletedSteps] = useState<Set<WizardStep>>(new Set());
  const [configuration, setConfiguration] = useState<any>({});

  const isStepCompleted = (step: WizardStep): boolean => {
    return completedSteps.has(step);
  };

  const markStepAsCompleted = (step: WizardStep): void => {
    setCompletedSteps(prev => new Set(prev).add(step));
  };

  const updateConfiguration = (data: any): void => {
    setConfiguration(prev => ({ ...prev, ...data }));
  };

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        isStepCompleted,
        markStepAsCompleted,
        configuration,
        updateConfiguration
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

// Create hook for using the wizard context
export function useWizard() {
  const context = useContext(WizardContext);
  if (context === undefined) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
}

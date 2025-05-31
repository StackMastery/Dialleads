import { Rocket } from "lucide-react";
import React from "react";

interface StepCard {
  step: string;
  title: string;
  description: string;
  buttonText: string;
  icon?: React.ElementType;
}

export const StepCards: StepCard[] = [
  {
    step: "Step 1",
    title: "Discovery meeting",
    description:
      "We’ll meet to understand your business goals, challenges, and how our solution can fit your needs.",
    buttonText: "Get Started",
  },
  {
    step: "Step 2",
    title: "Demo Call",
    description:
      "Experience the AI in action! We’ll walk you through a live demo, showcasing how our solution works for your industry.",
    buttonText: "Get Demo Call",
  },
  {
    step: "Step 3",
    title: "Proposal",
    description:
      "We’ll send you a customized plan with pricing and implementation details based on your unique requirements.",
    buttonText: "Start a project",
  },
  {
    step: "Success",
    title: "Kick Off",
    description:
      "We’re ready to roll! Our team will guide you through onboarding and integration, ensuring a smooth launch.",
    buttonText: "Business Success",
    icon: Rocket,
  },
];

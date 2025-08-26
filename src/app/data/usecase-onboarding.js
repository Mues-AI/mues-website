import { DocumentText,Lovely,Send2 } from "iconsax-react";

export const onboardignData = [
  {
    id: 1,
    // svgSrc: "/use-cases/product-adoption/svg/proactive.svg",
    // svgAlt: "Proactive",
    icon: <DocumentText size="32" color="#0089ff" variant="Bulk"/>,
    title: "Personalized Answers",
    description:
      "Generic and static onboarding content doesn't always resolve the questions in users' minds. However, Mues AI dynamically assists users. It gives them personalized answers instantly.",
    imageAlt: "Personalized Answers",
    imageSrc: "/use-cases/onboarding/images/personalizedAnswers.webp",
  },
  {
    id: 2,
    // svgSrc: "/use-cases/product-adoption/svg/personalized.svg",
    // svgAlt: "Personalized",
    icon: <Lovely size="32" color="#1fc16b" variant="Bulk"/>,
    title: "Live & Dynamic Onboarding",
    description:
      "When users encounter a feature, they initially have some questions. Then, the feature adoption process begins. Mues AI first answers all user questions and then onboards the feature to them. Feature adoption rates increase.",
    imageAlt: "Live & Dynamic Onboarding",
    imageSrc: "/use-cases/onboarding/images/liveDynamic.webp",
  },
  {
    id: 3,
    // svgSrc: "/use-cases/product-adoption/svg/behaviorDriven.svg",
    // svgAlt: "Behaviour-driven",
    icon: <Send2 size="32" color="#ffb92e" variant="Bulk"/>,
    title: "No Learning Curve",
    description:
      "Mues AI eliminates learning curves for users. Users can ask Mues AI to respond or take action on their behalf at any time. This eliminates the need to learn a feature/flow.",
    imageAlt: "No Learning Curve",
    imageSrc: "/use-cases/onboarding/images/noLearning.webp",
  },
]; 


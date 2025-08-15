import { MouseSquare,Personalcard,Send2 } from "iconsax-react";

export const productAdoptionData = [
  {
    id: 1,
    // svgSrc: "/use-cases/product-adoption/svg/proactive.svg",
    // svgAlt: "Proactive",
    icon: <MouseSquare size="32" color="#0089ff" variant="Bulk"/>,
    title: "Proactive",
    description:
      "Mues identifies user needs and detects product issues. When a user hovers over a problem, it provides the best assistance.",
    imageAlt: "Proactive feature",
    imageSrc: "/use-cases/product-adoption/images/proactiveImage.webp",
  },
  {
    id: 2,
    // svgSrc: "/use-cases/product-adoption/svg/personalized.svg",
    // svgAlt: "Personalized",
    icon: <Personalcard size="32" color="#1fc16b" variant="Bulk"/>,
    title: "Personalized",
    description:
      "AI cursor that guides every user specifically and personally. As if you were sitting next to them.",
    imageAlt: "Personalized feature",
    imageSrc: "/use-cases/product-adoption/images/personalizedImage.webp",
  },
  {
    id: 3,
    // svgSrc: "/use-cases/product-adoption/svg/behaviorDriven.svg",
    // svgAlt: "Behaviour-driven",
    icon: <Send2 size="32" color="#ffb92e" variant="Bulk"/>,
    title: "Behaviour-driven",
    description:
      "Mues learns from the prompts and journeys of your users. It provides better results for next journey.",
    imageAlt: "Behavior-driven feature",
    imageSrc: "/use-cases/product-adoption/images/behaviourImage.webp",
  },
]; 
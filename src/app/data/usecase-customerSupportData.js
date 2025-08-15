import { Ticket2,I24Support,Send2 } from "iconsax-react";

export const customerSupportData = [
  {
    id: 1,
    // svgSrc: "/use-cases/customer-support/svg/bulk-ticket-2.svg",
    // svgAlt: "Lower Ticket Volume",
    icon: <Ticket2 size="32" color="#0089ff" variant="Bulk"/>,
    title: "Lower Ticket Volume",
    description:
      "Mues AI resolves common issues directly inside the product—before they ever become tickets. By reducing ticket volume, Mues AI lowers the need for large support teams.",
    imageAlt: "Lower Ticket Volume feature",
    imageSrc: "/use-cases/customer-support/images/lowerTicketVolumeImage.webp",
  },
  {
    id: 2,
    // svgSrc: "/use-cases/customer-support/svg/bulk-24supoort.svg",
    // svgAlt: "Instant, In-Context Help 24/7",
    icon: <I24Support size="32" color="#1fc16b" variant="Bulk"/>,
    title: "Instant, In-Context Help 24/7",
    description:
      "No more alt-tabbing to docs or waiting for email replies. Users get help right where they’re stuck—keeping them in the flow.",
    imageAlt: "Instant, In-Context Help 24/7 feature",
    imageSrc: "/use-cases/customer-support/images/instantInContextHelpImage.webp",
  },
  {
    id: 3,
    // svgSrc: "/use-cases/customer-support/svg/behaviorDriven.svg",
    // svgAlt: "Always Learning",
    icon: <Send2 size="32" color="#ffb92e" variant="Bulk"/>,
    title: "Always Learning",
    description:
      "Every user interaction makes Mues AI smarter. It evolves with your product and user behavior—no manual updates needed.",
    imageAlt: "Always Learning feature",
    imageSrc: "/use-cases/customer-support/images/alwaysLearningImage.webp",
  },
]; 
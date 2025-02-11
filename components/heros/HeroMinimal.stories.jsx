import HeroMinimal from "./HeroMinimal";

export default {
  title: "Component/Heros/Minimal",
  component: HeroMinimal,
  parameters: {
    // layout: "centered",
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "390px",
            height: "844px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        laptop: {
          name: "Laptop",
          styles: {
            width: "1024px",
            height: "768px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1680px",
            height: "900px",
          },
        },
      },
    },
  },
  argTypes: {
    eyebrow: {
      control: "text",
      description:
        "Optional category text displayed above the title (max 30 chars)",
    },
    title: {
      control: "text",
      description: "Main card heading (required, max 100 chars)",
    },
    description: {
      control: "text",
      description: "Body text providing additional details (max 400 chars)",
    },
    variant: {
      control: "select",
      options: ["image", "noimage"],
      description: "Variant of the card (default is 'image')",
    },
  },
};

export const Minimal = {
  args: {
    eyebrow: "We are here to help get what you need",
    title: "Find, Borrow, Request",
    description:
      "How to locate, obtain, and use library materials - from our physical and online collections as well as those of other libraries.",
  },
};

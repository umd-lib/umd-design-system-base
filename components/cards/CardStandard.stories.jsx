import CardStandard from "./CardStandard";

export default {
  title: "Component/Cards/Standard",
  component: CardStandard,
  parameters: {
    layout: "centered",
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
    title: {
      control: "text",
      description: "The title in the card",
    },
    eyebrow: {
      control: "text",
      description: "The optional eyebrow above title",
    },
    description: {
      control: "text",
      description: "The content inside the card",
    },
    date: {
      control: "text",
      description: "The optional date information under card description",
    },
    link: {
      control: "text",
      description: "The optional link",
    },
  },
};

export const Standard = {
  args: {
    title: "Digital Collections",
    eyebrow: "Optional Tagline",
    description:
      "Access digitized material, including photographs, archives and manuscripts, film and audio, and more from our specialized collections.",
    date: "September 31, 2023",
    link: "Explore Digital Collections",
  },
};

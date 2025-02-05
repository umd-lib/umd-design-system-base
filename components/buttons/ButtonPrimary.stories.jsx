import ButtonPrimary from "./ButtonPrimary";

export default {
  title: "Component/Buttons/Primary",
  component: ButtonPrimary,
  parameters: {
    layout: "centered",
  },
  children: {
    control: "text",
    description: "The content inside the button",
  },
};

// ButtonPrimary Stories
export const Primary = {
  args: {
    children: "Primary Button",
  },
};

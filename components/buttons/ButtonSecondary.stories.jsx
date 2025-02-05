import ButtonSecondary from "./ButtonSecondary";

export default {
  title: "Component/Buttons/Secondary",
  component: ButtonSecondary,
  parameters: {
    layout: "centered",
  },
  children: {
    control: "text",
    description: "The content inside the button",
  },
};

// ButtonPrimary Stories
export const Secondary = {
  args: {
    children: "Secondary Button",
  },
};

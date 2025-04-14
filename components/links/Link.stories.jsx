import Link from "./Link";

export default {
  title: "Component/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["title", "body"],
    },
  },
};

// Title Stories
export const LinkTitle = {
  args: {
    children: "Title Link",
    variant: "title",
  },
};

export const LinkBody = {
  args: {
    children: "Body Link",
    variant: "body",
  },
};

import "../app/globals.css";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
  Markdown,
  ArgTypes,
} from "@storybook/blocks";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Introduction", "*", ["Docs", "*"]],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
          {/* <ArgTypes /> */}
        </>
      ),
    },
  },
};

export default preview;

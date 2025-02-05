import { addons } from "@storybook/manager-api";
import UmdLib from "./UmdLib";

addons.setConfig({
  theme: UmdLib,
  sidebar: {
    showRoots: false,
  },
});

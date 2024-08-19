import { Meta, StoryObj } from "@storybook/react";

import { <FTName>, <FTName>Props } from "./index";

const meta: Meta<<FTName>Props> = {
    component: <FTName>,
};

export default meta;

type Story = StoryObj<<FTName>Props>;

export const Default: Story = {
    args: {
        children: "label",
    },
};

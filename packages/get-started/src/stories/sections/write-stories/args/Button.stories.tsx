// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../../../Button";

export default {
    /* π The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Write-Stories/Args",
    component: Button,
    //π Creates specific argTypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        //π Now all Button stories will be primary.
        primary: true,
    },
} as ComponentMeta<typeof Button>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const StoryArgs = Template.bind({});

StoryArgs.args = {
    primary: true,
    label: "Story args",
};

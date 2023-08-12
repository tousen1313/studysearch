import { expect } from '@storybook/jest';
import type { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import Example from './example';

export default {
  component: Example,
  args: {},
};

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Example')).toBeInTheDocument();
  },
};

module.exports = (layer, componentName) => `import { Theme } from '@/app/providers/theme
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator
import type { Meta, StoryObj } from '@storybook/react
import { ${componentName} } from './${componentName}

const meta = {
   title: '${layer}/${componentName}',
   component: ${componentName},
   parameters: {
      layout: '',
   },
   argTypes: {},
   args: {},
   } satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
   args: {},
};

export const SecondaryDark: Story = {
   args: {},
   decorators: [ThemeDecorator(Theme.DARK)]
};`;
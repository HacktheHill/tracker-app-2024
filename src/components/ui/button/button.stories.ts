// import type { Meta, StoryObj } from '@storybook/react'
// import { fn } from '@storybook/test'
// import { Button } from './button'
//
// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: 'Tracker App 2024/ui/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     // backgroundColor: { control: 'color' },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   // args: { onClick: fn() },
// } satisfies Meta<typeof Button>
//
// export default meta
// type Story = StoryObj<typeof meta>
//
// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     // primary: true,
//     // label: 'Button',
//   },
// }
//
// export const Secondary: Story = {
//   args: {
//     // label: 'Button',
//   },
// }
//
// export const Large: Story = {
//   args: {
//     // size: 'large',
//     // label: 'Button',
//   },
// }
//
// export const Small: Story = {
//   args: {
//     // size: 'small',
//     // label: 'Button',
//   },
// }

import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
  title: 'Tracker App 2024/ui/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'destructive',
        'ghost',
        'link',
        'outline',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'icon', 'sm', 'lg'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

// color
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Button',
  },
}
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
}

// size

export const SizeDefault: Story = {
  args: {
    size: 'default',
    children: 'Button',
  },
}
export const SizeIcon: Story = {
  args: {
    size: 'icon',
    children: 'icon',
  },
}
export const SizeLarge: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
}

export const SizeSmall: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
}

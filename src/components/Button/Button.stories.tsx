import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'icon'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'md',
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
    size: 'md',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
    size: 'md',
  },
};

export const Loading: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    loading: true,
  },
};

export const IconSize: Story = {
  args: {
    variant: 'primary',
    size: 'icon',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
};

export const LoadingIcon: Story = {
  args: {
    children: 'Loading',
    variant: 'primary',
    size: 'md',
    loading: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
};

// Variations section
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" icon={
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12,6 12,12 16,14" />
        </svg>
      } />
    </div>
  ),
};


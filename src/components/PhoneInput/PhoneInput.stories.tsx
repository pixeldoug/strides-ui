import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import PhoneInput from './PhoneInput';

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label for the phone input',
    },
    optional: {
      control: { type: 'boolean' },
      description: 'Whether the field is optional',
    },
    defaultCountry: {
      control: { type: 'text' },
      description: 'The default country code',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Controlled component wrapper for interactive stories
const ControlledPhoneInput = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <PhoneInput
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue || '')}
    />
  );
};

export const Default: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Phone',
    optional: true,
    defaultCountry: 'US',
    // No placeholder - will use dynamic placeholder
  },
};

export const WithPlaceholder: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Phone',
    optional: true,
    defaultCountry: 'US',
    placeholder: '(555) 555-5555',
    value: '',
  },
};

export const Filled: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Phone',
    optional: true,
    defaultCountry: 'US',
    placeholder: '(555) 555-5555',
    value: '+15551234567',
  },
};

export const Empty: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Phone',
    optional: true,
    defaultCountry: 'US',
    placeholder: '',
    value: '',
  },
};

export const Disabled: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Phone',
    optional: true,
    defaultCountry: 'US',
    placeholder: '(555) 555-5555',
    disabled: true,
  },
};

export const DisabledFilled: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Phone',
    optional: true,
    defaultCountry: 'US',
    placeholder: '(555) 555-5555',
    value: '+15551234567',
    disabled: true,
  },
};

export const DisabledEmpty: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Phone',
    optional: true,
    defaultCountry: 'US',
    placeholder: '',
    value: '',
    disabled: true,
  },
};

export const Required: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Phone',
    optional: false,
    defaultCountry: 'US',
    placeholder: '(555) 555-5555',
  },
};

export const CustomLabel: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Mobile Number',
    optional: false,
    defaultCountry: 'US',
    placeholder: '(555) 555-5555',
  },
};

export const WithError: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Phone',
    optional: true,
    defaultCountry: 'US',
    placeholder: '(555) 555-5555',
    error: 'Please enter a valid phone number',
  },
};

export const WithHelperText: Story = {
  render: ControlledPhoneInput,
  args: {
    label: 'Phone',
    optional: true,
    defaultCountry: 'US',
    helperText: 'We will use this to contact you about your order',
  },
};

// Story showing different countries with their dynamic placeholders
export const DifferentCountries: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 p-4">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">North America</h3>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">United States</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="US"
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Canada</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="CA"
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Mexico</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="MX"
            onChange={() => {}}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Europe</h3>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">United Kingdom</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="GB"
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Germany</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="DE"
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">France</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="FR"
            onChange={() => {}}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Asia Pacific</h3>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Australia</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="AU"
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Japan</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="JP"
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">India</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="IN"
            onChange={() => {}}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Americas</h3>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Brazil</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="BR"
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Argentina</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="AR"
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Colombia</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="CO"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
};

// Story showing all states side by side
export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-4">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Default States</h3>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Placeholder</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="US"
            placeholder="(555) 555-5555"
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Filled</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="US"
            value="+15551234567"
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Empty</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="US"
            placeholder=""
            onChange={() => {}}
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Disabled States</h3>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Disabled Placeholder</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="US"
            placeholder="(555) 555-5555"
            disabled
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Disabled Filled</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="US"
            value="+15551234567"
            disabled
            onChange={() => {}}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Disabled Empty</h4>
          <PhoneInput
            label="Phone"
            optional={true}
            defaultCountry="US"
            placeholder=""
            disabled
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}; 
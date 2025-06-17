import React from 'react';
import PhoneInputLibrary from 'react-phone-number-input';
import type { Country, FlagProps } from 'react-phone-number-input';
import { CircleFlag } from 'react-circle-flags';
import { CaretDown } from 'phosphor-react';
import 'react-phone-number-input/style.css';

export interface PhoneInputProps {
  /**
   * The label for the phone input
   */
  label?: string;
  /**
   * Whether the field is optional
   */
  optional?: boolean;
  /**
   * The phone number value
   */
  value?: string;
  /**
   * Callback when the phone number changes
   */
  onChange: (value?: string) => void;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Custom class name for the container
   */
  className?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  /**
   * Default country code
   */
  defaultCountry?: Country;
}

// Custom flag component using react-circle-flags
const CustomFlagComponent = ({ 
  country, 
  countryName 
}: FlagProps): JSX.Element => {
  return (
    <CircleFlag
      countryCode={country.toLowerCase()}
      height="16"
      width="16"
      alt={`${countryName} flag`}
      title={countryName}
      style={{ 
        minWidth: '16px',
        minHeight: '16px',
        border: 'none',
        outline: 'none',
        display: 'block'
      }}
    />
  );
};

// We'll use CSS to customize the appearance instead of a custom component

const PhoneInput: React.FC<PhoneInputProps> = ({ 
  label = "Phone", 
  optional = true, 
  value,
  onChange,
  placeholder,
  disabled = false,
  className = "",
  error,
  helperText,
  defaultCountry = "US",
}) => {
  const [currentCountry, setCurrentCountry] = React.useState<Country>(defaultCountry);

  const handleCountryChange = (country?: Country) => {
    if (country) {
      setCurrentCountry(country);
    }
  };

  // Generate dynamic placeholder based on country
  const getDynamicPlaceholder = (country: Country): string => {
    // Country-specific placeholder formats
    const countryPlaceholders: Record<string, string> = {
      // North America
      'US': '(555) 555-5555',
      'CA': '(555) 555-5555',
      'MX': '55 1234 5678',
      
      // Europe
      'GB': '07400 123456',
      'DE': '0151 12345678',
      'FR': '06 12 34 56 78',
      'ES': '612 34 56 78',
      'IT': '312 345 6789',
      'NL': '06 12345678',
      'BE': '0470 12 34 56',
      'CH': '078 123 45 67',
      'AT': '0664 123456',
      'SE': '070-123 45 67',
      'NO': '406 12 345',
      'DK': '20 12 34 56',
      'FI': '040 123 4567',
      'PL': '512 345 678',
      'CZ': '601 123 456',
      'HU': '06 20 123 4567',
      'RO': '0712 345 678',
      'BG': '087 123 4567',
      'HR': '091 234 5678',
      'SI': '031 234 567',
      'SK': '0901 123 456',
      'LT': '8 612 34567',
      'LV': '2 123 4567',
      'EE': '5123 4567',
      'IE': '085 123 4567',
      'PT': '912 345 678',
      'GR': '694 123 4567',
      'CY': '99 123456',
      'MT': '9912 3456',
      'LU': '621 123 456',
      
      // Asia Pacific
      'AU': '0400 000 000',
      'NZ': '021 123 4567',
      'JP': '090-1234-5678',
      'KR': '010-1234-5678',
      'CN': '138 0013 8000',
      'HK': '5123 4567',
      'TW': '0912 345 678',
      'SG': '8123 4567',
      'MY': '012-345 6789',
      'TH': '081 234 5678',
      'VN': '091 234 56 78',
      'PH': '0917 123 4567',
      'ID': '0812-3456-7890',
      'IN': '98765 43210',
      'PK': '0300 1234567',
      'BD': '01712-345678',
      'LK': '071 234 5678',
      'NP': '98-12345678',
      
      // Middle East & Africa
      'AE': '050 123 4567',
      'SA': '050 123 4567',
      'QA': '3312 3456',
      'KW': '500 12345',
      'BH': '3612 3456',
      'OM': '9212 3456',
      'JO': '07 9012 3456',
      'LB': '03 123 456',
      'IL': '050-123-4567',
      'TR': '0532 123 45 67',
      'EG': '0100 123 4567',
      'ZA': '082 123 4567',
      'KE': '0712 123456',
      'NG': '0802 123 4567',
      'GH': '024 123 4567',
      'MA': '0612-345678',
      'TN': '20 123 456',
      'DZ': '0551 23 45 67',
      
      // Americas
      'BR': '(11) 91234-5678',
      'AR': '011 1234-5678',
      'CL': '9 1234 5678',
      'CO': '300 1234567',
      'PE': '912 345 678',
      'VE': '0412-1234567',
      'EC': '099 123 4567',
      'UY': '094 123 456',
      'PY': '0981 123456',
      'BO': '712 34567',
      'CR': '8312 3456',
      'PA': '6123-4567',
      'GT': '5123 4567',
      'HN': '9123-4567',
      'SV': '7123-4567',
      'NI': '8123 4567',
      'BZ': '612-3456',
      'JM': '876-123-4567',
      'TT': '868-123-4567',
      'BB': '246-123-4567',
      'GY': '592-123-4567',
      'SR': '597-123-456',
      'GF': '594-123-456',
    };
    
    return countryPlaceholders[country] || '123 456 7890';
  };

  const currentPlaceholder = placeholder || getDynamicPlaceholder(currentCountry);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Label */}
      <div className="flex items-center gap-1">
        <label className="text-sm font-medium text-foreground">
          {label}
        </label>
        {optional && (
          <span className="text-xs text-muted-foreground">
            (optional)
          </span>
        )}
      </div>
      
      {/* Phone Input Container with Custom Styling */}
      <div className="relative">
        <PhoneInputLibrary
          value={value}
          onChange={onChange}
          defaultCountry={defaultCountry}
          onCountryChange={handleCountryChange}
          disabled={disabled}
          placeholder={currentPlaceholder}
          flagComponent={CustomFlagComponent}
          className="
            flex w-full h-10 border border-border rounded-md bg-background
            focus-within:ring-1 focus-within:ring-ring
            hover:bg-secondary/50
            [&_.PhoneInputCountry]:h-10
            [&_.PhoneInputCountry]:bg-transparent
            [&_.PhoneInputCountry]:border-0
            [&_.PhoneInputCountry]:border-r
            [&_.PhoneInputCountry]:border-r-border
            [&_.PhoneInputCountry]:rounded-l-md
            [&_.PhoneInputCountry]:px-4
            [&_.PhoneInputCountry]:py-2
            [&_.PhoneInputCountry]:flex
            [&_.PhoneInputCountry]:items-center
            [&_.PhoneInputCountry]:gap-2
            [&_.PhoneInputCountry]:min-w-[80px]
            [&_.PhoneInputCountry]:relative
            [&_.PhoneInputCountry]:overflow-hidden
            [&_.PhoneInputCountrySelect]:border-0
            [&_.PhoneInputCountrySelect]:bg-transparent
            [&_.PhoneInputCountrySelect]:text-transparent
            [&_.PhoneInputCountrySelect]:text-sm
            [&_.PhoneInputCountrySelect]:font-medium
            [&_.PhoneInputCountrySelect]:focus:outline-none
            [&_.PhoneInputCountrySelect]:appearance-none
            [&_.PhoneInputCountrySelect]:cursor-pointer
            [&_.PhoneInputCountrySelect]:w-full
            [&_.PhoneInputCountrySelect]:h-full
            [&_.PhoneInputCountrySelect]:absolute
            [&_.PhoneInputCountrySelect]:inset-0
            [&_.PhoneInputCountrySelect]:z-20
            [&_.PhoneInputCountrySelect::-webkit-appearance]:none
            [&_.PhoneInputCountrySelect::-moz-appearance]:none
            [&_.PhoneInputCountryIcon]:w-4
            [&_.PhoneInputCountryIcon]:h-4
            [&_.PhoneInputCountryIcon]:border-none
            [&_.PhoneInputCountryIcon]:outline-none
            [&_.PhoneInputCountryIcon]:rounded-full
            [&_.PhoneInputCountryIcon_img]:border-none
            [&_.PhoneInputCountryIcon_img]:outline-none
            [&_.PhoneInputCountryIcon_img]:rounded-full
            [&_.PhoneInputInput]:flex-1
            [&_.PhoneInputInput]:h-10
            [&_.PhoneInputInput]:px-4
            [&_.PhoneInputInput]:py-2
            [&_.PhoneInputInput]:bg-transparent
            [&_.PhoneInputInput]:border-0
            [&_.PhoneInputInput]:rounded-r-md
            [&_.PhoneInputInput]:text-sm
            [&_.PhoneInputInput]:text-foreground
            [&_.PhoneInputInput]:placeholder:text-muted-foreground
            [&_.PhoneInputInput]:focus:outline-none
            [&_.PhoneInputInput]:focus:ring-0
            [&_.PhoneInputInput]:disabled:opacity-50
            [&_.PhoneInputInput]:disabled:cursor-not-allowed
          "
        />
        
        {/* Visual Layer - Country Code and Caret */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-10">
          <div className="w-4 h-4"></div> {/* Spacer for flag */}
          <span className="text-sm font-medium text-foreground">
            {currentCountry}
          </span>
          <CaretDown size={16} className="text-muted-foreground" />
        </div>
      </div>

      {/* Helper Text or Error */}
      {(error || helperText) && (
        <div className={`text-xs ${error ? 'text-destructive' : 'text-muted-foreground'}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};

PhoneInput.displayName = "PhoneInput";

export default PhoneInput; 
interface IconProps {
  size?: number
  color?: string
  className?: string
}

export function SearchIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8" />
      <path d="M16.5 16.5L21 21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function RefreshIcon({ size = 22, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" className={className}>
      <path
        d="M19.25 11a8.25 8.25 0 1 1-2.015-5.385"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5l3.25-.002L17.25 2"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PlusCircleIcon({ size = 22, color = '#fff', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" className={className}>
      <circle cx="11" cy="11" r="9" stroke={color} strokeWidth="1.8" />
      <path d="M11 7v8M7 11h8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function DotsIcon({ size = 32, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="13" stroke={color} strokeWidth="1.8" />
      <circle cx="10" cy="16" r="1.5" fill={color} />
      <circle cx="16" cy="16" r="1.5" fill={color} />
      <circle cx="22" cy="16" r="1.5" fill={color} />
    </svg>
  )
}

export function CaretLeftIcon({ size = 20, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M12.5 5L7.5 10L12.5 15"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CaretRightIcon({ size = 20, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LockIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke={color} strokeWidth="1.8" />
      <path d="M8 11V7a4 4 0 1 1 8 0v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function EyeOffIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.73 10.73a3 3 0 0 0 4.24 4.24"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="1" y1="1" x2="23" y2="23" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function EyeIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8" />
    </svg>
  )
}

export function UserIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8" />
      <path
        d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SortAscIcon({ size = 14, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M7 2L11 8H3L7 2Z" fill={color} />
    </svg>
  )
}

export function SortDescIcon({ size = 14, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M7 12L3 6H11L7 12Z" fill={color} />
    </svg>
  )
}

export function CheckboxUncheckedIcon({
  size = 22,
  className,
}: Pick<IconProps, 'size' | 'className'>) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" className={className}>
      <rect
        x="0.9"
        y="0.9"
        width="20.2"
        height="20.2"
        rx="3.1"
        stroke="#b2b3b9"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function CheckboxCheckedIcon({
  size = 22,
  className,
}: Pick<IconProps, 'size' | 'className'>) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" className={className}>
      <rect width="22" height="22" rx="4" fill="#242edb" />
      <path
        d="M5 11L9.5 15.5L17 7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LogoIcon({ className }: Pick<IconProps, 'className'>) {
  return (
    <svg
      width="35"
      height="34"
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.62002 22.5692C4.92543 22.5692 5.17302 20.0758 5.17302 17C5.17302 13.9242 4.92543 11.4308 4.62002 11.4308C4.3146 11.4308 4.06702 13.9242 4.06702 17C4.06702 20.0758 4.3146 22.5692 4.62002 22.5692Z"
        fill="black"
      />
      <path
        d="M6.09 23.188C6.43021 23.188 6.706 20.4176 6.706 17C6.706 13.5825 6.43021 10.812 6.09 10.812C5.74979 10.812 5.474 13.5825 5.474 17C5.474 20.4176 5.74979 23.188 6.09 23.188Z"
        fill="black"
      />
      <path
        d="M7.72801 23.8816C8.103 23.8816 8.40701 20.8006 8.40701 17C8.40701 13.1994 8.103 10.1184 7.72801 10.1184C7.35302 10.1184 7.04901 13.1994 7.04901 17C7.04901 20.8006 7.35302 23.8816 7.72801 23.8816Z"
        fill="black"
      />
      <path
        d="M9.54097 24.6432C9.95852 24.6432 10.297 21.2212 10.297 17C10.297 12.7788 9.95852 9.35681 9.54097 9.35681C9.12342 9.35681 8.78497 12.7788 8.78497 17C8.78497 21.2212 9.12342 24.6432 9.54097 24.6432Z"
        fill="black"
      />
      <path
        d="M11.557 25.4932C12.0209 25.4932 12.397 21.6906 12.397 17C12.397 12.3094 12.0209 8.50681 11.557 8.50681C11.0931 8.50681 10.717 12.3094 10.717 17C10.717 21.6906 11.0931 25.4932 11.557 25.4932Z"
        fill="black"
      />
      <path
        d="M13.804 26.4384C14.3181 26.4384 14.735 22.2127 14.735 17C14.735 11.7873 14.3181 7.56158 13.804 7.56158C13.2898 7.56158 12.873 11.7873 12.873 17C12.873 22.2127 13.2898 26.4384 13.804 26.4384Z"
        fill="black"
      />
      <path
        d="M16.296 27.4856C16.8682 27.4856 17.332 22.791 17.332 17C17.332 11.209 16.8682 6.5144 16.296 6.5144C15.7238 6.5144 15.26 11.209 15.26 17C15.26 22.791 15.7238 27.4856 16.296 27.4856Z"
        fill="black"
      />
      <path
        d="M19.061 28.6484C19.6989 28.6484 20.216 23.4332 20.216 17C20.216 10.5668 19.6989 5.35159 19.061 5.35159C18.4231 5.35159 17.906 10.5668 17.906 17C17.906 23.4332 18.4231 28.6484 19.061 28.6484Z"
        fill="black"
      />
      <path
        d="M22.134 29.9472C22.8415 29.9472 23.415 24.1505 23.415 17C23.415 9.84946 22.8415 4.0528 22.134 4.0528C21.4265 4.0528 20.853 9.84946 20.853 17C20.853 24.1505 21.4265 29.9472 22.134 29.9472Z"
        fill="black"
      />
      <path
        d="M25.55 31.382C26.3348 31.382 26.971 24.943 26.971 17C26.971 9.05707 26.3348 2.61801 25.55 2.61801C24.7653 2.61801 24.129 9.05707 24.129 17C24.129 24.943 24.7653 31.382 25.55 31.382Z"
        fill="black"
      />
      <path
        d="M29.344 32.98C30.2178 32.98 30.926 25.8255 30.926 17C30.926 8.17447 30.2178 1.01999 29.344 1.01999C28.4703 1.01999 27.762 8.17447 27.762 17C27.762 25.8255 28.4703 32.98 29.344 32.98Z"
        fill="black"
      />
    </svg>
  )
}

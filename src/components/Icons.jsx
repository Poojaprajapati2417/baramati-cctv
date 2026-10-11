function Svg({ className, children }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconCamera({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <rect x="2.5" y="7" width="12" height="8" rx="2" />
      <circle cx="6.5" cy="11" r="1.7" />
      <path d="M14.5 9.5h2.2a2 2 0 0 1 2 2V15" />
      <path d="M16.8 15v2.2" />
      <path d="M14 17.2h5.5" />
    </Svg>
  );
}

export function IconLaptop({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <rect x="4" y="4.5" width="16" height="11" rx="1.6" />
      <path d="M3 18.5h18" />
      <path d="M8 18.5v-1.2h8v1.2" />
    </Svg>
  );
}

export function IconDesktop({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="13" height="10" rx="1.5" />
      <path d="M8 18h6" />
      <path d="M9.5 14v4" />
      <rect x="17.5" y="7" width="3.5" height="8" rx="0.8" />
    </Svg>
  );
}

export function IconPrinter({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <path d="M7 8V4.5h10V8" />
      <rect x="4" y="8" width="16" height="7" rx="1.5" />
      <path d="M7 15h10v4.5H7V15z" />
      <path d="M8 18h8" />
    </Svg>
  );
}

export function IconWrench({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <path d="M14.5 6.5a3.5 3.5 0 0 0-4.8 4.1L4.5 15.8a1.6 1.6 0 0 0 2.2 2.2l5.2-5.2a3.5 3.5 0 0 0 4.1-4.8L13.8 10l-1.3-1.3 2-2.2z" />
    </Svg>
  );
}

export function IconTools({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <path d="M14.2 5.2a3 3 0 0 0-3.6 3.6L5 14.4l1.6 1.6 5.6-5.6a3 3 0 0 0 3.6-3.6L13.4 9.2 11.8 7.6l2.4-2.4z" />
      <path d="M14 14l5 5" />
      <path d="M16.5 16.5l2-2" />
    </Svg>
  );
}

export function IconBox({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <path d="M3.5 8 12 4l8.5 4L12 12 3.5 8z" />
      <path d="M3.5 8v8L12 20l8.5-4V8" />
      <path d="M12 12v8" />
    </Svg>
  );
}

export function IconPhone({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <path d="M8 4.5h2.2l1.2 3-1.6 1a11 11 0 0 0 5 5l1-1.6 3 1.2V15a2 2 0 0 1-2.2 2A13.5 13.5 0 0 1 6 7.7 2 2 0 0 1 8 4.5z" />
    </Svg>
  );
}

export function IconPin({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
      <circle cx="12" cy="11" r="2" />
    </Svg>
  );
}

export function IconWhatsApp({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm0 17.95h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.2.84.86-3.12-.2-.32a8.15 8.15 0 0 1-1.26-4.36c0-4.52 3.7-8.2 8.24-8.2 2.2 0 4.27.85 5.82 2.4a8.14 8.14 0 0 1 2.41 5.8c0 4.53-3.7 8.29-8.18 8.29zm4.5-6.14c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28z"
      />
    </svg>
  );
}

export function IconStar({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3.2 14.6 8.7 20.6 9.5 16.3 13.6 17.4 19.6 12 16.7 6.6 19.6 7.7 13.6 3.4 9.5 9.4 8.7 12 3.2z"
      />
    </svg>
  );
}

export function IconMenu({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Svg>
  );
}

export function IconClose({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </Svg>
  );
}

export function IconPlay({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path fill="currentColor" d="M10 8.8v6.4l5.2-3.2L10 8.8z" />
    </svg>
  );
}

export function IconUser({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 19.2a6.5 6.5 0 0 1 13 0" />
    </Svg>
  );
}

export function IconQuote({ className = "h-6 w-6" }) {
  return (
    <Svg className={className}>
      <path d="M8 17h3.2l1.2-4.2V7H6.5v5.2H9L8 17z" />
      <path d="M15.2 17H18.4l1.2-4.2V7h-5.9v5.2h2.5L15.2 17z" />
    </Svg>
  );
}

const icons = {
  camera: IconCamera,
  laptop: IconLaptop,
  desktop: IconDesktop,
  printer: IconPrinter,
  wrench: IconWrench,
  tools: IconTools,
  box: IconBox,
  phone: IconPhone,
  user: IconUser,
};

export function IconByName({ name, className }) {
  const Icon = icons[name] || IconCamera;
  return <Icon className={className} />;
}

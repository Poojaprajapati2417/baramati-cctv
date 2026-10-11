const variants = {
  primary: "bg-brand-red-dark text-white hover:bg-brand-red-deep",
  secondary: "bg-brand-black text-white hover:bg-brand-charcoal",
  outline:
    "border-2 border-brand-red-dark bg-white text-brand-red-dark hover:bg-brand-red-dark hover:text-white",
  outlineLight:
    "border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-black",
  white: "bg-white text-brand-black hover:bg-brand-soft",
};

const sizes = {
  md: "min-h-11 px-5 py-2.5 text-base",
  sm: "min-h-10 px-4 py-2 text-sm",
};

export function ctaClass(variant = "primary", size = "md", className = "") {
  return [
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-center font-semibold transition duration-200",
    "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-brand-black",
    sizes[size],
    variants[variant],
    className,
  ].join(" ");
}

export default function CTAButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}) {
  return (
    <button type={type} onClick={onClick} className={ctaClass(variant, size, className)}>
      {children}
    </button>
  );
}

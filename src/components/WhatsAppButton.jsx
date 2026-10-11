import { handleWhatsAppClick } from "../utils/contactActions";
import { useNotice } from "./ActionNotice";
import CTAButton from "./CTAButton";
import { IconWhatsApp } from "./Icons";

// Visual WhatsApp button. The real redirect is still a TODO in contactActions.js.
export default function WhatsAppButton({
  children = "WhatsApp Us",
  message,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const { notify } = useNotice();

  function onClick() {
    handleWhatsAppClick(message);
    notify("WhatsApp is not connected yet. The message is ready in contactActions.js.");
  }

  return (
    <CTAButton variant={variant} size={size} className={className} onClick={onClick}>
      <IconWhatsApp className="h-5 w-5 shrink-0" />
      {children}
    </CTAButton>
  );
}

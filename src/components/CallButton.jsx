import { handleCallClick } from "../utils/contactActions";
import { useNotice } from "./ActionNotice";
import CTAButton from "./CTAButton";
import { IconPhone } from "./Icons";

// Visual call button. The real tel: link is still a TODO in contactActions.js.
export default function CallButton({
  children = "Call Now",
  variant = "secondary",
  size = "md",
  className = "",
}) {
  const { notify } = useNotice();

  function onClick() {
    handleCallClick();
    notify("Calling is not connected yet. Add it in contactActions.js.");
  }

  return (
    <CTAButton variant={variant} size={size} className={className} onClick={onClick}>
      <IconPhone className="h-5 w-5 shrink-0" />
      {children}
    </CTAButton>
  );
}

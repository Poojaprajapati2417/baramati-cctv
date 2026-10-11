import { handleDirectionsClick } from "../utils/contactActions";
import { useNotice } from "./ActionNotice";
import CTAButton from "./CTAButton";
import { IconPin } from "./Icons";

export default function DirectionsButton({
  children = "Get Directions",
  variant = "outline",
  size = "md",
  className = "",
}) {
  const { notify } = useNotice();

  function onClick() {
    handleDirectionsClick();
    notify("Directions are not connected yet. Add the shop address first.");
  }

  return (
    <CTAButton variant={variant} size={size} className={className} onClick={onClick}>
      <IconPin className="h-5 w-5 shrink-0" />
      {children}
    </CTAButton>
  );
}

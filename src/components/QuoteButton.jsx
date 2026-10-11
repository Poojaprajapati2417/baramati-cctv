import { Link, useLocation } from "react-router-dom";
import { ctaClass } from "./CTAButton";

// Opens the enquiry form. Sending the enquiry is a separate TODO in contactActions.js.
export default function QuoteButton({
  children = "Get a Quote",
  variant = "outline",
  size = "md",
  className = "",
}) {
  const location = useLocation();

  function onClick(event) {
    if (location.pathname === "/contact") {
      event.preventDefault();
      document.getElementById("enquiry")?.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }

  return (
    <Link
      to="/contact#enquiry"
      onClick={onClick}
      className={ctaClass(variant, size, className)}
    >
      {children}
    </Link>
  );
}

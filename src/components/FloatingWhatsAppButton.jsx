import { handleWhatsAppClick } from "../utils/contactActions";
import { useNotice } from "./ActionNotice";
import { IconWhatsApp } from "./Icons";

export default function FloatingWhatsAppButton() {
  const { notify } = useNotice();

  function onClick() {
    handleWhatsAppClick();
    notify("WhatsApp is not connected yet. The message is ready in contactActions.js.");
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="WhatsApp us"
      className="fixed right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red-dark text-white shadow-[0_10px_30px_rgba(190,4,16,0.35)] transition duration-200 hover:bg-brand-red-deep focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-brand-black"
    >
      <IconWhatsApp className="h-7 w-7" />
    </button>
  );
}

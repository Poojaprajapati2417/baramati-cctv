import { useEffect } from "react";
import { IconClose } from "./Icons";

export default function Lightbox({ image, alt, title, onClose }) {
  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title || alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-black"
      >
        <IconClose />
      </button>
      <img
        src={image}
        alt={alt}
        className="max-h-[85vh] max-w-full rounded-xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}

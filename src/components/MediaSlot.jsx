import { IconByName } from "./Icons";

const washes = [
  "bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.55),transparent_42%),linear-gradient(160deg,#1c1c1c,#111111)]",
  "bg-[radial-gradient(circle_at_70%_80%,rgba(227,6,19,0.4),transparent_40%),linear-gradient(180deg,#2a2a2a,#111111)]",
  "bg-[radial-gradient(circle_at_50%_0%,rgba(227,6,19,0.45),transparent_46%),linear-gradient(200deg,#111111,#3a1014)]",
];

// Shows a real image when src is set. Otherwise shows a labeled frame you can replace later.
export default function MediaSlot({
  src,
  alt,
  label,
  kind = "camera",
  tone = 0,
  aspect = "aspect-[4/3]",
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${aspect} h-full w-full object-cover`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 px-4 text-center text-white ${washes[tone % washes.length]}`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
        <IconByName name={kind} className="h-6 w-6" />
      </span>
      <span className="font-display text-base font-semibold">{label}</span>
      <span className="text-xs text-white/70">Photo coming soon</span>
    </div>
  );
}

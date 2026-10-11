export default function SectionHeading({
  id,
  eyebrow,
  title,
  text,
  align = "left",
  tone = "dark",
}) {
  const isLight = tone === "light";
  const alignment = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold tracking-[0.16em] uppercase ${
            isLight ? "text-brand-red" : "text-brand-red-dark"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`mt-2 text-3xl font-bold tracking-tight md:text-4xl ${
          isLight ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-3 text-lg ${isLight ? "text-white/80" : "text-brand-muted"}`}>{text}</p>
      ) : null}
    </div>
  );
}

import MediaSlot from "./MediaSlot";

export default function BeforeAfter({ item }) {
  return (
    <article className="rounded-2xl border border-brand-line bg-white p-4 shadow-sm md:p-6">
      <h3 className="text-xl font-bold text-brand-black">{item.title}</h3>
      {item.note ? <p className="mt-1 text-sm text-brand-muted">{item.note}</p> : null}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <figure>
          <figcaption className="mb-2 text-xs font-bold tracking-[0.14em] text-brand-red-dark uppercase">
            Before
          </figcaption>
          <div className="overflow-hidden rounded-xl">
            <MediaSlot src={item.before} alt={item.beforeAlt} label="Before" kind="camera" tone={1} />
          </div>
        </figure>
        <figure>
          <figcaption className="mb-2 text-xs font-bold tracking-[0.14em] text-brand-red-dark uppercase">
            After
          </figcaption>
          <div className="overflow-hidden rounded-xl">
            <MediaSlot src={item.after} alt={item.afterAlt} label="After" kind="camera" tone={0} />
          </div>
        </figure>
      </div>
    </article>
  );
}

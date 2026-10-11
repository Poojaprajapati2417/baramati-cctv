import { IconByName } from "./Icons";
import WhatsAppButton from "./WhatsAppButton";

export default function ProductCategoryCard({ item, light = false }) {
  const message = `Hello, I would like to enquire about ${item.title}.`;

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ${
        light
          ? "border-white/15 bg-white/5 text-white hover:border-brand-red"
          : "border-brand-line bg-white hover:border-brand-red"
      }`}
    >
      <div className="relative h-40 overflow-hidden bg-brand-black">
        {item.image ? (
          <img src={item.image} alt={item.alt || item.title} className="h-full w-full object-cover" />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(227,6,19,0.5),transparent_55%)] text-white"
          >
            <IconByName name={item.icon} className="h-12 w-12" />
          </div>
        )}
        {item.badge === "New" ? (
          <span className="absolute top-3 left-3 rounded-full bg-brand-black px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
            New
          </span>
        ) : null}
        {item.badge === "Refurbished" ? (
          <span className="absolute top-3 left-3 rounded-full bg-brand-red-dark px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
            Refurbished
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className={`text-xl font-bold ${light ? "text-white" : "text-brand-black"}`}>
          {item.title}
        </h3>
        <p className={`mt-2 flex-1 ${light ? "text-white/75" : "text-brand-muted"}`}>
          {item.description}
        </p>
        <WhatsAppButton
          message={message}
          variant={light ? "white" : "outline"}
          className="mt-5 w-full"
        >
          Enquire
        </WhatsAppButton>
      </div>
    </article>
  );
}

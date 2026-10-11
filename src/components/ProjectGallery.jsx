import { useState } from "react";
import Lightbox from "./Lightbox";
import MediaSlot from "./MediaSlot";

export default function ProjectGallery({ items }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <figure className="h-full overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm">
              {item.image ? (
                <button
                  type="button"
                  className="block w-full"
                  onClick={() => setActive(item)}
                  aria-label={`Open larger view: ${item.title}`}
                >
                  <MediaSlot src={item.image} alt={item.alt} />
                </button>
              ) : (
                <MediaSlot
                  src={null}
                  alt={item.alt}
                  label={item.title}
                  kind={item.kind}
                  tone={index}
                />
              )}
              <figcaption className="p-4">
                <p className="text-xs font-bold tracking-[0.14em] text-brand-red-dark uppercase">
                  {item.category}
                </p>
                <p className="mt-1 text-lg font-bold text-brand-black">{item.title}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {active?.image ? (
        <Lightbox
          image={active.image}
          alt={active.alt}
          title={active.title}
          onClose={() => setActive(null)}
        />
      ) : null}
    </>
  );
}

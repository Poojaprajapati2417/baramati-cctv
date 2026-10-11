import { useState } from "react";
import Lightbox from "./Lightbox";
import MediaSlot from "./MediaSlot";

export default function CustomerGallery({ items }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.id} className="overflow-hidden rounded-2xl border border-brand-line bg-white">
            {item.image ? (
              <button type="button" className="block w-full" onClick={() => setActive(item)}>
                <MediaSlot src={item.image} alt={item.alt} />
              </button>
            ) : (
              <MediaSlot src={null} alt={item.alt} label={item.label} kind={item.kind} tone={index} />
            )}
            <p className="px-3 py-3 text-sm font-semibold text-brand-black">{item.label}</p>
          </li>
        ))}
      </ul>
      {active?.image ? (
        <Lightbox image={active.image} alt={active.alt} title={active.label} onClose={() => setActive(null)} />
      ) : null}
    </>
  );
}

import { IconQuote, IconStar, IconUser } from "./Icons";
import MediaSlot from "./MediaSlot";

function Stars({ value }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <IconStar
          key={star}
          className={`h-4 w-4 ${star <= value ? "text-brand-red-dark" : "text-brand-line"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({ item }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6 shadow-sm">
      <IconQuote className="h-8 w-8 text-brand-red" />
      <p className="mt-4 flex-1 text-lg text-brand-ink">{item.quote}</p>
      <div className="mt-5">
        {item.rating ? (
          <Stars value={item.rating} />
        ) : (
          <p className="text-sm text-brand-muted">Star rating not added yet</p>
        )}
      </div>
      <div className="mt-4 flex items-center gap-3 border-t border-brand-line pt-4">
        {item.photo ? (
          <img
            src={item.photo}
            alt={item.photoAlt}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-brand-red-dark">
            <IconUser className="h-6 w-6" />
          </span>
        )}
        <div>
          <p className="font-bold text-brand-black">{item.name}</p>
          <p className="text-sm text-brand-muted">
            {item.business}
            {item.location ? ` · ${item.location}` : ""}
          </p>
        </div>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl">
        <MediaSlot
          src={item.projectPhoto}
          alt={item.projectAlt}
          label="Project photo"
          kind="camera"
          tone={0}
          aspect="aspect-[16/9]"
        />
      </div>
    </article>
  );
}

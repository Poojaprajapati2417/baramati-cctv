import { IconPlay } from "./Icons";

export default function VideoCard({ title, src, note }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm">
      {src ? (
        <video
          className="aspect-video w-full bg-brand-black"
          controls
          playsInline
          preload="metadata"
          aria-label={title}
        >
          <source src={src} />
          Your browser cannot play this video.
        </video>
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_50%_40%,rgba(227,6,19,0.45),transparent_50%),linear-gradient(#1c1c1c,#111111)] px-4 text-center text-white">
          <IconPlay className="h-12 w-12" />
          <p className="font-display text-lg font-semibold">Video coming soon</p>
        </div>
      )}
      <figcaption className="p-4">
        <h3 className="text-lg font-bold text-brand-black">{title}</h3>
        {note ? <p className="mt-1 text-sm text-brand-muted">{note}</p> : null}
      </figcaption>
    </figure>
  );
}

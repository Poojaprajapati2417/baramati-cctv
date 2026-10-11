import { Link } from "react-router-dom";
import { IconByName } from "./Icons";

export default function ServiceCard({ icon, title, text, to }) {
  const className =
    "group flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-red hover:shadow-md focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-brand-red-dark";

  const body = (
    <>
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-brand-red-dark">
        <IconByName name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-xl font-bold text-brand-black">{title}</h3>
      <p className="mt-2 text-brand-muted">{text}</p>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {body}
      </Link>
    );
  }

  return <article className={className}>{body}</article>;
}

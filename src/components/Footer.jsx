import { Link } from "react-router-dom";
import { business, navLinks, productLinks } from "../data/business";
import CallButton from "./CallButton";
import Container from "./Container";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    ["Facebook", business.social.facebook],
    ["Instagram", business.social.instagram],
    ["YouTube", business.social.youtube],
  ].filter(([, url]) => url);

  return (
    <footer className="border-t-4 border-brand-red bg-brand-black text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white p-0.5">
              <img
                src="/logo.jpeg"
                alt=""
                width="48"
                height="48"
                className="h-12 w-12 rounded-full object-cover"
              />
            </span>
            <p className="text-lg leading-tight font-extrabold">
              {business.shortName}
              <span className="block text-xs font-semibold tracking-[0.14em] text-brand-red uppercase">
                Technology
              </span>
            </p>
          </div>
          <p className="mt-4 text-sm text-white/75">
            CCTV and security products, laptops, desktops, printers, installation, repair and wholesale supply.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.14em] text-brand-red uppercase">Pages</h2>
          <ul className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.14em] text-brand-red uppercase">Products</h2>
          <ul className="mt-4 grid gap-2">
            {productLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.14em] text-brand-red uppercase">Contact</h2>
          <ul className="mt-4 grid gap-2 text-sm text-white/80">
            <li>{business.address}</li>
            <li>{business.phoneDisplay}</li>
            <li>{business.whatsappDisplay}</li>
            <li>{business.emailDisplay}</li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <WhatsAppButton size="sm" className="w-full" />
            <CallButton variant="outlineLight" size="sm" className="w-full" />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-4 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}
          </p>
          {socials.length > 0 ? (
            <ul className="flex gap-4">
              {socials.map(([label, url]) => (
                <li key={label}>
                  <a href={url} className="hover:text-white" target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Social media links have not been added yet.</p>
          )}
        </Container>
      </div>
    </footer>
  );
}

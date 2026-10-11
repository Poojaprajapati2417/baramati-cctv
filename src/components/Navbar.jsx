import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { business, navLinks } from "../data/business";
import { IconClose, IconMenu } from "./Icons";
import WhatsAppButton from "./WhatsAppButton";
import Container from "./Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-brand-black text-sm text-white sm:block">
        <Container className="flex items-center justify-between py-2">
          <p>CCTV and security · Laptops and computers · Printers</p>
          <p>Retail and wholesale</p>
        </Container>
      </div>
      <div className="border-b border-brand-line bg-white">
        <Container className="flex min-h-16 items-center justify-between gap-3 py-2">
          <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/logo.jpeg"
            alt=""
            width="48"
            height="48"
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
            <span className="text-[15px] leading-tight font-extrabold text-brand-black sm:text-lg">
              {business.shortName}
              <span className="block text-[11px] font-semibold tracking-[0.14em] text-brand-red-dark uppercase">
                Technology
              </span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-semibold ${
                    isActive
                      ? "bg-brand-tint text-brand-red-dark"
                      : "text-brand-ink hover:text-brand-red-dark"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppButton size="sm" className="px-3">
              <span className="sr-only sm:not-sr-only">WhatsApp</span>
            </WhatsAppButton>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-black lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </Container>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-0 z-40 overflow-y-auto bg-white px-4 pt-24 pb-8 sm:pt-32 lg:hidden"
        >
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-lg font-semibold ${
                      isActive ? "bg-brand-tint text-brand-red-dark" : "text-brand-black"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

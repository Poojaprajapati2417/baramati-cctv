import { business } from "../data/business";
import { heroHighlights } from "../data/home";
import CallButton from "./CallButton";
import Container from "./Container";
import QuoteButton from "./QuoteButton";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(227,6,19,0.38),transparent_68%)]"
      />
      <Container className="relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-brand-red uppercase">
            {business.tagline}
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Cameras, computers and printers for home, shop and office
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            {business.name} sells CCTV and security products, laptops, desktop computers and printers.
            Buy at retail or ask about wholesale, installation, repair and technical help.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton className="w-full sm:w-auto" />
            <CallButton variant="outlineLight" className="w-full sm:w-auto" />
            <QuoteButton variant="white" className="w-full sm:w-auto" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <img
              src="/logo.jpeg"
              alt="Baramati CCTV Technology logo"
              width="168"
              height="168"
              className="h-42 w-42 rounded-full object-cover"
            />
          </div>
          <ul className="mt-6 grid w-full gap-2 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

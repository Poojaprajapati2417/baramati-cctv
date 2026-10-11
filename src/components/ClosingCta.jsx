import CallButton from "./CallButton";
import Container from "./Container";
import QuoteButton from "./QuoteButton";
import WhatsAppButton from "./WhatsAppButton";

export default function ClosingCta() {
  return (
    <section className="bg-brand-black text-white" aria-labelledby="closing-cta-heading">
      <Container className="py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand-red uppercase">
            Talk to the shop
          </p>
          <h2 id="closing-cta-heading" className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Looking for CCTV, laptops, computers or printers?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Tell us what you need. Ask about a single product, a repair, an installation or a bulk order.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton className="w-full sm:w-auto" />
            <CallButton variant="outlineLight" className="w-full sm:w-auto" />
            <QuoteButton variant="white" className="w-full sm:w-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}

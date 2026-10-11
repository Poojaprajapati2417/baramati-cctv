import CallButton from "../components/CallButton";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";
import DirectionsButton from "../components/DirectionsButton";
import PageHeader from "../components/PageHeader";
import QuoteButton from "../components/QuoteButton";
import WhatsAppButton from "../components/WhatsAppButton";
import { business } from "../data/business";
import usePageMeta from "../utils/usePageMeta";

function MapPanel() {
  if (business.mapEmbedUrl) {
    return (
      <iframe
        title="Map of the Baramati CCTV Technology shop"
        src={business.mapEmbedUrl}
        className="h-80 w-full rounded-2xl border border-brand-line"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label="Map coming soon. The shop address has not been added yet."
      className="flex h-80 w-full flex-col items-center justify-center rounded-2xl border border-brand-line bg-[#f3f3f3] bg-[linear-gradient(#e6e6e6_1px,transparent_1px),linear-gradient(90deg,#e6e6e6_1px,transparent_1px)] bg-[size:28px_28px] px-6 text-center"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red-dark text-2xl font-bold text-white">
        •
      </span>
      <p className="mt-3 text-lg font-bold text-brand-black">Map coming soon</p>
      <p className="mt-1 max-w-md text-sm text-brand-muted">
        The shop address has not been added yet. Paste a Google Maps embed URL into
        src/data/business.js when you have it.
      </p>
    </div>
  );
}

export default function Contact() {
  usePageMeta(
    "Contact Baramati CCTV Technology | CCTV, Laptop and Printer Enquiries",
    "Contact Baramati CCTV Technology about CCTV, laptops, desktops, printers, wholesale, installation and repair.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to Baramati CCTV Technology"
        text="Ask about CCTV, a laptop, a desktop, a printer, wholesale, installation or a repair."
      />

      <section className="py-16 md:py-20" aria-labelledby="contact-info-heading">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 id="contact-info-heading" className="text-3xl font-bold text-brand-black">
              Contact information
            </h2>
            <p className="mt-3 text-brand-muted">
              The buttons are ready. Phone and WhatsApp still need to be connected in
              src/utils/contactActions.js, and the numbers need to be added in src/data/business.js.
            </p>

            <address className="mt-6 grid gap-4 not-italic">
              <div className="rounded-2xl border border-brand-line p-4">
                <p className="text-xs font-bold tracking-[0.14em] text-brand-red-dark uppercase">
                  Address
                </p>
                <p className="mt-1 font-semibold text-brand-black">{business.address}</p>
              </div>
              <div className="rounded-2xl border border-brand-line p-4">
                <p className="text-xs font-bold tracking-[0.14em] text-brand-red-dark uppercase">
                  Phone
                </p>
                <p className="mt-1 font-semibold text-brand-black">{business.phoneDisplay}</p>
              </div>
              <div className="rounded-2xl border border-brand-line p-4">
                <p className="text-xs font-bold tracking-[0.14em] text-brand-red-dark uppercase">
                  WhatsApp
                </p>
                <p className="mt-1 font-semibold text-brand-black">{business.whatsappDisplay}</p>
              </div>
              <div className="rounded-2xl border border-brand-line p-4">
                <p className="text-xs font-bold tracking-[0.14em] text-brand-red-dark uppercase">
                  Email
                </p>
                {business.email ? (
                  <a className="mt-1 inline-block font-semibold text-brand-black" href={`mailto:${business.email}`}>
                    {business.emailDisplay}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold text-brand-black">{business.emailDisplay}</p>
                )}
              </div>
              <div className="rounded-2xl border border-brand-line p-4">
                <p className="text-xs font-bold tracking-[0.14em] text-brand-red-dark uppercase">
                  Business hours
                </p>
                <ul className="mt-2 grid gap-1">
                  {business.hours.map((row) => (
                    <li key={row.days} className="flex justify-between gap-4 text-sm">
                      <span className="font-semibold text-brand-black">{row.days}</span>
                      <span className="text-brand-muted">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </address>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton className="w-full sm:w-auto" />
              <CallButton className="w-full sm:w-auto" />
              <QuoteButton className="w-full sm:w-auto" />
              <DirectionsButton className="w-full sm:w-auto" />
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>

      <section className="bg-brand-soft py-16 md:py-20" aria-labelledby="map-heading">
        <Container>
          <h2 id="map-heading" className="text-3xl font-bold text-brand-black">
            Find the shop
          </h2>
          <p className="mt-3 max-w-2xl text-brand-muted">
            A map will appear here after the real address is added. No street has been invented.
          </p>
          <div className="mt-8">
            <MapPanel />
          </div>
        </Container>
      </section>
    </>
  );
}

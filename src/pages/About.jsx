import ClosingCta from "../components/ClosingCta";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import { business } from "../data/business";
import usePageMeta from "../utils/usePageMeta";

const offers = [
  {
    title: "CCTV and security",
    text: "Cameras, DVR and NVR recorders, HD, IP and Wi-Fi cameras, accessories, installation, repair, maintenance and complete setups.",
  },
  {
    title: "Computers and laptops",
    text: "New laptops, refurbished laptops, desktops, CPUs, computer accessories, upgrades and repairs.",
  },
  {
    title: "Printers",
    text: "New printers, refurbished printers, printer accessories, and printer repair and maintenance.",
  },
  {
    title: "Retail and wholesale",
    text: "Single pieces from the shop, plus bulk orders and dealer or reseller enquiries.",
  },
  {
    title: "Installation and technical support",
    text: "Fitting, maintenance, repair and other technical help for the CCTV, computer and printer products we deal in.",
  },
];

export default function About() {
  usePageMeta(
    "About Us | Baramati CCTV Technology",
    "Baramati CCTV Technology is a local shop for CCTV and security products, computers, laptops, printers, installation and technical services.",
  );

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={business.name}
        text="A local shop for CCTV and security products, computers, laptops, printers and the services that go with them."
      />

      <section className="py-16 md:py-20" aria-labelledby="about-intro-heading">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 id="about-intro-heading" className="text-3xl font-bold text-brand-black">
              What the shop does
            </h2>
            <p className="mt-4 text-lg text-brand-muted">
              {business.name} deals in CCTV and security products, computers, laptops, printers and
              related services. Customers can buy for their own home, shop or office, or ask about
              wholesale quantities.
            </p>
            <p className="mt-4 text-lg text-brand-muted">
              Installation and technical support sit alongside the products. That includes fitting a
              CCTV system, repairing a camera or printer, and upgrades or repairs for computers and
              laptops.
            </p>
          </div>
          <aside className="rounded-2xl border border-brand-line bg-brand-soft p-6">
            <h2 className="text-xl font-bold text-brand-black">Shop facts still to add</h2>
            <dl className="mt-4 grid gap-4 text-sm">
              <div>
                <dt className="font-semibold text-brand-black">Service area</dt>
                <dd className="text-brand-muted">{business.serviceArea}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-black">Address</dt>
                <dd className="text-brand-muted">{business.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-black">Hours</dt>
                <dd className="text-brand-muted">
                  {business.hours.map((row) => (
                    <span key={row.days} className="block">
                      {row.days}: {row.time}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-brand-muted">
              Update these in src/data/business.js when you have them. Years in business, awards and
              customer counts are not shown because they have not been provided.
            </p>
          </aside>
        </Container>
      </section>

      <section className="bg-brand-soft py-16 md:py-20" aria-labelledby="offer-heading">
        <Container>
          <h2 id="offer-heading" className="text-3xl font-bold text-brand-black">
            What the business offers
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {offers.map((item) => (
              <article key={item.title} className="rounded-2xl border border-brand-line bg-white p-6">
                <h3 className="text-xl font-bold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-brand-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="area-heading">
        <Container>
          <h2 id="area-heading" className="text-3xl font-bold text-brand-black">
            Service area
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-brand-muted">
            The shop name refers to Baramati. The exact areas covered for installation and delivery
            are not listed yet.
          </p>
          <p className="mt-3 text-lg font-semibold text-brand-black">{business.serviceArea}</p>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}

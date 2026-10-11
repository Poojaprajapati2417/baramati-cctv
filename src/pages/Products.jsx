import ClosingCta from "../components/ClosingCta";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import ProductCategoryCard from "../components/ProductCategoryCard";
import { productSections } from "../data/products";
import usePageMeta from "../utils/usePageMeta";

const sectionBackground = {
  soft: "bg-brand-soft",
  white: "bg-white",
  dark: "bg-brand-black text-white",
};

export default function Products() {
  usePageMeta(
    "CCTV Cameras, Laptops, Desktops and Printers | Baramati CCTV Technology",
    "Browse CCTV cameras, DVRs, NVRs, new and refurbished laptops, desktops, CPUs, printers and wholesale supply from Baramati CCTV Technology.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Products and services"
        title="CCTV, computers, laptops and printers"
        text="Each group stays on its own so you can find cameras, computers, printers or wholesale without mixing them up."
      />

      <nav aria-label="Product categories" className="border-b border-brand-line bg-white">
        <Container className="flex gap-2 overflow-x-auto py-4">
          {productSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-full border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-red-dark hover:text-brand-red-dark"
            >
              {section.title}
            </a>
          ))}
        </Container>
      </nav>

      {productSections.map((section) => {
        const isDark = section.tone === "dark";
        return (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
            className={`scroll-mt-28 py-16 md:py-20 ${sectionBackground[section.tone]}`}
          >
            <Container>
              <p
                className={`text-xs font-semibold tracking-[0.16em] uppercase ${
                  isDark ? "text-brand-red" : "text-brand-red-dark"
                }`}
              >
                {section.eyebrow}
              </p>
              <h2
                id={`${section.id}-heading`}
                className={`mt-2 text-3xl font-bold tracking-tight md:text-4xl ${
                  isDark ? "text-white" : "text-brand-black"
                }`}
              >
                {section.title}
              </h2>
              <p className={`mt-3 max-w-2xl text-lg ${isDark ? "text-white/75" : "text-brand-muted"}`}>
                {section.intro}
              </p>
              {section.id === "computers" ? (
                <p className="mt-4 max-w-2xl text-sm text-brand-ink">
                  <span className="mr-2 inline-block rounded-full bg-brand-black px-2 py-0.5 text-xs font-bold text-white">
                    New
                  </span>
                  means unused stock.
                  <span className="mx-2 inline-block rounded-full bg-brand-red-dark px-2 py-0.5 text-xs font-bold text-white">
                    Refurbished
                  </span>
                  means it has been prepared for sale and is not sold as new.
                </p>
              ) : null}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <ProductCategoryCard key={item.id} item={item} light={isDark} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <ClosingCta />
    </>
  );
}

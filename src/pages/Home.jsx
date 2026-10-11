import ClosingCta from "../components/ClosingCta";
import Container from "../components/Container";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import { categories, featuredServices, reasons } from "../data/home";
import { testimonials } from "../data/testimonials";
import { Link } from "react-router-dom";
import usePageMeta from "../utils/usePageMeta";

export default function Home() {
  usePageMeta(
    "Baramati CCTV Technology | CCTV, Laptops, Computers and Printers",
    "Baramati CCTV Technology sells CCTV cameras, laptops, desktops and printers, and handles installation, repair and wholesale enquiries.",
  );

  return (
    <>
      <Hero />

      <section className="py-16 md:py-20" aria-labelledby="categories-heading">
        <Container>
          <SectionHeading
            id="categories-heading"
            eyebrow="What we deal in"
            title="Business categories"
            text="CCTV, computers and printers are kept in separate groups, with installation and wholesale on their own too."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-soft py-16 md:py-20" aria-labelledby="reasons-heading">
        <Container>
          <SectionHeading
            id="reasons-heading"
            eyebrow="Why choose us"
            title="A local shop for products and hands-on help"
            text="Retail and wholesale, new and refurbished stock, plus installation and technical support."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="services-heading">
        <Container>
          <SectionHeading
            id="services-heading"
            eyebrow="Featured services"
            title="Common jobs we can help with"
            text="Installation, maintenance, repair, laptop and printer sales, and wholesale supply."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-soft py-16 md:py-20" aria-labelledby="customers-heading">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="customers-heading"
              eyebrow="Happy customers"
              title="Customer stories"
              text="These cards are placeholders. Replace the names, comments and photos when you have real ones."
            />
            <Link
              to="/customers"
              className="shrink-0 text-sm font-bold text-brand-red-dark hover:underline"
            >
              View the customers page
            </Link>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}

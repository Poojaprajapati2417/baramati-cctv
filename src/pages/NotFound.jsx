import { Link } from "react-router-dom";
import Container from "../components/Container";
import { ctaClass } from "../components/CTAButton";
import usePageMeta from "../utils/usePageMeta";

export default function NotFound() {
  usePageMeta(
    "Page not found | Baramati CCTV Technology",
    "This page is not on the Baramati CCTV Technology website.",
  );

  return (
    <section className="py-20">
      <Container className="max-w-xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-brand-red-dark uppercase">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-brand-black">This page is not here</h1>
        <p className="mt-4 text-lg text-brand-muted">
          The link may be wrong. Go back to the home page or open the contact page.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className={ctaClass("primary")}>
            Back to home
          </Link>
          <Link to="/contact" className={ctaClass("outline")}>
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}

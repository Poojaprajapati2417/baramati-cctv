import ClosingCta from "../components/ClosingCta";
import Container from "../components/Container";
import CustomerGallery from "../components/CustomerGallery";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import TestimonialCard from "../components/TestimonialCard";
import VideoCard from "../components/VideoCard";
import { customerPhotos, customerVideos, testimonials } from "../data/testimonials";
import usePageMeta from "../utils/usePageMeta";

export default function Customers() {
  usePageMeta(
    "Customer Stories | Baramati CCTV Technology",
    "Customer photos, videos and comments for Baramati CCTV Technology. Sample placeholders on this page can be replaced with real stories.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Customers"
        title="Happy customers"
        text="Photos, videos and short comments from people who bought CCTV, computers, laptops or printers, or had work done."
      />

      <section className="py-16 md:py-20" aria-labelledby="reviews-heading">
        <Container>
          <SectionHeading
            id="reviews-heading"
            eyebrow="Testimonials"
            title="Comments"
            text="Names and sentences below are placeholders. They are not real reviews."
          />
          <p className="mt-6 rounded-xl border border-brand-line bg-brand-tint px-4 py-3 text-sm text-brand-ink">
            Replace this list in src/data/testimonials.js. Only publish a comment when the customer
            is happy for it to be shown.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-soft py-16 md:py-20" aria-labelledby="photos-heading">
        <Container>
          <SectionHeading
            id="photos-heading"
            eyebrow="Photos"
            title="Customer and project photos"
            text="Add customer photos and photos of the finished work in the customers image folder."
          />
          <div className="mt-10">
            <CustomerGallery items={customerPhotos} />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="customer-videos-heading">
        <Container>
          <SectionHeading
            id="customer-videos-heading"
            eyebrow="Videos"
            title="Customer videos"
            text="Local video files show in these players once you set the src in the testimonials data file."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {customerVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}

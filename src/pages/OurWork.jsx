import BeforeAfter from "../components/BeforeAfter";
import ClosingCta from "../components/ClosingCta";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import ProjectGallery from "../components/ProjectGallery";
import SectionHeading from "../components/SectionHeading";
import VideoCard from "../components/VideoCard";
import { beforeAfterProjects, installationGroups, projectVideos } from "../data/projects";
import usePageMeta from "../utils/usePageMeta";

export default function OurWork() {
  usePageMeta(
    "CCTV Installation Photos and Project Work | Baramati CCTV Technology",
    "Photos and videos of CCTV installations for shops, offices, homes and commercial spaces from Baramati CCTV Technology.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="CCTV installations and project media"
        text="Shop, office, home and commercial CCTV work, plus space for project videos and before-and-after photos."
      />

      <section className="py-16 md:py-20" aria-labelledby="installations-heading">
        <Container>
          <SectionHeading
            id="installations-heading"
            eyebrow="CCTV installations"
            title="Photos from finished jobs"
            text="One frame uses a sample graphic so you can see how a real file will look. The rest are empty until you add photos."
          />
          <p className="mt-6 rounded-xl border border-brand-line bg-brand-tint px-4 py-3 text-sm text-brand-ink">
            Put photos in src/assets/images/projects or src/assets/images/cctv, then connect them in
            src/data/projects.js.
          </p>
          <div className="mt-12 grid gap-14">
            {installationGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <h3 className="text-2xl font-bold text-brand-black">{group.title}</h3>
                <p className="mt-2 mb-5 max-w-2xl text-brand-muted">{group.intro}</p>
                <ProjectGallery items={group.items} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-soft py-16 md:py-20" aria-labelledby="videos-heading">
        <Container>
          <SectionHeading
            id="videos-heading"
            eyebrow="Project videos"
            title="Video files play here"
            text="When you add a local mp4 and set its src, the player replaces the empty frame."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {projectVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="compare-heading">
        <Container>
          <SectionHeading
            id="compare-heading"
            eyebrow="Before and after"
            title="Show the change an installation made"
            text="Each job has a before column and an after column. Add the two photos in the project data file."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {beforeAfterProjects.map((item) => (
              <BeforeAfter key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}

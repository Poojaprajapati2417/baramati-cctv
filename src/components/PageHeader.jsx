import Container from "./Container";

export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="bg-brand-black text-white">
      <Container className="py-14 md:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-brand-red uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
        {text ? <p className="mt-4 max-w-2xl text-lg text-white/80">{text}</p> : null}
      </Container>
    </section>
  );
}

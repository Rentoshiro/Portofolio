export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0"></div>
            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Renat, a passionate JavaScript developer specializing
                in creating inovative web solutions and user-friendly
                interfaces.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

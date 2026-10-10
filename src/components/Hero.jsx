
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnGroupRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7 }
      )
        .fromTo(
          titleRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.18,
          },
          "-=0.3"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.45"
        )
        .fromTo(
          btnGroupRef.current,
          { opacity: 0, y: 20, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.25"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-950 bg-cover bg-center px-4 py-20 sm:px-6 lg:py-24"
      style={{
        backgroundImage:
          "url('/746130032_1010095435076856_1681734251972421362_n.jpg')",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/95 via-blue-950/85 to-indigo-950/80" />

      <div className="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="mx-auto w-full max-w-5xl text-center">
        <div ref={badgeRef} className="mb-7 inline-block">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-cyan-100 shadow-lg backdrop-blur-md sm:px-5 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            LUMINOUS PUBLIC SCHOOL
          </span>
        </div>

        <h1
          ref={titleRef}
          className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          <span className="mb-2 block text-2xl font-semibold tracking-wide text-blue-100 sm:text-4xl md:text-5xl">
            Empowering Minds,
          </span>

          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text pb-2 text-transparent">
            Shaping Tomorrow's Leaders
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mb-9 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl"
        >
          Welcome to Luminous Public School, where quality education meets
          strong values. We inspire students to think creatively, learn
          confidently, and build a brighter future.
        </p>

        <div
          ref={btnGroupRef}
          className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/gallery"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-xl shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30 sm:w-auto"
          >
            Explore Our Campus
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto"
          >
            Contact Our School
          </Link>
        </div>

        <div
          ref={statsRef}
          className="mx-auto grid max-w-3xl grid-cols-1 gap-5 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-8"
        >
          <div className="rounded-xl px-3 py-2">
            <h3 className="text-2xl font-extrabold text-cyan-300 sm:text-3xl">
              Quality
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Student-Centered Learning
            </p>
          </div>

          <div className="rounded-xl px-3 py-2">
            <h3 className="text-2xl font-extrabold text-cyan-300 sm:text-3xl">
              Dedicated
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Caring Teachers
            </p>
          </div>

          <div className="rounded-xl px-3 py-2">
            <h3 className="text-2xl font-extrabold text-cyan-300 sm:text-3xl">
              Bright
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Future-Ready Students
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-50/10 to-transparent" />
    </section>
  );
};

export default Hero;

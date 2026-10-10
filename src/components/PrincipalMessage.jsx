
import { useEffect, useRef } from "react";
import gsap from "gsap";

const PrincipalMessage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".principal-image",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".principal-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.15,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 sm:text-sm">
            Words of Wisdom
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Principal's{" "}
            <span className="text-blue-600">Message</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm sm:p-8 md:gap-12 md:p-10 lg:grid-cols-5 lg:gap-14 lg:p-12">

          {/* Principal Image */}
          <div className="principal-image mx-auto w-full max-w-sm lg:col-span-2">
            <div className="relative mx-auto max-w-[320px]">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-200 to-cyan-100 opacity-70" />

              <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-slate-200 shadow-xl">
                <img
                  src="/image.png"
                  alt="Principal of Luminous Public School"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-xl border border-slate-100 bg-white px-4 py-3 text-center shadow-lg">
                <p className="text-base font-bold text-slate-900">
                  Principal
                </p>
                <p className="mt-1 text-xs font-medium text-blue-600">
                  Luminous Public School
                </p>
              </div>
            </div>
          </div>

          {/* Principal Message */}
          <div className="principal-content min-w-0 pt-5 lg:col-span-3 lg:pt-0">
            <div className="mb-5 text-5xl font-serif leading-none text-blue-200 sm:text-6xl">
              “
            </div>

            <h3 className="text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
              Dear Students, Parents, and Well-Wishers
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              <p>
                Welcome to Luminous Public School, where we believe
                that education is the foundation of a brighter future.
                Our aim is to create a supportive learning environment
                where every student feels valued, inspired, and
                encouraged to reach their full potential.
              </p>

              <p>
                We strive to nurture curiosity, creativity, discipline,
                integrity, and respect alongside academic excellence.
                Through the combined efforts of our dedicated teachers,
                supportive parents, and enthusiastic students, we aim
                to help every learner grow in knowledge, confidence,
                and character.
              </p>

              <p>
                I invite our parents and guardians to join us in this
                important journey of learning and personal growth.
                Together, let us inspire our children to become
                responsible, compassionate, and capable citizens of
                tomorrow.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-sm font-medium text-slate-500">
                With best wishes,
              </p>

              <p className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
                Principal
              </p>

              <p className="mt-1 text-sm font-semibold text-blue-600">
                Luminous Public School
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;


const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

        <h2 className="inline-block text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-300 transition-transform duration-300 hover:scale-105 sm:text-2xl">
          Luminous Public School
        </h2>

        <div className="mx-auto mt-4 h-px max-w-xs bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        <div className="mt-5 flex justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
    </footer>
  );
};

export default Footer;


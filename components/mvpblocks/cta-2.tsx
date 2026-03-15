export default function CTA2() {
  return (
    <div className="relative mx-auto mb-12 w-full max-w-7xl overflow-hidden rounded-[40px] bg-orange-500 py-10 px-8 sm:px-12 md:py-14 md:px-24">
      <div className="absolute inset-0 hidden h-full w-full overflow-hidden md:block">
        <div className="absolute top-1/2 right-[-35%] aspect-square h-[800px] w-[800px] -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-orange-400 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.8] rounded-full bg-orange-300 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.6] rounded-full bg-orange-200 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.4] rounded-full bg-orange-100 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.2] rounded-full bg-orange-50 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.1] rounded-full bg-white/50 opacity-30"></div>
        </div>
      </div>

      <div className="relative z-10 text-center md:text-left">
        <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:mb-4 md:text-5xl">
          Let&apos;s Get In Touch.
        </h1>
        <p className="mx-auto mb-6 max-w-md text-base text-white sm:text-lg md:mx-0 md:mb-8">
          Your laboratory instruments should serve you, not the other way
          around. We&apos;re happy to help you.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start sm:gap-6">
          <button className="flex w-full items-center justify-between rounded-full bg-black px-5 py-3 text-white transition-transform hover:scale-105 sm:w-[240px]">
            <span className="font-semibold">Book a discovery call</span>
            <span className="h-5 w-5 flex-shrink-0 rounded-full bg-white"></span>
          </button>
          <button className="flex w-full items-center justify-between rounded-full border border-black/10 bg-black/20 px-5 py-3 text-white backdrop-blur-md transition-transform hover:scale-105 sm:w-[240px]">
            <span className="font-medium">Test Your Samples</span>
            <span className="h-5 w-5 flex-shrink-0 rounded-full bg-white"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

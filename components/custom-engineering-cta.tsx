import { Phone, CheckCircle2 } from "lucide-react";

export default function CustomEngineeringCTA() {
  return (
    <div className="relative mx-auto mb-12 w-full max-w-7xl overflow-hidden rounded-[40px] bg-primary py-10 px-8 sm:px-12 md:py-14 md:px-24">
      <div className="absolute inset-0 hidden h-full w-full overflow-hidden md:block">
        <div className="absolute top-1/2 right-[-35%] aspect-square h-[800px] w-[800px] -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-white opacity-10"></div>
          <div className="absolute inset-0 scale-[0.8] rounded-full bg-white opacity-10"></div>
          <div className="absolute inset-0 scale-[0.6] rounded-full bg-white opacity-10"></div>
          <div className="absolute inset-0 scale-[0.4] rounded-full bg-white opacity-10"></div>
          <div className="absolute inset-0 scale-[0.2] rounded-full bg-white opacity-10"></div>
          <div className="absolute inset-0 scale-[0.1] rounded-full bg-white opacity-20"></div>
        </div>
      </div>

      <div className="relative z-10 text-center md:text-left">
        <h3 className="mb-3 text-3xl font-bold text-primary-foreground sm:text-4xl md:mb-4 md:text-5xl">
          Custom Engineering
        </h3>
        <p className="mx-auto mb-6 max-w-md text-base text-primary-foreground/90 sm:text-lg md:mx-0 md:mb-8">
          Our team designs panels tailored to specific electrical loads, operational environments, and project requirements.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start sm:gap-6">
          <button className="flex w-full items-center justify-between rounded-full bg-primary-foreground px-5 py-3 text-primary transition-transform hover:scale-105 sm:w-[240px]">
            <span className="font-semibold flex items-center gap-2">
              <Phone className="size-4" />
              Book a discovery call
            </span>
            <span className="h-5 w-5 flex-shrink-0 rounded-full bg-primary"></span>
          </button>
          <button className="flex w-full items-center justify-between rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-primary-foreground backdrop-blur-md transition-transform hover:scale-105 sm:w-[240px]">
            <span className="font-medium flex items-center gap-2">
              <CheckCircle2 className="size-4" />
              Test Your Samples
            </span>
            <span className="h-5 w-5 flex-shrink-0 rounded-full bg-primary-foreground"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

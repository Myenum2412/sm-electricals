import Image from "next/image"

interface PageHeroProps {
    title: string;
    subtitle: string;
    imageSrc: string;
}

export const PageHero = ({ title, subtitle, imageSrc }: PageHeroProps) => {
    return (
        <div className="relative h-[500px] w-full overflow-hidden">
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover object-center"
                priority
                quality={95}
            />

            {/* Optional overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Bottom Center Text */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-4 w-full">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-white/90 text-sm lg:text-xl tracking-wide mt-2 uppercase font-semibold drop-shadow-md">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

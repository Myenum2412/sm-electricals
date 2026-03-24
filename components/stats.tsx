import NumberTicker from "@/components/ui/number-ticker";

export default function StatsSection() {
    const TickerText = ({ value, label, prefix = "", suffix = "" }: { value: number, label: string, prefix?: string, suffix?: string }) => (
        <div className="space-y-4">
            <div className="text-5xl font-bold">
                {prefix}
                <NumberTicker value={value} />
                {suffix}
            </div>
            <p>{label}</p>
        </div>
    )

    return (
        <section className="py-12 md:py-16">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl uppercase tracking-tight">SM ELECTRICAL <span className="lowercase font-normal text-muted-foreground"></span></h2>
                    <p>SM ELECTRICAL is a trusted manufacturer and supplier of high-quality electrical panels and power distribution solutions.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <TickerText value={10000} prefix="+" label="Panels Delivered" />
                    <TickerText value={11} prefix="+" label="Years of Excellence" />
                    <TickerText value={100} suffix="%" label="Quality Assurance" />
                </div>
            </div>
        </section>
    )
}

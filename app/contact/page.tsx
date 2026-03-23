import ContactPageSection from "@/components/Contact/ContactPageSection";
import Faq3 from "@/components/mvpblocks/faq-3";
import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
    return (
        <main>
            <PageHero 
                title="Contact Us" 
                subtitle="GET IN TOUCH FOR EXPERT ELECTRICAL SOLUTIONS" 
                imageSrc="/images/our-services.png" 
            />
            <ContactPageSection />
            <Faq3 />
        </main>
    );
}

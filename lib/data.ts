export const panelSolutions = [
    { name: "Starter Panels", category: "Control" },
    { name: "SSB Panels", category: "Distribution" },
    { name: "Changeover Panels", category: "Distribution" },
    { name: "MV Panels", category: "Medium Voltage" },
    { name: "Drive Panels", category: "Control" },
    { name: "APFC Panels", category: "Compensation" },
    { name: "Fuse Panels", category: "Protection" },
    { name: "LTCT Panels", category: "Metering" },
    { name: "ATS Panels", category: "Distribution" },
    { name: "Service Panels", category: "Distribution" },
    { name: "Double Pole Structures", category: "Infrastructure" },
    { name: "Lightning Arrestor Systems", category: "Protection" }
].map((item, index) => ({
    id: index + 1,
    name: item.name,
    category: item.category,
    price: "",
    originalPrice: "",
    image: "/images/panels.png",
    description: `High-quality ${item.name} designed for optimal power distribution and safety in industrial and commercial environments.`,
    rating: 5,
    reviewCount: 120,
    size: "Custom",
    type: "Electrical Panel",
    benefits: ["Reliable Performance", "Durable Construction", "Enhanced Safety"]
}));

export const projects = [
    { title: "Industrial Power Distribution", image: "/images/projects/1.png" },
    { title: "Custom Control Panel", image: "/images/projects/2.png" },
    { title: "Main Switchboard Installation", image: "/images/projects/3.png" },
    { title: "Automated APFC System", image: "/images/projects/4.png" },
    { title: "Commercial SSB Panel", image: "/images/projects/5.png" },
    { title: "Heavy Duty MV Panel", image: "/images/projects/6.png" },
    { title: "Precision Motor Control", image: "/images/projects/7.png" },
    { title: "Multi-Functional Relay Panel", image: "/images/projects/8.png" },
    { title: "Industrial Changeover System", image: "/images/projects/9.png" },
    { title: "Custom PLC Enclosure", image: "/images/projects/10.png" },
    { title: "Secondary Distribution Board", image: "/images/projects/11.png" },
    { title: "Advanced Metering Panel", image: "/images/projects/12.png" },
    { title: "High-Voltage Protection Panel", image: "/images/projects/13.png" },
    { title: "Intelligent Load Management", image: "/images/projects/14.png" },
    { title: "Modular Switchgear Assembly", image: "/images/projects/15.png" },
    { title: "Safe Link Main Panel", image: "/images/projects/16.png" },
    { title: "Industrial Lighting Control", image: "/images/projects/17.png" },
    { title: "Custom Engineering Solution", image: "/images/projects/18.png" },
    { title: "Infrastructure Power Hub", image: "/images/projects/19.png" },
    { title: "Safety Compliant Panelboard", image: "/images/projects/20.png" },
    { title: "Factory 24/7 Power Hub", image: "/images/projects/21.png" },
    { title: "Compact Distribution Unit", image: "/images/projects/22.png" },
    { title: "Heavy Industry Gateway", image: "/images/projects/23.png" },
    { title: "Global Standard Control Unit", image: "/images/projects/24.png" }
];

export const services = [
    {
        title: "Custom Panel Manufacturing",
        description: "We design and fabricate electrical panels tailored to the specific needs of each project, ensuring optimal performance and compliance with industry standards.",
        link: "/services",
        icon: "⚡"
    },
    {
        title: "Bulk Supply for Projects",
        description: "We work closely with contractors, developers, and electrical suppliers to deliver large-scale orders with consistent quality and on-time delivery.",
        link: "/services",
        icon: "📦"
    },
    {
        title: "Electrical System Consultation",
        description: "Our experienced team helps clients choose the right panel configurations and electrical systems based on their operational requirements.",
        link: "/services",
        icon: "🤝"
    },
    {
        title: "Installation Guidance",
        description: "We provide technical support and guidance during installation to ensure that electrical panels operate safely and efficiently.",
        link: "/services",
        icon: "🛠️"
    },
    {
        title: "Quality Testing & Assurance",
        description: "Every panel manufactured by SM ELECTRICAL undergoes thorough inspection and testing to guarantee reliability, safety, and long service life.",
        link: "/services",
        icon: "✅"
    },
    {
        title: "Annual Maintenance Contracts",
        description: "We offer comprehensive annual maintenance contracts (AMC) for electrical panels and distribution systems to prevent unexpected downtime and ensure continuous operation.",
        link: "/services",
        icon: "🔧"
    }
];


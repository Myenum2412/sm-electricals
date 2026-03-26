import { slugify } from "./utils"

export type PanelCategory = "LT" | "HT" | "Control" | "MCC" | "PCC" | "APFC" | "ATS" | "Distribution"

export interface PanelProduct {
    id: number
    slug: string
    name: string
    category: string
    subcategory: PanelCategory
    price: string
    originalPrice: string
    image: string
    description: string
    shortDescription: string
    rating: number
    reviewCount: number
    size: string
    type: string
    benefits: string[]
    // Specifications
    specifications: {
        voltage?: string
        currentRating?: string
        frequency?: string
        shortCircuitRating?: string
        protectionDegree?: string
        ambientTemp?: string
        accuracyClass?: string
        dischargeCurrent?: string
    }
    // Applications
    applications: string[]
    // Certifications
    certifications: string[]
    // Features
    features: string[]
    // Usage type
    usage: ("Industrial" | "Commercial" | "Residential")[]
    // Voltage type
    voltage: "415V" | "11kV" | "33kV" | "Custom"
    // Industry
    industries: string[]
}

const panelProducts: Omit<PanelProduct, "slug">[] = [
    {
        id: 1,
        name: "LT Panels (Low Voltage)",
        category: "LT Panels",
        subcategory: "LT",
        price: "",
        originalPrice: "",
        image: "/images/projects/41.png",
        description: "Our LT Panels are designed for efficient power distribution in industrial and commercial establishments. These panels handle voltage up to 1000V and provide comprehensive protection and control for electrical systems. Built with precision and adhering to IS standards, our LT panels ensure reliable operation in demanding environments.",
        shortDescription: "Low voltage power distribution panels up to 1000V for industrial and commercial applications.",
        rating: 5,
        reviewCount: 45,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Reliable Performance", "Durable Construction", "Enhanced Safety"],
        specifications: {
            voltage: "415V / 690V / 1000V",
            currentRating: "63A to 6300A",
            frequency: "50Hz",
            shortCircuitRating: "50kA to 100kA",
            protectionDegree: "IP42 to IP65",
            ambientTemp: "-10°C to +55°C"
        },
        applications: ["Industrial power distribution", "Commercial buildings", "Shopping complexes", "Hospitals", "Data centers"],
        certifications: ["ISO 9001:2015", "IS 8623", "IEC 61439"],
        features: ["Modular design", "Easy maintenance", "Circuit breakers", "Busbar system", "Cable alley"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["Automotive", "Textiles", "Food Processing", "Pharmaceuticals", "Chemical"]
    },
    {
        id: 2,
        name: "HT Panels (High Voltage)",
        category: "HT Panels",
        subcategory: "HT",
        price: "",
        originalPrice: "",
        image: "/images/projects/42.png",
        description: "High Voltage panels designed for 11kV and 33kV applications. These panels provide reliable switchgear solutions for substations and heavy industrial facilities. Our HT panels incorporate advanced protection mechanisms and are built to withstand extreme conditions while ensuring operator safety.",
        shortDescription: "High voltage switchgear panels for 11kV and 33kV industrial substation applications.",
        rating: 5,
        reviewCount: 32,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["High Voltage Capability", "Advanced Protection", "Reliable Operation"],
        specifications: {
            voltage: "11kV / 33kV",
            currentRating: "630A to 2500A",
            frequency: "50Hz",
            shortCircuitRating: "25kA to 40kA",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-5°C to +50°C"
        },
        applications: ["Substations", "Steel plants", "Cement industries", "Power plants", "Large manufacturing units"],
        certifications: ["ISO 9001:2015", "IS 13118", "IEC 62271"],
        features: ["SF6/Vacuum circuit breakers", "Protection relays", "Control panels", "Isolators", "Surge arresters"],
        usage: ["Industrial"],
        voltage: "11kV",
        industries: ["Steel", "Cement", "Power Generation", "Heavy Engineering", "Mining"]
    },
    {
        id: 3,
        name: "Control Panels",
        category: "Control Panels",
        subcategory: "Control",
        price: "",
        originalPrice: "",
        image: "/images/projects/43.png",
        description: "Intelligent control panels for automated industrial processes. These panels integrate PLC, VFD, and relay logic to provide precise control over machinery and equipment. Designed for flexibility and ease of integration with existing automation systems.",
        shortDescription: "Automated control panels with PLC and VFD integration for industrial process control.",
        rating: 5,
        reviewCount: 58,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Automation Ready", "Precise Control", "Easy Integration"],
        specifications: {
            voltage: "415V / 230V",
            currentRating: "10A to 400A",
            frequency: "50Hz",
            protectionDegree: "IP42 to IP65",
            ambientTemp: "-10°C to +55°C"
        },
        applications: ["Conveyor systems", "HVAC control", "Pumping stations", "Process automation", "Machine control"],
        certifications: ["ISO 9001:2015", "IEC 61439", "CE Certified"],
        features: ["PLC integration", "HMI interface", "VFD drives", "Soft starters", "Network connectivity"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["Manufacturing", "Automotive", "Packaging", "Textiles", "Water Treatment"]
    },
    {
        id: 4,
        name: "MCC Panels (Motor Control Center)",
        category: "MCC Panels",
        subcategory: "MCC",
        price: "",
        originalPrice: "",
        image: "/images/projects/44.png",
        description: "Motor Control Centers for centralized management of multiple electric motors. Our MCC panels provide start/stop control, overload protection, and monitoring for motors across various industrial applications. Features intelligent busbar design and modular compartments for easy maintenance.",
        shortDescription: "Centralized motor control and management panels for industrial motor drives.",
        rating: 5,
        reviewCount: 41,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Centralized Control", "Motor Protection", "Easy Maintenance"],
        specifications: {
            voltage: "415V",
            currentRating: "63A to 1600A",
            frequency: "50Hz",
            shortCircuitRating: "35kA to 50kA",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-10°C to +50°C"
        },
        applications: ["Pump houses", "Compressor stations", "Conveyor systems", "HVAC plants", "Water treatment"],
        certifications: ["ISO 9001:2015", "IS 8623", "IEC 61439"],
        features: ["Soft starters", "VFDs", "Motor feeders", "Busbar system", "Drawer type construction"],
        usage: ["Industrial"],
        voltage: "415V",
        industries: ["Chemical", "Pharmaceuticals", "Food Processing", "Water Treatment", "Cement"]
    },
    {
        id: 5,
        name: "PCC Panels (Power Control Center)",
        category: "PCC Panels",
        subcategory: "PCC",
        price: "",
        originalPrice: "",
        image: "/images/projects/45.png",
        description: "Power Control Centers for managing and distributing power to various loads in industrial facilities. Our PCC panels integrate main incomer, bus coupler, and outgoing feeders with comprehensive metering and protection for efficient power management.",
        shortDescription: "Central power distribution panels for managing and controlling industrial power systems.",
        rating: 5,
        reviewCount: 38,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Power Management", "Load Distribution", "System Protection"],
        specifications: {
            voltage: "415V",
            currentRating: "630A to 3150A",
            frequency: "50Hz",
            shortCircuitRating: "50kA to 80kA",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-10°C to +55°C"
        },
        applications: ["Industrial plants", "Substations", "Data centers", "Commercial complexes", "Manufacturing units"],
        certifications: ["ISO 9001:2015", "IS 8623", "IEC 61439"],
        features: ["Incomer breakers", "Bus couplers", "Outgoing feeders", " metering systems", "Protection relays"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["Automotive", "Textiles", "Steel", "Chemical", "Pharmaceuticals"]
    },
    {
        id: 6,
        name: "APFC Panels (Automatic Power Factor Correction)",
        category: "APFC Panels",
        subcategory: "APFC",
        price: "",
        originalPrice: "",
        image: "/images/projects/46.png",
        description: "Automatic Power Factor Correction panels for improving electrical system efficiency. Our APFC panels automatically switch capacitor banks to maintain optimal power factor, reducing energy costs and penalties. Features micro-processor based controller for precise compensation.",
        shortDescription: "Automatic power factor correction panels for energy efficiency and cost savings.",
        rating: 5,
        reviewCount: 52,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Energy Savings", "Penalty Avoidance", "Automatic Control"],
        specifications: {
            voltage: "415V",
            currentRating: "50kVAR to 2000kVAR",
            frequency: "50Hz",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-10°C to +45°C"
        },
        applications: ["Industrial plants", "Commercial buildings", "Warehouses", "Office complexes", "Manufacturing units"],
        certifications: ["ISO 9001:2015", "IS 13983", "IEC 60831"],
        features: ["Auto switching", "Harmonic filtering", "PF controller", "Capacitor banks", "Reactors"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["All Industries", "Textiles", "Automotive", "Food Processing", "Packaging"]
    },
    {
        id: 7,
        name: "ATS Panels (Automatic Transfer Switch)",
        category: "ATS Panels",
        subcategory: "ATS",
        price: "",
        originalPrice: "",
        image: "/images/projects/47.png",
        description: "Automatic Transfer Switch panels for seamless power switching between main supply and backup generators. Our ATS panels ensure uninterrupted power supply by automatically detecting power failure and transferring load to generator source.",
        shortDescription: "Automatic power transfer panels for reliable backup power switching.",
        rating: 5,
        reviewCount: 36,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Uninterrupted Power", "Automatic Operation", "Reliable Switching"],
        specifications: {
            voltage: "415V",
            currentRating: "100A to 1600A",
            frequency: "50Hz",
            shortCircuitRating: "25kA to 35kA",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-10°C to +50°C"
        },
        applications: ["Hospitals", "Data centers", "IT parks", "Commercial buildings", "Industrial plants"],
        certifications: ["ISO 9001:2015", "IEC 60947-6-1", "CE Certified"],
        features: ["Auto transfer", "Manual override", "Indicators", "Delays", "Start signals"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["Healthcare", "IT", "Telecommunications", "Banking", "Manufacturing"]
    },
    {
        id: 8,
        name: "Distribution Boards",
        category: "Distribution Boards",
        subcategory: "Distribution",
        price: "",
        originalPrice: "",
        image: "/images/projects/48.png",
        description: "Distribution boards for final power distribution to various circuits. Our DBs are available in multiple configurations including TPN, TPN+SP, and MCB distribution for residential, commercial, and industrial applications.",
        shortDescription: "Final power distribution units for residential, commercial, and industrial circuits.",
        rating: 5,
        reviewCount: 78,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Efficient Distribution", "Compact Design", "Easy Installation"],
        specifications: {
            voltage: "415V / 230V",
            currentRating: "63A to 400A",
            frequency: "50Hz",
            shortCircuitRating: "10kA to 25kA",
            protectionDegree: "IP30 to IP54",
            ambientTemp: "-10°C to +45°C"
        },
        applications: ["Residential buildings", "Offices", "Shops", "Industrial units", "Commercial complexes"],
        certifications: ["ISO 9001:2015", "IS 8623", "IEC 61439"],
        features: ["MCB/MCCB", "Isolators", "RCCB", "Enclosure", "Busbars"],
        usage: ["Industrial", "Commercial", "Residential"],
        voltage: "415V",
        industries: ["Real Estate", "Commercial Buildings", "Retail", "Healthcare", "Education"]
    },
    {
        id: 9,
        name: "Starter Panels",
        category: "Control",
        subcategory: "Control",
        price: "",
        originalPrice: "",
        image: "/images/projects/49.png",
        description: "Motor starter panels for reliable starting and protection of electric motors. Available in DOL, Star-Delta, and Soft Starter configurations to match different motor starting requirements.",
        shortDescription: "Motor starter panels with DOL, Star-Delta, and Soft Starter options.",
        rating: 5,
        reviewCount: 62,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Motor Protection", "Multiple Configurations", "Reliable Operation"],
        specifications: {
            voltage: "415V / 230V",
            currentRating: "5A to 200A",
            frequency: "50Hz",
            protectionDegree: "IP42 to IP65",
            ambientTemp: "-10°C to +55°C"
        },
        applications: ["Pumps", "Compressors", "Fans", "Conveyors", "Industrial machinery"],
        certifications: ["ISO 9001:2015", "IEC 60947-4-1"],
        features: ["Thermal overload", "Magnetic contactor", "Control transformer", "Push buttons", "Indicators"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["Water Treatment", "HVAC", "Manufacturing", "Agriculture", "Textiles"]
    },
    {
        id: 10,
        name: "SSB Panels (Sub Switch Board)",
        category: "Distribution",
        subcategory: "Distribution",
        price: "",
        originalPrice: "",
        image: "/images/projects/50.png",
        description: "Sub Switch Boards for intermediate power distribution in industrial plants. These panels serve as secondary distribution points feeding power to various subsections of the facility.",
        shortDescription: "Intermediate power distribution panels for industrial plant subsections.",
        rating: 5,
        reviewCount: 44,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Flexible Distribution", "Modular Design", "Easy Expansion"],
        specifications: {
            voltage: "415V",
            currentRating: "200A to 1000A",
            frequency: "50Hz",
            shortCircuitRating: "25kA to 35kA",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-10°C to +50°C"
        },
        applications: ["Industrial plants", "Commercial buildings", "Warehouses", "Production floors"],
        certifications: ["ISO 9001:2015", "IS 8623", "IEC 61439"],
        features: ["MCB/MCCB", "Busbars", "Cable alley", "Removable glands", "Labeling"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["Manufacturing", "Automotive", "Textiles", "Food Processing", "Chemical"]
    },
    {
        id: 11,
        name: "Changeover Panels",
        category: "Distribution",
        subcategory: "Distribution",
        price: "",
        originalPrice: "",
        image: "/images/projects/51.png",
        description: "Manual and automatic changeover panels for switching between multiple power sources. Ensures reliable transfer between main supply, generator, and UPS systems.",
        shortDescription: "Power source switching panels for manual and automatic transfer between supply sources.",
        rating: 5,
        reviewCount: 39,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Reliable Switching", "Multiple Sources", "Manual/Auto Options"],
        specifications: {
            voltage: "415V",
            currentRating: "100A to 1000A",
            frequency: "50Hz",
            shortCircuitRating: "25kA to 35kA",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-10°C to +50°C"
        },
        applications: ["Buildings", "Hospitals", "Data centers", "Industrial plants", "Commercial complexes"],
        certifications: ["ISO 9001:2015", "IEC 60947-3", "IS 8623"],
        features: ["Interlock", "Indicators", "By-pass arrangement", "Padlock facility", "Rotary switches"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["Healthcare", "IT", "Telecommunications", "Banking", "Manufacturing"]
    },
    {
        id: 12,
        name: "MV Panels (Medium Voltage)",
        category: "Medium Voltage",
        subcategory: "HT",
        price: "",
        originalPrice: "",
        image: "/images/projects/52.png",
        description: "Medium Voltage panels for 3.3kV to 11kV applications. These panels provide reliable switching and protection for medium voltage distribution networks and industrial facilities.",
        shortDescription: "Medium voltage switchgear for 3.3kV to 11kV industrial distribution systems.",
        rating: 5,
        reviewCount: 28,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["MV Capability", "Reliable Protection", "Compact Design"],
        specifications: {
            voltage: "3.3kV / 6.6kV / 11kV",
            currentRating: "400A to 1250A",
            frequency: "50Hz",
            shortCircuitRating: "20kA to 31.5kA",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-5°C to +45°C"
        },
        applications: ["Substations", "Industrial plants", "Wind farms", "Solar plants", "Railway electrification"],
        certifications: ["ISO 9001:2015", "IS 13118", "IEC 62271"],
        features: ["Vacuum circuit breakers", "Protection relays", "CT/VT", "Isolators", "Surge arresters"],
        usage: ["Industrial"],
        voltage: "11kV",
        industries: ["Power Distribution", "Steel", "Cement", "Mining", "Railway"]
    },
    {
        id: 13,
        name: "Drive Panels",
        category: "Control",
        subcategory: "Control",
        price: "",
        originalPrice: "",
        image: "/images/projects/53.png",
        description: "Variable Frequency Drive panels for precise speed control of electric motors. These panels integrate VFDs with necessary controls and filters to provide smooth and efficient motor speed control.",
        shortDescription: "Variable frequency drive panels for precision motor speed control applications.",
        rating: 5,
        reviewCount: 48,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Precise Control", "Energy Efficiency", "Smooth Operation"],
        specifications: {
            voltage: "415V / 690V",
            currentRating: "5A to 400A",
            frequency: "0-50Hz",
            protectionDegree: "IP42 to IP65",
            ambientTemp: "-10°C to +50°C"
        },
        applications: ["Pumps", "Fans", "Compressors", "Conveyors", "Machine tools"],
        certifications: ["ISO 9001:2015", "IEC 61800", "CE Certified"],
        features: ["VFD integration", "Bypass options", "Filters", "Soft starters", "PLC control"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["HVAC", "Water Treatment", "Manufacturing", "Textiles", "Packaging"]
    },
    {
        id: 14,
        name: "Fuse Panels",
        category: "Protection",
        subcategory: "Distribution",
        price: "",
        originalPrice: "",
        image: "/images/projects/54.png",
        description: "Fuse panels for circuit protection in electrical distribution systems. These panels provide reliable overcurrent protection using HRC fuses for various industrial and commercial applications.",
        shortDescription: "Circuit protection panels with HRC fuses for industrial and commercial applications.",
        rating: 5,
        reviewCount: 35,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Reliable Protection", "Fast Clearing", "Cost Effective"],
        specifications: {
            voltage: "415V / 690V",
            currentRating: "63A to 630A",
            frequency: "50Hz",
            shortCircuitRating: "50kA to 100kA",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-10°C to +45°C"
        },
        applications: ["Industrial distribution", "Transformer protection", "Motor circuits", "Capacitor banks"],
        certifications: ["ISO 9001:2015", "IEC 60269", "IS 13703"],
        features: ["HRC fuses", "Switch fuse units", "Terminals", "Indicators", "Enclosure"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["Manufacturing", "Textiles", "Chemical", "Pharmaceuticals", "Food Processing"]
    },
    {
        id: 15,
        name: "LTCT Panels (Low Tension Current Transformer)",
        category: "Metering",
        subcategory: "Distribution",
        price: "",
        originalPrice: "",
        image: "/images/projects/55.png",
        description: "Current transformer panels for metering and protection applications. These panels house CTs and PTs for accurate current and voltage measurement in power distribution systems.",
        shortDescription: "Current transformer panels for accurate metering and protection measurement.",
        rating: 5,
        reviewCount: 29,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Accurate Measurement", "Protection Ready", "Metering Accuracy"],
        specifications: {
            voltage: "415V / 11kV",
            currentRating: "5/5A to 3000/5A",
            frequency: "50Hz",
            accuracyClass: "0.5 / 0.2 / 5P10",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-10°C to +45°C"
        },
        applications: ["Energy metering", "Protection systems", "Load monitoring", "Power quality analysis"],
        certifications: ["ISO 9001:2015", "IEC 61869", "IS 2705"],
        features: ["Current transformers", "Potential transformers", "Terminal blocks", "Wiring", "Enclosure"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["Power Distribution", "Manufacturing", "Commercial Buildings", "Utilities"]
    },
    {
        id: 16,
        name: "Service Panels",
        category: "Distribution",
        subcategory: "Distribution",
        price: "",
        originalPrice: "",
        image: "/images/projects/56.png",
        description: "Service entrance panels for commercial and industrial buildings. These panels serve as the main point of connection between utility supply and building electrical distribution.",
        shortDescription: "Service entrance panels for commercial and industrial building electrical connection.",
        rating: 5,
        reviewCount: 42,
        size: "Custom",
        type: "Electrical Panel",
        benefits: ["Service Entry", "Main Protection", "Reliable Connection"],
        specifications: {
            voltage: "415V",
            currentRating: "200A to 1000A",
            frequency: "50Hz",
            shortCircuitRating: "35kA to 50kA",
            protectionDegree: "IP42 to IP54",
            ambientTemp: "-10°C to +50°C"
        },
        applications: ["Commercial buildings", "Industrial units", "Office complexes", "Shopping malls"],
        certifications: ["ISO 9001:2015", "IS 8623", "IEC 61439"],
        features: ["Main breaker", "Metering provision", "Surge protection", "Busbars", "Outgoings"],
        usage: ["Industrial", "Commercial", "Residential"],
        voltage: "415V",
        industries: ["Real Estate", "Commercial Buildings", "Retail", "Healthcare", "Education"]
    },
    {
        id: 17,
        name: "Double Pole Structures",
        category: "Infrastructure",
        subcategory: "Distribution",
        price: "",
        originalPrice: "",
        image: "/images/projects/57.png",
        description: "Double pole structures for outdoor electrical distribution. These robust structures support transformers, switchgear, and other electrical equipment in outdoor installations.",
        shortDescription: "Outdoor electrical support structures for transformers and distribution equipment.",
        rating: 5,
        reviewCount: 22,
        size: "Custom",
        type: "Infrastructure",
        benefits: ["Outdoor Rated", "Robust Construction", "Weather Resistant"],
        specifications: {
            voltage: "11kV / 33kV",
            currentRating: "N/A",
            frequency: "50Hz",
            shortCircuitRating: "N/A",
            protectionDegree: "IP65",
            ambientTemp: "-20°C to +60°C"
        },
        applications: ["Substations", "Power distribution", "Rural electrification", "Industrial outdoor"],
        certifications: ["ISO 9001:2015", "IS 802", "IEC 61869"],
        features: ["Galvanized steel", "Weather proof", "Climbing ladder", "Platform", "Earthing"],
        usage: ["Industrial"],
        voltage: "11kV",
        industries: ["Power Distribution", "Utilities", "Agriculture", "Infrastructure"]
    },
    {
        id: 18,
        name: "Lightning Arrestor Systems",
        category: "Protection",
        subcategory: "Distribution",
        price: "",
        originalPrice: "",
        image: "/images/projects/58.png",
        description: "Lightning protection systems for electrical installations. These systems protect valuable equipment from lightning surges and transient overvoltages in industrial and commercial facilities.",
        shortDescription: "Lightning surge protection systems for industrial and commercial electrical installations.",
        rating: 5,
        reviewCount: 31,
        size: "Custom",
        type: "Protection System",
        benefits: ["Surge Protection", "Equipment Safety", "Lightning Shield"],
        specifications: {
            voltage: "415V to 33kV",
            currentRating: "N/A",
            frequency: "50Hz",
            dischargeCurrent: "10kA to 40kA",
            protectionDegree: "IP65",
            ambientTemp: "-20°C to +55°C"
        },
        applications: ["Industrial plants", "Substations", "Buildings", "Telecom towers", "Warehouses"],
        certifications: ["ISO 9001:2015", "IEC 61643", "IS 3071"],
        features: ["Metal oxide varistors", "Spark gaps", "Filtering", "Monitoring", "Earthing"],
        usage: ["Industrial", "Commercial"],
        voltage: "415V",
        industries: ["Power Distribution", "Telecommunications", "Manufacturing", "Real Estate", "Infrastructure"]
    }
]

// Add slug to each product
export const panelSolutions: PanelProduct[] = panelProducts.map(product => ({
    ...product,
    slug: slugify(product.name)
}))

export function getProductBySlug(slug: string): PanelProduct | undefined {
    return panelSolutions.find(product => product.slug === slug)
}

export function getProductsByCategory(category: string): PanelProduct[] {
    return panelSolutions.filter(product =>
        product.category.toLowerCase() === category.toLowerCase() ||
        product.subcategory.toLowerCase() === category.toLowerCase()
    )
}

export function getProductsBySubcategory(subcategory: PanelCategory): PanelProduct[] {
    return panelSolutions.filter(product => product.subcategory === subcategory)
}

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
    { title: "Global Standard Control Unit", image: "/images/projects/24.png" },
    { title: "Heavy Industrial Incomer", image: "/images/projects/25.png" },
    { title: "Low Voltage Feeder Pillar", image: "/images/projects/26.png" },
    { title: "Motor Starter Assembly", image: "/images/projects/27.png" },
    { title: "Main Lighting Distribution", image: "/images/projects/28.png" },
    { title: "Capacitor Bank Panel", image: "/images/projects/29.png" },
    { title: "Industrial MCC Section", image: "/images/projects/30.png" },
    { title: "Emergency Power Switchgear", image: "/images/projects/31.png" },
    { title: "Complex Relay Protection", image: "/images/projects/32.png" },
    { title: "Custom VFD Drive Panel", image: "/images/projects/33.png" },
    { title: "Substation Control Desk", image: "/images/projects/34.png" },
    { title: "Outdoor Kiosk Substation", image: "/images/projects/35.png" },
    { title: "Busduct Connection Unit", image: "/images/projects/36.png" },
    { title: "Transformer Marshalling Box", image: "/images/projects/37.png" },
    { title: "Instrumentation Control Panel", image: "/images/projects/38.png" },
    { title: "Air Insulated Switchgear", image: "/images/projects/39.png" },
    { title: "Gas Insulated Switchgear", image: "/images/projects/40.png" },
    { title: "LT Power Distribution", image: "/images/projects/41.png" },
    { title: "HT Switchgear Protection", image: "/images/projects/42.png" },
    { title: "Automated Control Center", image: "/images/projects/43.png" },
    { title: "Motor Control Hub", image: "/images/projects/44.png" },
    { title: "Power Control Center", image: "/images/projects/45.png" },
    { title: "Power Factor Correction", image: "/images/projects/46.png" },
    { title: "Automatic Transfer Unit", image: "/images/projects/47.png" },
    { title: "Final Distribution Board", image: "/images/projects/48.png" },
    { title: "Precision Starter Panel", image: "/images/projects/49.png" },
    { title: "Sub Distribution Board", image: "/images/projects/50.png" },
    { title: "Automatic Changeover System", image: "/images/projects/51.png" },
    { title: "Medium Voltage Panel", image: "/images/projects/52.png" },
    { title: "Variable Frequency Drive", image: "/images/projects/53.png" },
    { title: "HRC Fuse Distribution", image: "/images/projects/54.png" },
    { title: "Current Transformer Unit", image: "/images/projects/55.png" },
    { title: "Main Service Panel", image: "/images/projects/56.png" },
    { title: "DP Structure Installation", image: "/images/projects/57.png" },
    { title: "Lightning Protection System", image: "/images/projects/58.png" },
    { title: "Solar Power Hub", image: "/images/projects/59.png" },
    { title: "Wind Farm Control Unit", image: "/images/projects/60.png" },
    { title: "Data Center Power Suite", image: "/images/projects/61.png" },
    { title: "Smart Building Distribution", image: "/images/projects/62.png" },
    { title: "Advanced Grid Management", image: "/images/projects/63.png" }
];

export const services = [
    {
        title: "Custom Panel Manufacturing",
        description: "We design and fabricate electrical panels tailored to the specific needs of each project, ensuring optimal performance and compliance with industry standards.",
        link: "/services",
        icon: "Zap"
    },
    {
        title: "Bulk Supply for Projects",
        description: "We work closely with contractors, developers, and electrical suppliers to deliver large-scale orders with consistent quality and on-time delivery.",
        link: "/services",
        icon: "Boxes"
    },
    {
        title: "Electrical System Consultation",
        description: "Our experienced team helps clients choose the right panel configurations and electrical systems based on their operational requirements.",
        link: "/services",
        icon: "Users"
    },
    {
        title: "Installation Guidance",
        description: "We provide technical support and guidance during installation to ensure that electrical panels operate safely and efficiently.",
        link: "/services",
        icon: "Hammer"
    },
    {
        title: "Quality Testing & Assurance",
        description: "Every panel manufactured by SM ELECTRICAL undergoes thorough inspection and testing to guarantee reliability, safety, and long service life.",
        link: "/services",
        icon: "ShieldCheck"
    },
    {
        title: "Annual Maintenance Contracts",
        description: "We offer comprehensive annual maintenance contracts (AMC) for electrical panels and distribution systems to prevent unexpected downtime and ensure continuous operation.",
        link: "/services",
        icon: "Wrench"
    }
];

// FAQ data for Salem-specific content
export const faqs = [
    {
        question: "What electrical panel types are most popular in Salem industries?",
        answer: "In Salem's industrial landscape, LT Panels, MCC Panels, and APFC Panels are the most sought after. Salem has a strong presence of textile mills, steel industries, and manufacturing units that require robust power distribution and motor control solutions. Our LT Panels are particularly popular due to their reliability in handling the power demands of these industries."
    },
    {
        question: "How do I choose the right electrical panel for my factory in Salem?",
        answer: "Choosing the right panel depends on your power requirements, voltage needs, and application. For most Salem industrial units, we recommend starting with a load analysis. Consider factors like: total connected load, power factor, short-circuit rating requirements, and future expansion plans. Our team in Salem provides free consultation to help you select the appropriate panel configuration."
    },
    {
        question: "What certifications should I look for when buying electrical panels in Tamil Nadu?",
        answer: "Look for panels with ISO 9001:2015 certification, compliance with IS 8623 (Indian Standard for Low Voltage Switchgear), and IEC 61439 for international standards. SM ELECTRICAL provides panels with all relevant certifications including BIS, ensuring your installations meet Tamil Nadu Electrical Inspectorate requirements."
    },
    {
        question: "Do you offer on-site installation services in Salem?",
        answer: "Yes, we provide comprehensive installation guidance and can coordinate with local electrical contractors in Salem and throughout Tamil Nadu. Our technical team ensures proper installation, testing, and commissioning of all panel types. We also offer annual maintenance contracts (AMC) for ongoing support."
    },
    {
        question: "What is the delivery time for custom electrical panels in Salem?",
        answer: "Standard panels typically ship within 2-3 weeks. Custom panels with specific requirements may take 4-6 weeks depending on complexity. We maintain sufficient stock of common panel types for quick delivery to Salem and across Tamil Nadu."
    },
    {
        question: "How do APFC panels help reduce electricity bills in Salem?",
        answer: "APFC (Automatic Power Factor Correction) panels help maintain optimal power factor (typically above 0.95). Tamil Nadu Electricity Board offers incentives for maintaining good power factor, and industries can avoid penalties. APFC panels can reduce electricity bills by 5-15% through improved power quality and reduced reactive power charges."
    }
];

// Testimonials with Salem context
export const testimonials = [
    {
        name: "R. Kumar",
        company: "Salem Steel Plant",
        location: "Salem, Tamil Nadu",
        rating: 5,
        text: "SM ELECTRICAL has been our trusted panel supplier for over 10 years. Their LT Panels and MCC Panels have performed exceptionally in our steel manufacturing facility. Excellent quality and reliable after-sales support.",
        service: "Industrial Panels"
    },
    {
        name: "M. Chandrasekaran",
        company: "Chennai Textiles Ltd",
        location: "Salem Region, Tamil Nadu",
        rating: 5,
        text: "The APFC panels from SM ELECTRICAL helped us improve our power factor from 0.82 to 0.97. We've seen significant reduction in our electricity bills. Great technical support and professional service.",
        service: "APFC Panel"
    },
    {
        name: "S. Venkatesh",
        company: "Venkatesh Food Processing",
        location: "Salem, Tamil Nadu",
        rating: 5,
        text: "We needed custom control panels for our food processing line. SM ELECTRICAL delivered exactly what we needed with proper quality certifications. Their team understood our requirements perfectly.",
        service: "Control Panels"
    },
    {
        name: "A. Palani",
        company: "Salem Auto Components",
        location: "Salem, Tamil Nadu",
        rating: 5,
        text: "Reliable MCC panels for our automotive parts manufacturing unit. The panels have been running continuously for 5 years without any issues. SM ELECTRICAL is our go-to supplier for all electrical panel needs.",
        service: "MCC Panels"
    }
];

// Business location data for local SEO
export const businessLocation = {
    name: "SM ELECTRICAL",
    description: "Leading manufacturer and supplier of electrical panels in Salem, Tamil Nadu. Providing high-quality LT Panels, HT Panels, Control Panels, MCC Panels, and more for industrial and commercial applications.",
    address: {
        street: "123/4, Industrial Area",
        city: "Salem",
        state: "Tamil Nadu",
        postalCode: "636001",
        country: "India"
    },
    factoryAddress: {
        street: "336/3-A Mariyamman Kovil Street, Jagirredpatty, Mamangam",
        city: "Salem",
        state: "Tamil Nadu",
        postalCode: "636302",
        country: "India"
    },
    phone: "+91 93607 10100",
    email: "info@sm-electrical.in",
    website: "https://www.smelectricals.tech",
    hours: {
        monday: "09:00-18:00",
        tuesday: "09:00-18:00",
        wednesday: "09:00-18:00",
        thursday: "09:00-18:00",
        friday: "09:00-18:00",
        saturday: "09:00-14:00",
        sunday: "Closed"
    },
    geo: {
        latitude: "11.6643",
        longitude: "78.1460"
    },
    rating: 4.8,
    reviewCount: 45
}

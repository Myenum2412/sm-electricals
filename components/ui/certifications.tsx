"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const certifications = [
    {
        name: "ISO 9001:2015",
        description: "Quality Management System",
        icon: "✓",
        color: "bg-blue-500"
    },
    {
        name: "IS 8623",
        description: "Low-Voltage Switchgear Standard",
        icon: "✓",
        color: "bg-green-500"
    },
    {
        name: "IEC 61439",
        description: "Low-Voltage Switchgear Assemblies",
        icon: "✓",
        color: "bg-purple-500"
    },
    {
        name: "IS 13118",
        description: "High-Voltage Switchgear",
        icon: "✓",
        color: "bg-orange-500"
    },
    {
        name: "IEC 62271",
        description: "High-Voltage Switchgear",
        icon: "✓",
        color: "bg-red-500"
    },
    {
        name: "BIS Certified",
        description: "Bureau of Indian Standards",
        icon: "✓",
        color: "bg-yellow-500"
    }
]

export function Certifications() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                        <div className={`w-12 h-12 rounded-full ${cert.color} text-white flex items-center justify-center mx-auto mb-3`}>
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{cert.name}</h3>
                        <p className="text-xs text-muted-foreground">{cert.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export function CertificationsSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Certifications & Standards
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our products meet international quality and safety standards
                    </p>
                </div>
                <Certifications />
            </div>
        </section>
    )
}

export function CertificationsBadges() {
    return (
        <div className="flex flex-wrap gap-2">
            {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {cert.name}
                </Badge>
            ))}
        </div>
    )
}
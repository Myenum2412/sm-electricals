"use client"

import React from "react"
import { testimonials } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                        <Quote className="w-10 h-10 text-primary/20 mb-4" />
                        <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                        <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="font-semibold text-lg">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export function TestimonialsSection() {
    return (
        <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What Our Salem Clients Say
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Trusted by leading industries across Salem and Tamil Nadu
                    </p>
                </div>
                <Testimonials />
            </div>
        </section>
    )
}
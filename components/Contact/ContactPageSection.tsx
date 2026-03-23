'use client';

import { useCallback, useState } from 'react';
import { motion } from 'motion/react';
import { Building2, PhoneCall, MailOpen, Send, Loader2, CheckCircle2, Facebook, Instagram, Linkedin, Twitter, Paperclip } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import AnimatedFileUpload from '@/components/ui/smoothui/animated-file-upload';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";




const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export default function ContactPageSection({ type = 'all' }: { type?: 'all' | 'office' | 'factories' }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'India',
    state: '',
    place: '',
    message: '',
    files: [] as File[],
  });



  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/mqaeveve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", country: "India", state: "", place: "", message: "", files: [] });
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFilesSelected = (files: File[]) => {
    setFormData(prev => ({ ...prev, files }));
  };



  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <br />
        {/* Breadcrumb Navigation */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={type === 'all' ? "/contact" : "/contact"}>{type === 'all' ? "Contact" : "Contact"}</BreadcrumbLink>
            </BreadcrumbItem>
            {type !== 'all' && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{type === 'office' ? "Office" : "Factories"}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        <br />
        {/* Google Maps Section */}
        {type !== 'factories' && (
          <div className="mb-16">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.4290799190994!2d78.1295800748189!3d11.663973088543955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf10014dbf19f%3A0x520837699ba7429a!2sSM%20Electricals%20Office!5e0!3m2!1sen!2sin!4v1774069581611!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="SM ELECTRICAL Location - Salem, Tamil Nadu"
              />
              {/* Map Overlay Pin */}
              <div className="absolute top-4 right-4 z-10">
                <Button asChild variant="secondary" className="shadow-lg bg-white/90 hover:bg-white text-primary flex items-center gap-2">
                  <a 
                    href="https://maps.app.goo.gl/4XmX2c5DH4wHUT9i8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Building2 className="w-4 h-4" />
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}

        {type === 'factories' && (
          <div className="mb-16 text-center py-12 bg-muted rounded-lg border-2 border-dashed">
            <h3 className="text-xl font-semibold mb-2">Factory Location map Coming Soon</h3>
            <p className="text-muted-foreground">Our new manufacturing facility details will be updated here shortly.</p>
          </div>
        )}

        {/* Contact Information and Form Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Keep in touch with us */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Keep in touch with us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At SM ELECTRICAL, our commitment is simple deliver dependable electrical solutions that power progress. Connect with us to discuss your electrical needs or request a professional consultation.
              </p>
            </div>

            <div className="space-y-6">
              {/* Office Address */}
              {(type === 'all' || type === 'office') && (
                <BlurFade delay={0.2} inView>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Address</h3>
                      <a
                        href="https://maps.app.goo.gl/Y55fdTwe5i7x6MBh8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                      >
                        95/3, 1st Floor, Settu Complex, Opposite Neuro Fundation, South STREET, 3 Road, Palapatti, Salem-636009, Tamil Nadu
                      </a>
                    </div>
                  </div>
                </BlurFade>
              )}

              {/* Factories Address */}
              {(type === 'all' || type === 'factories') && (
                <BlurFade delay={0.2} inView>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Factories Address</h3>
                      <div className="text-muted-foreground leading-relaxed">
                        Details Coming Soon
                      </div>
                    </div>
                  </div>
                </BlurFade>
              )}

              {/* Phone */}
              <BlurFade delay={0.3} inView>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full bg-primary/10">
                      <PhoneCall className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Number</h3>
                      <div className="flex flex-col gap-2">
                        <a
                          href="tel:+919360710100"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (+91) 93607 10100
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>

              {/* Email */}
              <BlurFade delay={0.4} inView>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-full bg-primary/10">
                    <MailOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@smelectrical.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@smelectrical.com
                    </a>
                  </div>
                </div>
              </BlurFade>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 p-2 rounded-full bg-primary/10">
                  <div className="h-5 w-5 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://wa.me/919360710100?text=Hi%20SM%20ELECTRICAL%2C%20I%20want%20to%20know%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-200"
                      aria-label="WhatsApp"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M19.11 17.41c-.28-.14-1.65-.82-1.9-.91-.25-.09-.43-.14-.61.14-.18.28-.7.91-.86 1.1-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.35-.25.28-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.83.14.18 1.93 2.95 4.68 4.13.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32Z" />
                        <path d="M26.67 5.33A14.5 14.5 0 0 0 3.58 22.3L2 30l7.86-1.55A14.5 14.5 0 0 0 30.5 16c0-3.87-1.5-7.51-3.83-10.67Zm-10.67 23a12 12 0 0 1-6.1-1.67l-.44-.26-4.66.92.94-4.54-.29-.47A12 12 0 1 1 28 16c0 6.63-5.37 12-12 12Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Send a Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Send a Message
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a project in mind or need a custom panel solution? Send us a message and our technical team will get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
                    required
                    className="h-11 bg-white text-black border-input"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                    required
                    className="h-11 bg-white text-black border-input"
                  />
                </div>
              </div>

              {/* Country, State and Place Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Country */}
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    type="text"
                    value={formData.country}
                    disabled
                    className="h-11 bg-muted text-muted-foreground cursor-not-allowed"
                  />
                </div>

                {/* State */}
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <div className="relative">
                    <select
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      required
                      className="flex h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-no-repeat bg-[right_0.75rem_center] bg-[length:1rem_1rem] text-black"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
                    >
                      <option value="" disabled>Select State</option>
                      {INDIAN_STATES.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Place */}
                <div className="space-y-2">
                  <Label htmlFor="place">Place</Label>
                  <Input
                    id="place"
                    type="text"
                    placeholder="Enter Place"
                    value={formData.place}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('place', e.target.value)}
                    required
                    className="h-11 bg-white text-black border-input"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-4">
                <Label htmlFor="file">Attachments (Optional)</Label>
                <AnimatedFileUpload 
                  onFilesSelected={handleFilesSelected}
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  maxSize={10 * 1024 * 1024} // 10MB
                />
              </div>

              {/* Message */}

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter Message"
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('message', e.target.value)}
                  required
                  className="min-h-[120px] resize-y bg-white text-black border-input focus-visible:ring-primary/50"
                />
              </div>


              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary h-11"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


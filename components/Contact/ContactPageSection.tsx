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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";



export default function ContactPageSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '', file: null });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
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
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <br />
        {/* Google Maps Section */}
        <div className="mb-16">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="SM ELECTRICAL Location"
            />
          </div>
        </div>

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
              {/* Address */}
              <BlurFade delay={0.2} inView>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-full bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <a
                      href="https://maps.app.goo.gl/Y55fdTwe5i7x6MBh8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                    >
                      95/3, First Floor, South Street, Settu Complex, Opp Neuro Foundation Hospital, Three Roads, Salem - 636009
                    </a>
                  </div>
                </div>
              </BlurFade>

              {/* Phone */}
              <BlurFade delay={0.3} inView>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full bg-primary/10">
                      <PhoneCall className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone Office</h3>
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
                      href="https://wa.me/919443234992?text=Hi%20SM%20ELECTRICAL%2C%20I%20want%20to%20know%20more%20about%20your%20services."
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
                  className="h-11 bg-background text-foreground"
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
                  className="h-11 bg-background text-foreground"
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file">Attachment (Optional)</Label>
                <div className="relative">
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    className="h-11 bg-background text-foreground file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer pt-2"
                  />
                  <Paperclip className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
                {formData.file && (
                  <p className="text-xs text-primary font-medium px-1">
                    Selected: {formData.file.name}
                  </p>
                )}
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
                  className="min-h-[120px] resize-y bg-background text-foreground"
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


'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import AnimatedFileUpload from '@/components/ui/smoothui/animated-file-upload';

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

interface SampleTestFormProps {
    trigger: React.ReactNode;
}

export function SampleTestForm({ trigger }: SampleTestFormProps) {
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
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Sample Test Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast.success("Your request has been sent successfully!");
        setFormData({ name: "", email: "", country: "India", state: "", place: "", message: "", files: [] });
        setIsOpen(false);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send request. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] max-h-[95vh] overflow-y-auto bg-[#F0F7FF] border-none shadow-2xl p-0">
        <div className="p-6 md:p-8">
          <DialogHeader className="mb-8">
            <DialogTitle className="text-3xl font-extrabold text-[#002b5c] font-sans">Request Form</DialogTitle>
            <DialogDescription className="text-gray-600 text-base">
              Please fill out the form below to get in touch with our team.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="popup-name" className="text-[#002b5c] font-bold text-sm">Full Name</Label>
                <Input
                  id="popup-name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="bg-white text-black border-none h-14 rounded-xl shadow-sm focus-visible:ring-primary/40 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="popup-email" className="text-[#002b5c] font-bold text-sm">Email</Label>
                <Input
                  id="popup-email"
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="bg-white text-black border-none h-14 rounded-xl shadow-sm focus-visible:ring-primary/40 text-base"
                />
              </div>
            </div>

            {/* Row 2: Country, State, Place */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="popup-country" className="text-[#002b5c] font-bold text-sm">Country</Label>
                <Input
                  id="popup-country"
                  value={formData.country}
                  disabled
                  className="bg-blue-100/50 text-gray-500 border-none h-14 rounded-xl shadow-sm cursor-not-allowed font-medium"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="popup-state" className="text-[#002b5c] font-bold text-sm">State</Label>
                <div className="relative">
                  <select
                    id="popup-state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    required
                    className="flex h-14 w-full rounded-xl border-none bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.2rem_1.2rem] text-black shadow-sm"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
                  >
                    <option value="" disabled>Select State</option>
                    {INDIAN_STATES.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="popup-place" className="text-[#002b5c] font-bold text-sm">Place</Label>
                <Input
                  id="popup-place"
                  placeholder="Enter Place"
                  value={formData.place}
                  onChange={(e) => handleInputChange('place', e.target.value)}
                  required
                  className="bg-white text-black border-none h-14 rounded-xl shadow-sm focus-visible:ring-primary/40 text-base"
                />
              </div>
            </div>

            {/* Row 3: Attachments */}
            <div className="space-y-2">
              <Label htmlFor="popup-file" className="text-[#002b5c] font-bold text-sm">Attachments (Optional)</Label>
              <div className="bg-white rounded-xl p-1 shadow-sm">
                <AnimatedFileUpload 
                  onFilesSelected={handleFilesSelected}
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  maxSize={10 * 1024 * 1024} // 10MB
                />
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="space-y-2">
              <Label htmlFor="popup-message" className="text-[#002b5c] font-bold text-sm">Message</Label>
              <Textarea
                id="popup-message"
                placeholder="Enter Message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
                className="min-h-[140px] bg-white text-black border-none rounded-xl shadow-sm focus-visible:ring-primary/40 text-base pt-4"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-[#002b5c] text-white hover:bg-[#003a7a] font-bold text-lg rounded-xl shadow-xl transition-all hover:scale-[1.02] active:scale-95">
              {isSubmitting ? (
                <span className="flex items-center">
                  <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                  Submitting Request...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-5 w-5" />
                  Submit Request
                </span>
              )}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

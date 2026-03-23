'use client';

import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { cn } from '@/lib/utils';

export const FloatingWhatsApp = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
                duration: 0.3,
                ease: 'easeOut',
            }}
            className="fixed bottom-6 right-6 z-50"
        >
            <a
                href="https://wa.me/919360710100"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20",
                    "transition-transform duration-300 hover:rotate-12"
                )}
                aria-label="Chat on WhatsApp"
            >
                <WhatsAppIcon sx={{ fontSize: 32 }} />
            </a>
        </motion.div>
    );
};

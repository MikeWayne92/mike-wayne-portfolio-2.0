"use client";

import { useEffect } from "react";
import Script from "next/script";
import { motion } from "framer-motion";

const badges = [
  {
    id: "6ed5df84-aa41-4185-a1fe-797b00f78420",
    host: "https://www.credly.com",
  },
  {
    id: "e432a10d-c3d5-45dd-b92c-6ff762729bf6",
    host: "https://www.credly.com",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Certifications</h2>
        <p className="text-gray-400 mb-12">
          Verified credentials from industry-recognized platforms.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {badges.map((badge) => (
            <div
              key={badge.id}
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id={badge.id}
              data-share-badge-host={badge.host}
            />
          ))}
        </div>
      </motion.div>

      {/* Load Credly script ONCE using Next.js Script component */}
      <Script
        src="//cdn.credly.com/assets/utilities/embed.js"
        strategy="lazyOnload"
      />
    </section>
  );
}

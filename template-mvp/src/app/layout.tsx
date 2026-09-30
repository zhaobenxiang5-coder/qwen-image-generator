import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qwen Image 2.1 Online Generator - Fast Free AI Image Creator",
  description: "Generate high-fidelity AI images with Qwen Image 2.1 online for free. Fast cloud rendering, uncensored prompts, text-to-image and inpainting editor.",
  keywords: ["qwen image 2.1", "qwen image 2.1 generator", "qwen image editor online", "free ai image generator 2026"],
  openGraph: {
    title: "Qwen Image 2.1 Online Generator - Fast Free AI Image Creator",
    description: "Generate high-fidelity AI images with Qwen Image 2.1 online for free. Powered by Qwen's latest 2.1 vision model.",
    url: "https://qwen-image.vercel.app",
    siteName: "QwenImageStudio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qwen Image 2.1 Generator - Fast & Free Online",
    description: "Experience the breakthrough Qwen Image 2.1 text-to-image tool directly in your browser.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org WebApplication & FAQ structured data for Google & ChatGPT GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Qwen Image 2.1 Generator",
        "url": "https://qwen-image.vercel.app",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "description": "Free online web interface for Qwen Image 2.1 model. Fast text-to-image synthesis and multi-modal creative generation."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Qwen Image 2.1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Qwen Image 2.1 is the latest state-of-the-art multimodal vision generation model released by the Qwen team, offering unmatched photo-realism, fine-grained text rendering, and rapid 6-step inference."
            }
          },
          {
            "@type": "Question",
            "name": "How to use Qwen Image 2.1 online for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply enter your descriptive prompt in the tool on this page and click 'Generate Now'. Free trial GPU slots are provided without requiring local CUDA hardware."
            }
          },
          {
            "@type": "Question",
            "name": "Is commercial use permitted?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all assets generated via Qwen Image 2.1 Studio come with commercial rights for marketing, game design, and digital artwork."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}

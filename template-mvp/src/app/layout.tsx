import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Fast Tool - Free Online Generator",
  description: "Generate high-quality AI outputs instantly online for free. Fast, high quality, and easy to use.",
  openGraph: {
    title: "AI Fast Tool - Free Online Generator",
    description: "Instant AI tool online. Powered by the latest AI technology.",
    url: "https://your-mvp-domain.com",
    siteName: "AIFastTool",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fast Tool - Free Online Generator",
    description: "Generate high quality AI outputs in seconds.",
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
        "name": "AI Fast Tool",
        "url": "https://your-mvp-domain.com",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "description": "Instant online AI generation tool with high fidelity and free trials."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AI Fast Tool?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Fast Tool is an online platform that enables users to generate and convert AI assets quickly without local hardware installation."
            }
          },
          {
            "@type": "Question",
            "name": "Is it free to use online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, free trial credits are provided immediately upon visiting or creating an account."
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

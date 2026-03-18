export const seo = {
  title: "Vogue Hair Studio | Ekskluzywna Stylizacja",
  description: "Ekskluzywna stylizacja włosów w sercu miasta. Poczuj luksus, na który zasługujesz. Strzyżenia, koloryzacja i pielęgnacja premium.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://voguehairstudio.pl",
    site_name: "Vogue Hair Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vogue Hair Studio - Wnętrze",
      },
    ],
  },
  twitter: {
    handle: "@voguehairstudio",
    site: "@voguehairstudio",
    cardType: "summary_large_image",
  },
};

export const generateHairSalonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Vogue Hair Studio",
    image: "https://voguehairstudio.pl/og-image.jpg",
    "@id": "https://voguehairstudio.pl",
    url: "https://voguehairstudio.pl",
    telephone: "+48123456789",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Złota 44",
      addressLocality: "Warszawa",
      postalCode: "00-120",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.2307,
      longitude: 21.0028,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://facebook.com/voguehairstudio",
      "https://instagram.com/voguehairstudio",
    ],
  };
};

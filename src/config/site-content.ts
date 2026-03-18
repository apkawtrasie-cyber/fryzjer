export const siteContent = {
  global: {
    name: "Vogue Hair Studio",
    tagline: "Ekskluzywna stylizacja włosów w sercu miasta. Poczuj luksus, na który zasługujesz.",
    description: "Najlepszy salon fryzjerski w mieście. Oferujemy luksusowe strzyżenia, koloryzacje i zabiegi pielęgnacyjne.",
    url: "https://voguehairstudio.pl", // Zmień na docelową domenę
    locale: "pl_PL",
    currency: "PLN",
  },
  contact: {
    address: "ul. Złota 44, 00-120 Warszawa",
    phone: "+48 123 456 789",
    email: "kontakt@voguehairstudio.pl",
    openingHours: [
      { day: "Poniedziałek - Piątek", hours: "09:00 - 20:00" },
      { day: "Sobota", hours: "10:00 - 16:00" },
      { day: "Niedziela", hours: "Zamknięte" },
    ],
    social: {
      instagram: "https://instagram.com/voguehairstudio",
      facebook: "https://facebook.com/voguehairstudio",
      tiktok: "https://tiktok.com/@voguehairstudio",
    },
  },
  hero: {
    title: "VOGUE HAIR STUDIO",
    subtitle: "Ekskluzywna stylizacja włosów w sercu miasta. Poczuj luksus, na który zasługujesz.",
    ctaPrimary: "UMÓW WIZYTĘ",
    ctaSecondary: "NASZE USŁUGI",
  },
  pricing: {
    title: "MENU USŁUG",
    subtitle: "Luksusowe Doświadczenie",
    categories: [
      {
        id: "cutting",
        name: "STRZYŻENIE I STYLIZACJA",
        icon: "Scissors",
        services: [
          {
            name: "Strzyżenie męskie",
            description: "Precyzyjne cięcie, personalizowana konsultacja, mycie z masażem głowy oraz rytuał gorącego ręcznika.",
            price: "60 PLN",
            duration: "30 MIN",
          },
          {
            name: "Strzyżenie damskie",
            description: "Kreatywne strzyżenie dopasowane do kształtu twarzy, mycie pielęgnacyjne oraz modelowanie Premium.",
            price: "od 180 PLN",
            duration: "60-90 MIN",
          },
        ],
      },
      {
        id: "color",
        name: "KOLORYZACJA",
        icon: "Palette",
        services: [
          {
            name: "Koloryzacja Premium",
            description: "Jednolita koloryzacja lub refleksy przy użyciu luksusowych farb bez amoniaku, chroniących strukturę włosa.",
            price: "od 350 PLN",
            duration: "120-180 MIN",
          },
        ],
      },
      {
        id: "care",
        name: "PIELĘGNACJA",
        icon: "Sparkles",
        services: [
          {
            name: "Pielęgnacja Keratynowa",
            description: "Intensywna kuracja wygładzająca i odbudowująca, nadająca włosom lustrzany blask i jedwabistość.",
            price: "od 500 PLN",
            duration: "150 MIN",
          },
        ],
      },
    ],
  },
  gallery: {
    title: "NASZE PORTFOLIO",
    subtitle: "Odkryj artyzm naszych mistrzów stylizacji poprzez starannie wyselekcjonowaną kolekcję metamorfoz.",
    images: [
      { src: "/images/galeria/1.png", alt: "Nowoczesne Cięcie" },
      { src: "/images/galeria/2.png", alt: "Balayage" },
      { src: "/images/galeria/3.png", alt: "Precyzyjne Strzyżenie" },
      { src: "/images/galeria/4.png", alt: "Stylizacja Loków" },
      { src: "/images/galeria/5.png", alt: "Srebrne Włosy" },
      { src: "/images/galeria/6.png", alt: "Koloryzacja" },
      { src: "/images/galeria/7.png", alt: "Strzyżenie Męskie" },
      { src: "/images/galeria/8.png", alt: "Fryzura Okolicznościowa" },
    ],
    beforeAfter: {
      title: "Przed i Po",
      items: [
        {
          before: "/images/gallery/before-1.jpg",
          after: "/images/gallery/after-1.jpg",
          title: "Pełna Korekta Koloru",
          stylist: "Elena M.",
        },
      ],
    },
  },
  social: {
    title: "BĄDŹ Z NAMI W KONTAKCIE",
    subtitle: "Oznacz nas na swoich zdjęciach, aby mieć szansę pojawić się na naszej oficjalnej stronie!",
    handle: "@VogueHairStudio",
    cta: "Obserwuj @VogueHairStudio",
  }
};

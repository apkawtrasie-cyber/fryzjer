export type Language = 'pl' | 'en' | 'de' | 'fr' | 'it';

export interface Translations {
  nav: {
    services: string;
    gallery: string;
    about: string;
    contact: string;
    home: string;
    call: string;
  };
  hero: {
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    founderTitle: string;
    story1: string;
    story2: string;
    story3: string;
    stats: {
      experience: string;
      clients: string;
      products: string;
      standard: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    categories: Array<{
      name: string;
      services: Array<{ name: string; description: string }>;
    }>;
  };
  gallery: {
    title: string;
    subtitle: string;
    zoomHint: string;
    lightboxTitle: string;
    lightboxDesc: string;
    images: Array<{ alt: string }>;
    social: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    howToGet: string;
    callDesc: string;
    callButton: string;
    openingHours: Array<{ day: string; hours: string }>;
  };
  footer: {
    contactHeading: string;
    hoursHeading: string;
    description: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, Translations> = {
  pl: {
    nav: {
      services: 'USŁUGI',
      gallery: 'GALERIA',
      about: 'O NAS',
      contact: 'KONTAKT',
      home: 'HOME',
      call: 'ZADZWOŃ',
    },
    hero: {
      subtitle: 'Ekskluzywna stylizacja włosów w sercu miasta. Poczuj luksus, na który zasługujesz.',
      cta: 'ZADZWOŃ',
    },
    about: {
      title: 'O Nas',
      subtitle: 'Pasja, doświadczenie i miłość do piękna',
      founderTitle: 'Założycielka & Master Stylist',
      story1:
        'Vogue Hair Studio to efekt 15 lat pasji i nieustannego dążenia do perfekcji. Wszystko zaczęło się od małego salonu w centrum Warszawy, gdzie Elena Kowalska – absolwentka prestiżowej Akademii Fryzjerskiej w Paryżu – postanowiła stworzyć miejsce, w którym każdy klient poczuje się wyjątkowo.',
      story2:
        '"Wierzę, że fryzjerstwo to sztuka. Każde cięcie, każdy kolor to opowieść, którą tworzymy wspólnie z klientem. Moja misja to nie tylko metamorfoza włosów, ale przede wszystkim budowanie pewności siebie i podkreślanie naturalnego piękna."',
      story3:
        'Dziś Vogue Hair Studio to zespół wykwalifikowanych stylistów, którzy dzielą tę samą filozofię – indywidualne podejście, najwyższa jakość produktów i nieustanne podnoszenie kwalifikacji na międzynarodowych szkoleniach.',
      stats: {
        experience: 'Doświadczenia',
        clients: 'Zadowolonych klientów',
        products: 'Produkty',
        standard: 'Standard',
      },
    },
    pricing: {
      title: 'MENU USŁUG',
      subtitle: 'Luksusowe Doświadczenie',
      categories: [
        {
          name: 'STRZYŻENIE I STYLIZACJA',
          services: [
            {
              name: 'Strzyżenie męskie',
              description: 'Precyzyjne cięcie, personalizowana konsultacja, mycie z masażem głowy oraz rytuał gorącego ręcznika.',
            },
            {
              name: 'Strzyżenie damskie',
              description: 'Kreatywne strzyżenie dopasowane do kształtu twarzy, mycie pielęgnacyjne oraz modelowanie Premium.',
            },
          ],
        },
        {
          name: 'KOLORYZACJA',
          services: [
            {
              name: 'Koloryzacja Premium',
              description: 'Jednolita koloryzacja lub refleksy przy użyciu luksusowych farb bez amoniaku, chroniących strukturę włosa.',
            },
          ],
        },
        {
          name: 'PIELĘGNACJA',
          services: [
            {
              name: 'Pielęgnacja Keratynowa',
              description: 'Intensywna kuracja wygładzająca i odbudowująca, nadająca włosom lustrzany blask i jedwabistość.',
            },
          ],
        },
      ],
    },
    gallery: {
      title: 'Galeria',
      subtitle: 'Odkryj efekty naszej pracy i zainspiruj się metamorfozami naszych klientów.',
      zoomHint: 'Powiększ zdjęcie',
      lightboxTitle: 'Podgląd zdjęcia',
      lightboxDesc: 'Powiększone zdjęcie z galerii',
      images: [
        { alt: 'Koloryzacja blond' },
        { alt: 'Strzyżenie damskie' },
        { alt: 'Stylizacja okolicznościowa' },
        { alt: 'Pielęgnacja keratynowa' },
        { alt: 'Balayage' },
        { alt: 'Strzyżenie męskie' },
        { alt: 'Koloryzacja 3D' },
        { alt: 'Przedłużanie włosów' },
      ],
      social: {
        title: 'BĄDŹ Z NAMI W KONTAKCIE',
        subtitle: 'Oznacz nas na swoich zdjęciach, aby mieć szansę pojawić się na naszej oficjalnej stronie!',
        cta: 'Obserwuj @VogueHairStudio',
      },
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Umów się na wizytę',
      addressLabel: 'Adres Salonu',
      phoneLabel: 'Telefon',
      emailLabel: 'Email',
      hoursLabel: 'Godziny Otwarcia',
      howToGet: 'Jak dojechać? →',
      callDesc: 'Zadzwoń do nas, aby umówić wizytę lub skonsultować metamorfozę.',
      callButton: 'ZADZWOŃ',
      openingHours: [
        { day: 'Poniedziałek - Piątek', hours: '09:00 - 20:00' },
        { day: 'Sobota', hours: '10:00 - 16:00' },
        { day: 'Niedziela', hours: 'Zamknięte' },
      ],
    },
    footer: {
      contactHeading: 'KONTAKT',
      hoursHeading: 'GODZINY OTWARCIA',
      description: 'Najlepszy salon fryzjerski w mieście. Oferujemy luksusowe strzyżenia, koloryzacje i zabiegi pielęgnacyjne.',
      rights: 'Wszelkie prawa zastrzeżone.',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin',
    },
  },

  en: {
    nav: {
      services: 'SERVICES',
      gallery: 'GALLERY',
      about: 'ABOUT',
      contact: 'CONTACT',
      home: 'HOME',
      call: 'CALL US',
    },
    hero: {
      subtitle: 'Exclusive hair styling in the heart of the city. Feel the luxury you deserve.',
      cta: 'CALL US',
    },
    about: {
      title: 'About Us',
      subtitle: 'Passion, experience and love of beauty',
      founderTitle: 'Founder & Master Stylist',
      story1:
        'Vogue Hair Studio is the result of 15 years of passion and constant pursuit of perfection. It all started with a small salon in the heart of Warsaw, where Elena Kowalska – a graduate of the prestigious Paris Academy of Hairdressing – decided to create a place where every client would feel exceptional.',
      story2:
        '"I believe that hairdressing is an art. Every cut, every color is a story we create together with the client. My mission is not just a hair transformation, but above all building self-confidence and highlighting natural beauty."',
      story3:
        'Today, Vogue Hair Studio is a team of qualified stylists who share the same philosophy – an individual approach, the highest quality products, and continuous skills development through international training.',
      stats: {
        experience: 'Of experience',
        clients: 'Happy clients',
        products: 'Products',
        standard: 'Standard',
      },
    },
    pricing: {
      title: 'SERVICE MENU',
      subtitle: 'Luxurious Experience',
      categories: [
        {
          name: 'CUTTING & STYLING',
          services: [
            {
              name: "Men's Haircut",
              description: 'Precise cut, personalized consultation, wash with head massage and hot towel ritual.',
            },
            {
              name: "Women's Haircut",
              description: 'Creative cut tailored to face shape, care wash and Premium styling.',
            },
          ],
        },
        {
          name: 'COLORING',
          services: [
            {
              name: 'Premium Coloring',
              description: 'Solid coloring or highlights using luxury ammonia-free dyes, protecting the hair structure.',
            },
          ],
        },
        {
          name: 'CARE',
          services: [
            {
              name: 'Keratin Treatment',
              description: 'Intensive smoothing and rebuilding treatment, giving hair a mirror shine and silkiness.',
            },
          ],
        },
      ],
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Discover the effects of our work and get inspired by our clients transformations.',
      zoomHint: 'Zoom image',
      lightboxTitle: 'Image Preview',
      lightboxDesc: 'Enlarged gallery image',
      images: [
        { alt: 'Blonde Coloring' },
        { alt: "Women's Haircut" },
        { alt: 'Occasional Styling' },
        { alt: 'Keratin Treatment' },
        { alt: 'Balayage' },
        { alt: "Men's Haircut" },
        { alt: '3D Coloring' },
        { alt: 'Hair Extensions' },
      ],
      social: {
        title: 'STAY IN TOUCH WITH US',
        subtitle: 'Tag us in your photos for a chance to appear on our official page!',
        cta: 'Follow @VogueHairStudio',
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Book an Appointment',
      addressLabel: 'Salon Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      hoursLabel: 'Opening Hours',
      howToGet: 'Get directions →',
      callDesc: 'Call us to book an appointment or consult about a transformation.',
      callButton: 'CALL',
      openingHours: [
        { day: 'Monday - Friday', hours: '09:00 - 20:00' },
        { day: 'Saturday', hours: '10:00 - 16:00' },
        { day: 'Sunday', hours: 'Closed' },
      ],
    },
    footer: {
      contactHeading: 'CONTACT',
      hoursHeading: 'OPENING HOURS',
      description: 'The best hair salon in the city. We offer luxurious haircuts, colorings and care treatments.',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },

  de: {
    nav: {
      services: 'LEISTUNGEN',
      gallery: 'GALERIE',
      about: 'ÜBER UNS',
      contact: 'KONTAKT',
      home: 'START',
      call: 'ANRUFEN',
    },
    hero: {
      subtitle: 'Exklusives Hairstyling im Herzen der Stadt. Erleben Sie den Luxus, den Sie verdienen.',
      cta: 'ANRUFEN',
    },
    about: {
      title: 'Über Uns',
      subtitle: 'Leidenschaft, Erfahrung und Liebe zur Schönheit',
      founderTitle: 'Gründerin & Master Stylistin',
      story1:
        'Vogue Hair Studio ist das Ergebnis von 15 Jahren Leidenschaft und unaufhörlichem Streben nach Perfektion. Alles begann mit einem kleinen Salon im Herzen Warschaus, wo Elena Kowalska – Absolventin der renommierten Pariser Friseurakademie – beschloss, einen Ort zu schaffen, an dem sich jeder Kunde besonders fühlt.',
      story2:
        '„Ich glaube, dass Friseurkunst eine Kunst ist. Jeder Schnitt, jede Farbe ist eine Geschichte, die wir gemeinsam mit dem Kunden erschaffen. Meine Mission ist nicht nur eine Haartransformation, sondern vor allem das Aufbauen von Selbstvertrauen und das Hervorheben natürlicher Schönheit."',
      story3:
        'Heute ist Vogue Hair Studio ein Team qualifizierter Stylisten, die dieselbe Philosophie teilen – individueller Ansatz, höchste Produktqualität und ständige Weiterbildung durch internationale Schulungen.',
      stats: {
        experience: 'Erfahrung',
        clients: 'Zufriedene Kunden',
        products: 'Produkte',
        standard: 'Standard',
      },
    },
    pricing: {
      title: 'LEISTUNGSMENÜ',
      subtitle: 'Luxuriöses Erlebnis',
      categories: [
        {
          name: 'HAARSCHNITT & STYLING',
          services: [
            {
              name: 'Herrenhaarschnitt',
              description: 'Präziser Schnitt, personalisierte Beratung, Waschen mit Kopfmassage und Heißtuchzeremonie.',
            },
            {
              name: 'Damenhaarschnitt',
              description: 'Kreativer Schnitt angepasst an die Gesichtsform, Pflegewäsche und Premium-Styling.',
            },
          ],
        },
        {
          name: 'FÄRBUNG',
          services: [
            {
              name: 'Premium-Färbung',
              description: 'Einheitliche Färbung oder Highlights mit luxuriösen ammoniakfreien Farben zum Schutz der Haarstruktur.',
            },
          ],
        },
        {
          name: 'PFLEGE',
          services: [
            {
              name: 'Keratin-Behandlung',
              description: 'Intensive Glättungs- und Wiederaufbaubehandlung für spiegelglänzendes und seidiges Haar.',
            },
          ],
        },
      ],
    },
    gallery: {
      title: 'Galerie',
      subtitle: 'Entdecken Sie die Ergebnisse unserer Arbeit und lassen Sie sich von den Transformationen unserer Kunden inspirieren.',
      zoomHint: 'Bild vergrößern',
      lightboxTitle: 'Bildvorschau',
      lightboxDesc: 'Vergrößertes Galeriebild',
      images: [
        { alt: 'Blondfärbung' },
        { alt: 'Damenhaarschnitt' },
        { alt: 'Festliches Styling' },
        { alt: 'Keratin-Behandlung' },
        { alt: 'Balayage' },
        { alt: 'Herrenhaarschnitt' },
        { alt: '3D-Färbung' },
        { alt: 'Haarverlängerung' },
      ],
      social: {
        title: 'BLEIBEN SIE MIT UNS IN KONTAKT',
        subtitle: 'Markieren Sie uns auf Ihren Fotos für die Chance, auf unserer offiziellen Seite zu erscheinen!',
        cta: 'Folgen @VogueHairStudio',
      },
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Termin vereinbaren',
      addressLabel: 'Salonadresse',
      phoneLabel: 'Telefon',
      emailLabel: 'E-Mail',
      hoursLabel: 'Öffnungszeiten',
      howToGet: 'Wegbeschreibung →',
      callDesc: 'Rufen Sie uns an, um einen Termin zu vereinbaren oder eine Transformation zu besprechen.',
      callButton: 'ANRUFEN',
      openingHours: [
        { day: 'Montag - Freitag', hours: '09:00 - 20:00' },
        { day: 'Samstag', hours: '10:00 - 16:00' },
        { day: 'Sonntag', hours: 'Geschlossen' },
      ],
    },
    footer: {
      contactHeading: 'KONTAKT',
      hoursHeading: 'ÖFFNUNGSZEITEN',
      description: 'Der beste Friseursalon der Stadt. Wir bieten luxuriöse Haarschnitte, Färbungen und Pflegebehandlungen.',
      rights: 'Alle Rechte vorbehalten.',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
    },
  },

  fr: {
    nav: {
      services: 'SERVICES',
      gallery: 'GALERIE',
      about: 'À PROPOS',
      contact: 'CONTACT',
      home: 'ACCUEIL',
      call: 'APPELER',
    },
    hero: {
      subtitle: 'Coiffure exclusive au cœur de la ville. Ressentez le luxe que vous méritez.',
      cta: 'APPELER',
    },
    about: {
      title: 'À Propos',
      subtitle: 'Passion, expérience et amour de la beauté',
      founderTitle: 'Fondatrice & Master Styliste',
      story1:
        "Vogue Hair Studio est le résultat de 15 ans de passion et de quête constante de la perfection. Tout a commencé avec un petit salon au cœur de Varsovie, où Elena Kowalska – diplômée de la prestigieuse Académie de Coiffure de Paris – a décidé de créer un lieu où chaque client se sentirait exceptionnel.",
      story2:
        '"Je crois que la coiffure est un art. Chaque coupe, chaque couleur est une histoire que nous créons ensemble avec le client. Ma mission n\'est pas seulement une transformation des cheveux, mais avant tout construire la confiance en soi et mettre en valeur la beauté naturelle."',
      story3:
        "Aujourd'hui, Vogue Hair Studio est une équipe de stylistes qualifiés qui partagent la même philosophie – une approche individuelle, des produits de la plus haute qualité et une formation continue lors de formations internationales.",
      stats: {
        experience: "D'expérience",
        clients: 'Clients satisfaits',
        products: 'Produits',
        standard: 'Standard',
      },
    },
    pricing: {
      title: 'MENU DE SERVICES',
      subtitle: 'Expérience Luxueuse',
      categories: [
        {
          name: 'COUPE & COIFFAGE',
          services: [
            {
              name: 'Coupe Homme',
              description: 'Coupe précise, consultation personnalisée, lavage avec massage de la tête et rituel serviette chaude.',
            },
            {
              name: 'Coupe Femme',
              description: "Coupe créative adaptée à la forme du visage, lavage soins et coiffage Premium.",
            },
          ],
        },
        {
          name: 'COLORATION',
          services: [
            {
              name: 'Coloration Premium',
              description: "Coloration uniforme ou reflets avec des teintures de luxe sans ammoniaque, protégeant la structure des cheveux.",
            },
          ],
        },
        {
          name: 'SOIN',
          services: [
            {
              name: 'Traitement Kératine',
              description: "Traitement intensif lissant et reconstituant, donnant aux cheveux un brillant miroir et une douceur soyeuse.",
            },
          ],
        },
      ],
    },
    gallery: {
      title: 'Galerie',
      subtitle: 'Découvrez les résultats de notre travail et inspirez-vous des transformations de nos clients.',
      zoomHint: "Agrandir l'image",
      lightboxTitle: "Aperçu de l'image",
      lightboxDesc: 'Image de galerie agrandie',
      images: [
        { alt: 'Coloration Blonde' },
        { alt: 'Coupe Femme' },
        { alt: 'Coiffure de Cérémonie' },
        { alt: 'Traitement Kératine' },
        { alt: 'Balayage' },
        { alt: 'Coupe Homme' },
        { alt: 'Coloration 3D' },
        { alt: 'Extensions de Cheveux' },
      ],
      social: {
        title: 'RESTEZ EN CONTACT AVEC NOUS',
        subtitle: "Taguez-nous sur vos photos pour avoir la chance d'apparaître sur notre page officielle!",
        cta: 'Suivez @VogueHairStudio',
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Prendre Rendez-vous',
      addressLabel: 'Adresse du Salon',
      phoneLabel: 'Téléphone',
      emailLabel: 'Email',
      hoursLabel: "Heures d'Ouverture",
      howToGet: 'Comment y aller? →',
      callDesc: 'Appelez-nous pour prendre rendez-vous ou consulter une transformation.',
      callButton: 'APPELER',
      openingHours: [
        { day: 'Lundi - Vendredi', hours: '09:00 - 20:00' },
        { day: 'Samedi', hours: '10:00 - 16:00' },
        { day: 'Dimanche', hours: 'Fermé' },
      ],
    },
    footer: {
      contactHeading: 'CONTACT',
      hoursHeading: "HEURES D'OUVERTURE",
      description: 'Le meilleur salon de coiffure de la ville. Nous offrons des coupes luxueuses, des colorations et des soins.',
      rights: 'Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: "Conditions d'Utilisation",
    },
  },

  it: {
    nav: {
      services: 'SERVIZI',
      gallery: 'GALLERIA',
      about: 'CHI SIAMO',
      contact: 'CONTATTI',
      home: 'HOME',
      call: 'CHIAMA',
    },
    hero: {
      subtitle: 'Acconciature esclusive nel cuore della città. Senti il lusso che meriti.',
      cta: 'CHIAMA',
    },
    about: {
      title: 'Chi Siamo',
      subtitle: 'Passione, esperienza e amore per la bellezza',
      founderTitle: 'Fondatrice & Master Stilista',
      story1:
        "Vogue Hair Studio è il risultato di 15 anni di passione e costante ricerca della perfezione. Tutto è iniziato con un piccolo salone nel cuore di Varsavia, dove Elena Kowalska – laureata alla prestigiosa Accademia di Acconciatura di Parigi – ha deciso di creare un luogo in cui ogni cliente si sentisse speciale.",
      story2:
        '"Credo che l\'acconciatura sia un\'arte. Ogni taglio, ogni colore è una storia che creiamo insieme al cliente. La mia missione non è solo una trasformazione dei capelli, ma soprattutto costruire la fiducia in se stessi ed esaltare la bellezza naturale."',
      story3:
        "Oggi, Vogue Hair Studio è un team di stilisti qualificati che condividono la stessa filosofia – un approccio individuale, prodotti di altissima qualità e formazione continua attraverso training internazionali.",
      stats: {
        experience: 'Di esperienza',
        clients: 'Clienti soddisfatti',
        products: 'Prodotti',
        standard: 'Standard',
      },
    },
    pricing: {
      title: 'MENU SERVIZI',
      subtitle: 'Esperienza di Lusso',
      categories: [
        {
          name: 'TAGLIO & STYLING',
          services: [
            {
              name: 'Taglio Uomo',
              description: 'Taglio preciso, consulenza personalizzata, lavaggio con massaggio della testa e rituale con asciugamano caldo.',
            },
            {
              name: 'Taglio Donna',
              description: 'Taglio creativo adattato alla forma del viso, lavaggio cura e styling Premium.',
            },
          ],
        },
        {
          name: 'COLORAZIONE',
          services: [
            {
              name: 'Colorazione Premium',
              description: 'Colorazione uniforme o riflessi con tinture di lusso senza ammoniaca, proteggendo la struttura del capello.',
            },
          ],
        },
        {
          name: 'TRATTAMENTO',
          services: [
            {
              name: 'Trattamento alla Cheratina',
              description: 'Trattamento intensivo levigante e ricostruttivo, che dona ai capelli una lucentezza speculare e setosità.',
            },
          ],
        },
      ],
    },
    gallery: {
      title: 'Galleria',
      subtitle: 'Scopri i risultati del nostro lavoro e lasciati ispirare dalle trasformazioni dei nostri clienti.',
      zoomHint: "Ingrandisci l'immagine",
      lightboxTitle: "Anteprima immagine",
      lightboxDesc: 'Immagine della galleria ingrandita',
      images: [
        { alt: 'Colorazione Bionda' },
        { alt: 'Taglio Donna' },
        { alt: 'Acconciatura per Occasioni' },
        { alt: 'Trattamento alla Cheratina' },
        { alt: 'Balayage' },
        { alt: 'Taglio Uomo' },
        { alt: 'Colorazione 3D' },
        { alt: 'Estensioni Capelli' },
      ],
      social: {
        title: 'RIMANI IN CONTATTO CON NOI',
        subtitle: 'Taggaci nelle tue foto per avere la possibilità di apparire sulla nostra pagina ufficiale!',
        cta: 'Segui @VogueHairStudio',
      },
    },
    contact: {
      title: 'Contatti',
      subtitle: 'Prenota un Appuntamento',
      addressLabel: 'Indirizzo del Salone',
      phoneLabel: 'Telefono',
      emailLabel: 'Email',
      hoursLabel: 'Orari di Apertura',
      howToGet: 'Come arrivare? →',
      callDesc: 'Chiamaci per prenotare un appuntamento o consultare una trasformazione.',
      callButton: 'CHIAMA',
      openingHours: [
        { day: 'Lunedì - Venerdì', hours: '09:00 - 20:00' },
        { day: 'Sabato', hours: '10:00 - 16:00' },
        { day: 'Domenica', hours: 'Chiuso' },
      ],
    },
    footer: {
      contactHeading: 'CONTATTI',
      hoursHeading: 'ORARI DI APERTURA',
      description: 'Il miglior salone di acconciatura della città. Offriamo tagli di capelli di lusso, colorazioni e trattamenti di cura.',
      rights: 'Tutti i diritti riservati.',
      privacy: 'Informativa sulla Privacy',
      terms: 'Termini di Servizio',
    },
  },
};

export const languageMeta: Record<Language, { label: string; flag: string; htmlLang: string }> = {
  pl: { label: 'PL', flag: '🇵🇱', htmlLang: 'pl' },
  en: { label: 'EN', flag: '🇬🇧', htmlLang: 'en' },
  de: { label: 'DE', flag: '🇩🇪', htmlLang: 'de' },
  fr: { label: 'FR', flag: '🇫🇷', htmlLang: 'fr' },
  it: { label: 'IT', flag: '🇮🇹', htmlLang: 'it' },
};

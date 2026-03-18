# Logo Files

Umieść następujące pliki SVG w tym folderze:

## Wymagane pliki:

1. **logo_hair_przezroczyste.svg** - Logo główne dla górnego menu (Header)
   - Używane w: `src/components/layout/header/header.tsx`
   - Rozmiar: ~180x60px (skaluje się responsywnie)

2. **favicon_hair.svg** - Logo dla stopki (Footer)
   - Używane w: `src/components/layout/footer/footer.tsx`
   - Rozmiar: ~200x80px (skaluje się responsywnie)

3. **favicon.svg** - Favicon strony (ikona w zakładce przeglądarki)
   - Umieść w: `/public/favicon.svg` (główny folder public, nie w images/logo)
   - Rozmiar: 32x32px lub 64x64px
   - Format: SVG z przezroczystym tłem

## Struktura:
```
/public
├── favicon.svg                    ← Favicon strony
└── /images
    └── /logo
        ├── logo_hair_przezroczyste.svg  ← Logo Header
        ├── favicon_hair.svg             ← Logo Footer
        └── README.md                    ← Ten plik
```

## Zalecenia:
- Używaj SVG dla najlepszej jakości na wszystkich rozdzielczościach
- Upewnij się, że tło jest przezroczyste
- Kolory powinny pasować do palety złoto-czarnej (#B38728, #FBF5B7, #AA771C)

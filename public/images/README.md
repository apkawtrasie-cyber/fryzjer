# Struktura folderów dla obrazów

Umieść swoje obrazy w odpowiednich folderach:

## 📁 Foldery

### `/hero`
- **Przeznaczenie:** Tło główne sekcji Hero
- **Format:** WebP, JPEG
- **Rozmiar:** 1920x1080px lub większe (landscape)
- **Przykład:** `hero-background.jpg`

### `/galeria`
- **Przeznaczenie:** Zdjęcia w galerii (8 zdjęć)
- **Format:** WebP, JPEG
- **Rozmiar:** 800x800px - 1200x1200px (square/portrait)
- **Przykład:** `galeria-1.jpg`, `galeria-2.jpg`, etc.

### `/o_nas`
- **Przeznaczenie:** Zdjęcie Eleny Kowalskiej (założycielka)
- **Format:** WebP, JPEG
- **Rozmiar:** 1000x1400px (portrait)
- **Przykład:** `elena-kowalska.jpg`

### `/kontakt`
- **Przeznaczenie:** Zdjęcie w sekcji kontakt
- **Format:** WebP, JPEG
- **Rozmiar:** 1000x1000px (square)
- **Przykład:** `kontakt-salon.jpg`

### `/logo`
- **Przeznaczenie:** Logo salonu
- **Format:** SVG (zalecane), PNG z przezroczystością
- **Rozmiar:** SVG - dowolny, PNG - min. 500x500px
- **Przykład:** `vogue-hair-logo.svg`

## 🔧 Jak użyć lokalnych obrazów

Po umieszczeniu plików w folderach, zaktualizuj ścieżki w kodzie:

**Zamiast:**
```tsx
src="https://images.unsplash.com/photo-..."
```

**Użyj:**
```tsx
src="/images/hero/hero-background.jpg"
src="/images/galeria/galeria-1.jpg"
src="/images/o_nas/elena-kowalska.jpg"
src="/images/kontakt/kontakt-salon.jpg"
src="/images/logo/vogue-hair-logo.svg"
```

## 📝 Pliki do edycji

- Hero: `src/features/hero/components/hero-section.tsx` (linia 15)
- Galeria: `src/config/site-content.ts` (linie 76-89)
- O Nas: `src/features/about/components/about-section.tsx` (linia 49)
- Kontakt: `src/features/contact/components/contact-section.tsx` (linia 99)
- Logo: `src/components/layout/header/header.tsx` (jeśli chcesz zmienić na obrazkowe)

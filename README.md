# Teneum WMS — serwis produktowy

Statyczny serwis w Astro, publikowany z GitHuba na Netlify. Treści w Markdown.

## Uruchomienie lokalne
    npm install
    npm run dev        # http://localhost:4321

## Publikacja
1. Wrzuć repozytorium na GitHub (prywatne).
2. Netlify → Add new site → Import from Git → wybierz repo. Ustawienia build są w `netlify.toml`.
3. Po zakupie domeny: Netlify → Domain management → dodaj domenę; w `astro.config.mjs` zmień `SITE_URL`, w `public/robots.txt` i `public/llms.txt` adres sitemap/linków.

## Jak dodać stronę
- Proces magazynowy: nowy plik `src/content/procesy/<slug>.md` (wzór: `kompletacja.md`). Strona pojawia się pod `/produkt/procesy/<slug>/`.
- Porównanie: nowy plik `src/content/porownania/<slug>.md` (wzór: `teneum-vs-comarch-wms.md`). Strona pod `/porownania/<slug>/`.
- Pola w nagłówku pliku są sprawdzane przy buildzie (`src/content.config.ts`); brak pola = błąd z czytelnym komunikatem.
- Pozostałe strony (cennik, case studies, demo, dla kogo) to na razie zaślepki w `src/pages/`.

## Zasady treści
Każda strona: pytanie kupującego w H1 → odpowiedź w żółtej ramce (pierwsze, co czyta AI) → przed/po → liczby → treść → FAQ. Data aktualizacji i autor są w stopce i w JSON-LD.

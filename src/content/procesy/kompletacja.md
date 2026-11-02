---
title: "Kompletacja zamówień"
question: "Jak Teneum WMS prowadzi kompletację zamówień?"
answer: "Teneum WMS sam dobiera metodę kompletacji do zamówień z danej godziny (pojedyncza, zbiorcza, falowa, strefowa), wyznacza pracownikowi najkrótszą trasę po regałach i wymaga skanu przy każdym pobraniu, więc błąd zatrzymuje się przy regale, a nie u klienta."
description: "Jak wygląda kompletacja zamówień w Teneum WMS: metody zbiórki, trasa po magazynie, kontrola skanem, liczby z wdrożeń u klientów e-commerce i B2B."
updated: 2026-10-30
author: "Zespół Sente"
order: 3
before: "Magazynier dostaje wydrukowaną listę z ERP, sam decyduje, od którego regału zacząć, i często wraca po tę samą alejkę kilka razy. Pomyłkę w towarze wychwytuje dopiero pakowacz albo klient. W sezonie nowy pracownik potrzebuje kilku dni, żeby nauczyć się rozkładu magazynu."
after: "System łączy zamówienia w fale, przydziela zbiórkę pracownikowi na terminalu albo głosem i prowadzi go lokacja po lokacji w kolejności, która skraca trasę. Każde pobranie potwierdza skan: zły towar lub zła ilość blokują krok. Nowy pracownik zbiera samodzielnie po pierwszej zmianie."
metrics:
  - value: "[x]%"
    label: "mniej błędów kompletacji"
    note: "Klient A, e-commerce, [N] paczek dziennie — do uzupełnienia z benchmarków"
  - value: "[x]"
    label: "linii na godzinę na pracownika"
    note: "Klient B, hurt B2B — do uzupełnienia"
  - value: "1 zmiana"
    label: "wdrożenie nowego pracownika do samodzielnej zbiórki"
faq:
  - q: "Czy Teneum WMS obsługuje kompletację zbiorczą (multi-order)?"
    a: "Tak. System łączy wiele zamówień w jedną trasę i rozdziela towar do pojemników przy stole lub w wózku, co jest standardem w e-commerce przy dużej liczbie małych zamówień."
  - q: "Czy pracownik może zbierać bez terminala, głosem?"
    a: "Tak. Asystent głosowy Teneum WMS prowadzi zbiórkę komendami i potwierdzeniami głosowymi, więc pracownik ma wolne ręce."
  - q: "Jak Teneum wybiera metodę kompletacji?"
    a: "Kierownik ustawia reguły (np. zamówienia jednopozycyjne zbierane zbiorczo, duże zamówienia B2B pojedynczo), a system przydziela metodę automatycznie do każdej fali. Reguły można zmienić opisując je asystentowi AI, bez programisty."
---

## Cztery metody kompletacji w jednym magazynie

Teneum WMS nie zmusza do jednej metody. W tym samym magazynie, tego samego dnia, mogą działać:

| Metoda | Kiedy ma sens | Jak działa w Teneum |
| --- | --- | --- |
| Pojedyncza | Duże zamówienia B2B, towar gabarytowy | Jedno zamówienie, jedna trasa, pojemnik lub paleta |
| Zbiorcza (multi-order) | Dużo małych zamówień e-commerce | Kilkadziesiąt zamówień na jednym wózku, sortowanie przy stole |
| Falowa | Szczyty sezonowe, cut-off kurierów | Zamówienia grupowane według godziny odbioru kuriera |
| Strefowa | Duże magazyny, kilka stref składowania | Każda strefa zbiera swoją część, system scala przy pakowaniu |

## Co dzieje się, gdy towaru nie ma na lokacji

Pracownik zgłasza brak jednym przyciskiem. System od razu wskazuje lokację zapasową, a jeśli jej nie ma, przekazuje pozycję do uzupełnienia i informuje obsługę klienta, zanim zamówienie trafi do pakowania. Stan na lokacji zostaje oznaczony do weryfikacji w najbliższej inwentaryzacji cyklicznej.

## Jak kierownik widzi kompletację

Zamiast raportu na koniec dnia kierownik pyta asystenta AI: „ile linii zebrał dziś każdy pracownik i gdzie były braki”. Dostaje tabelę i wykres, które może zapisać jako stały link na ekranie w magazynie.

## Jak to wygląda u klientów

*Tu wstawiamy jedno anonimowe case study z liczbami przed i po: profil firmy, liczba paczek, wynik po 3 miesiącach.*

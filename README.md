# Downtown VIP

Statisk nettside med de eksisterende Downtown-bildene, navnet **Marius Vestøl** og dagens dato i tidssonen **Europe/Oslo**.

Datoen hentes fra enhetens klokke når siden åpnes. Den oppdateres også mens siden står åpen over midnatt, og når fanen eller vinduet åpnes igjen. Det trengs ingen ny publisering for å bytte dato. Enhetens klokke må være riktig, og JavaScript må være aktivert.

Oppsettet bruker de eksisterende bildefilene og er tilpasset skjermbildene: VIP-merke over navneskiltet, «Pluss 1 stk og gratis inngang», og kursiv informasjon om dørvakt og legitimasjon. Fonten er Arial med Helvetica/sans-serif som reserve.

«Sjekk inn» erstattes ved trykk med en rød melding: `Kan sjekke inn: DD.MM.ÅÅÅÅ kl: HH:MM`. Klokkeslettet hentes idet knappen trykkes og vises i norsk tid, med minutter som i skjermbildet. Tidspunktet beholdes resten av dagen. Ved et nytt døgn skjules den gamle meldingen, dagens dato oppdateres og knappen vises igjen. Oppfriskning av siden nullstiller også meldingen. Dette er lokal visning; det sendes ingen innsjekking til en server.

## Se siden lokalt

Kjør fra denne mappa:

```sh
python3 -m http.server 3000 --bind 127.0.0.1
```

Åpne http://localhost:3000. Siden kan også åpnes direkte fra `index.html`.

## Publiser på Vercel

Legg prosjektet i et Git-repository, importer det i Vercel og velg **Other** som Framework Preset. `vercel.json` angir tom byggekommando og prosjektroten som output-mappe. Det trengs ingen pakkeinstallasjon eller miljøvariabler.

Alternativt kan du kjøre Vercel CLI fra denne mappa:

```sh
npx vercel
```

Følg spørsmålene i terminalen for å opprette og publisere prosjektet. Når forhåndsvisningen er klar, kan produksjonsversjonen publiseres med `npx vercel --prod`.

Se [Vercels dokumentasjon for statiske sider uten byggesteg](https://vercel.com/docs/builds/configure-a-build#skip-build-step).

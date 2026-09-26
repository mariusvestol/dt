# Downtown VIP

Statisk nettside med de eksisterende Downtown-bildene, navnet **Marius Vestøl** og dagens dato i tidssonen **Europe/Oslo**.

Datoen hentes fra enhetens klokke når siden åpnes. Den oppdateres også mens siden står åpen over midnatt, og når fanen eller vinduet åpnes igjen. Det trengs ingen ny publisering for å bytte dato. Enhetens klokke må være riktig, og JavaScript må være aktivert.

Oppsettet er et første utkast basert på bildefilene. Det er ikke sammenlignet med en originalside ennå. «Sjekk inn»-knappen er deaktivert inntil en faktisk innsjekkingsfunksjon er spesifisert og koblet til.

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


# Dokumentation

## Info

- Selve projektet (UI) findes her: `/landrup_root`.


## Tech-stack:

- React (JavaScript framework)
- Next.js (React framework)
- Tailwind (CSS framework)
- React Icons


## Teknisk Dokumentation:

### React

https://react.dev/

JavaScript frontend framework, som bl.a. gør det muligt at dele koden op i komponenter, frem for som traditionelt i hele sider. Man kan se komponenter som skabeloner eller byggeklodser, der kan genbruges overalt i projektet. De indlæses med JavaScript, udskiftes / restruktureres ved nye states, og gengangere behøver ikke genindlæses. Denne type applikationer kaldes 'single-page-applikationer' og tillader, at UI renderes hurtigere, eftersom mindre data skal hentes.

React er et ud af mange populære JavaScript frameworks, som tilbyder lignende funktionalitet. En oplagt grund til at vælge React er, at det er (et af) de(t) ældste (har eksistret siden 2013) og bliver brugt af 57% af alle JavaScript udviklere (* 1). Det gør det ikke nødvendigvis bedre, men betyder at det er let at finde resourser til problemløsning, og der findes et stort økosystem af biblioteker og værktøjer. Det gør det også lettere at finde arbejde. Det er desuden udviklet af (nu) Meta, et af verdens allerstørste firmaer, så man kan godt regne med, at det er et fremtidssikret valg.

(* 1) The JetBrains Blog: "JavaScript and TypeScript Trends 2024", 
https://blog.jetbrains.com/webstorm/2024/02/js-and-ts-trends-2024


### Next.js

https://nextjs.org/

React / JavaScript framework. Da Next.js bygger på React, gør alle ovennævnte fordele sig også gældende her, hvis man skal sammenligne med andre frameworks. Ligesom React har det ovennævnte fordele ved at have mange brugere og er udviklet af Vercel, som også tilbyder moderne og automatiseret hosting.

Next.js har fokus på server-side rendering, som vil sige at JavaScript og eksterne resourser i mange tilfæde kan compile's på serveren, så data kan serveres direkte til klienten. Standarden for React er, at JavaScript compile's på klienten, før UI kan renderes. Server-side rendering kan give hurtigere page load og bedre SEO. Mappebaseret routing gør det også mere intuitivt at skabe routes.

Next.js kommer også med mange værktøjer til forbedring af performance. Bl.a. next/image component, som bl.a. konverterer tungere billedfiltyper til WebP eller AVIF og komprimerer billeder til at matche deres størrelse i viewport. Med next/link kan interne links prefetch'es og cache's, så endnu hurtigere loading kan opnås. Og next/font kan cache Google fonts på serveren, så man undgår layout shift på skrifttypen. Med i installationen tilbydes også Tailwind, som beskrives nedenfor.


### Tailwind

https://tailwindcss.com/

CSS framework med predefinerede 'utility classes'(* 2) til næsten alle CSS properties og mulighed for let at bygge designsystemer som js objekter. Tailwind kommer med faste værdier for f.eks. størrelser og farver (som igen kan redigeres), hvilket automatisk skaber kontinuerlighed.

(* 2) Det er et såkaldt low-level 'utility-first' framework, hvilket vil sige at det bruger classes som værktøjer til enkelte CSS deklarationer, som kan sættes sammen, frem for at en class er møntet et bestemt komponent som traditionelt. Det giver stor fleksibilitet og samtidig ensartethed ved at fordre genbrug af værdier.

Der er desuden praktiske værktøjer inkluderet, som f.eks. en ultrakondenceret syntax for pseudo-classes, nested classes og breakpoints, som f.eks. kan target'e minimumsbredde på 1024px bare med `lg:[classname]` uden behov for media query.

Tailwind kommer også med en bred vifte reset styles, som sikrer ensartede resultater mellem browsere og systemer og sørger for mere neutrale standarder. Samtidig er PostCSS integreret, som betyder at kun de styles, der faktisk bruges inkluderes i build.

Det nærmeste alternativ til Tailwind – foruden vanilla CSS – er måske Bootstrap, som også kommer med predefinerede styles og et responsivt grid system. Men Bootstrap er et bibliotek af færdigbyggede komponenter (det modsatte af utility-first), som skal overskrives, hvis man vil tilpasse designet. Hvor tailwind er et low-level framework, der giver værktøjer til at skabe sit eget design (eller implementere et udleveret design) fra bunden.


### React Icons

1) https://www.npmjs.com/package/react-icons
2) https://react-icons.github.io/react-icons/

React Icons er et stort bibliotek af universelle SVG-ikoner (bl.a. ikoner fra Font Awesome), som kan installeres med npm. Kun de ikoner der bruges, inkluderes i koden, og de kan styles som typografi, så der er stor fleksibilitet.


## Kode til særlig bedømmelse

Udsnit af `@/context.js` som bruges til at rendere indhold på både list view, details view og søgesiden. Foruden dette sættes login-/brugerdata også i en context provider, men jeg vurderede at dette var mest interessant at præcentere.

```js
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const apiContext = createContext();

export function ApiWrapper({ children }) {
  // Det er vigtigt at initialisere state med tom array, da der bruges `find` metode i `Aktivitetsdetaljer` = array metode :
  const [aktiviteterData, setAktiviteterData] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // `NEXT_PUBLIC` prefix'et gør .env variablen tilgængelig for klientkomponenter :
      const aktiviteterUrl = `${process.env.NEXT_PUBLIC_API_URL}/activities`;
      try {
        const res = await fetch(aktiviteterUrl);

        if (!res.ok) {
          throw new Error(`HTTP fejl.. status: ${res.status}`);
        };

        const data = await res.json();

        setAktiviteterData(data);
        
      } catch (error) {
        setApiError(
          // Genbrugeligt apiError objekt :
          {
            forklaring: "Ups, der var en fejl :(",
            fejlbesked: `Fejlbesked:${error.message}`
          }
          // Eksemplet på brug (med custom tailwind theme color) :
          // { apiError && <div className="text-themeBright"><p>{ apiError.forklaring }</p><p>{ apiError.fejlbesked }</p></div>}
        );
      }
    };

    fetchData();
    // Dependency array forhindrer infinite loop (der er ikke refereret nogen variabler, som kan ændres eksternt, så arrayet er tomt) :
  }, []);

  return(
    // Destrukturereing af values/states til child-components :
    <apiContext.Provider value={{ aktiviteterData, apiError }}>
      { children }
    </apiContext.Provider>
  )
};

export function useApiContext() {
  return useContext(apiContext);
}
```


## Evt. tilføjelser og rettelser

- Ugedag og tidspunkt for aktivitet er ikke i designet, men det står i opgavebeskrivelse, så jeg har tilføjet det inline med aldersgruppe, med en prik ("·") imellem. Havde der været en designer, ville jeg selvfølgelig konsultere vedkommende.

- Jeg fik sat login til at gemme i local storage, så man kan refreshe uden at blive logget af. Men når jeg loggede ind og refresh'ede, fik jeg fejl i konsollen, fordi server og client state var ude af sync. Det bliver de, fordi en del af Next.js projektet renderes på serveren, og den har ingen local storage. Fra tidligere har jeg erfaret, at Vercel heller ikke vil tillade hosting (Valgfri opgave A * ), hvis noget er ukendt/udefineret, f.eks. local storage på serveren. Derfor prøvede jeg med cookies (`js-cookie` API), som nok ville være løsnignen, men de kræver et særligt setup med Next.js, og eftersom det ikke er en del af opgaven, vil jeg bruge min tid på noget andet.

- Da der ikke er en anvisning til, hvordan brugere navigerer til login-siden, har jeg gjort kalenderknappen i drawer-menuen til et link til denne, når man ikke er logget ind, og når man er logget ind, fører den selvfølgelig til kaldenderen som beskrevet i opgaven. Det samme har jeg implementeret for "Tilmeld"-knappen, som nu er en log-ind-knap, når man ikke er logget ind.

- Jeg har også tilføjet en log-ud-knap, som vises (når man er logget ind) øverst til højre (fixed) i alle routes, undtagen `velkommen`.

- Før billeder loades, vises en simpel placeholder, og detaljesiden viser " mens man venter på svar fra serveren efter login, vises "loading..." der hvor validerings-fejlbeskeder også vises. De vises i øvrigt alle samme sted, let læseligt, nederst på skærmen, så adgangskodefeltet ikke skubbes ned, hvis man ikke har udfyldt brugernavn.

- På søgesiden har jeg tilføjet teksten "Søg efter en aktivitet i søgefeltet ↑", når søgefeltet er tomt, så man ikke bare får en tom baggrund (= dårlig brugeroplevelse).


## Valgfri opgave

- * Opgave A: Jeg har hosted appet på Vercel, som er firmaet bag Next.js. Hver gang jeg pusher til Github, uploades opdateringerne automatisk til hosten. Fordi jeg ikke har tilladelse til at hoste et classroom repository, måtte jeg dog klone til et nyt repository, så det er måske ikke helt opdateret. Det kræver selvfølgelig også at API'en kører på port 4000. Men her er et link: https://landrup-vercel-host.vercel.app/

- Opgave B: En af fordelene ved at bruge Next.js' `Link` komponent er til at navigere mellem routes, er at det sørger for automatisk at prefetch'e i baggrunden, før man klikker. Det sker når et `Link` kommer ind i viewport, så internettet ikke bliver overbelastet. Det skaber selvsagt en bedre brugeroplevelse, når dataen allerede er forberedt, så ventetiden mindskes.

- Opgave C: Jeg ville ønske jeg havde haft mere tid til dette...


## Reflektion

- Ud over brugere og instruktører kunne der være en admin- / chef-kontotype, som kan tilføje og fjerne instruktører fra aktiviteter. Som jeg har lavet det, tilmelder instruktører sig hold på samme måde som brugere, men det ville blive en kaotisk arbejdsplads, hvis det er op til den enkelte ansatte at melde sig til og fra hold, som man har lyst. Måske man som instruktør skulle føres direkte til "kalender, hold-oversigt", også når man trykker på en aktivitet fra list view (ligesom fra kalenderen)

- Man kunne gøre applikationen mere responsiv, selvom jeg allerede har sørget for det "grove" ved at bruge responsive enheder til de forekellige værdier. Så den skulle allerede se fin ud på de fleste telefoner, men ikke optimal på tablet / desktop.

- Man kunne lave native apps til iOS og Android (og evt. andre systemer), f.eks. med React Native

- Der mangler både en funktion til at oprette en bruger og til at logge ud. Log-ud-knappen har jeg tilføjet, som beksrevet i afsnittet med tilføjelser

- Hvis applikationen skal have nogle krav til brugernavn og adgangskode, kunne man udvide valideringen til også at tjekke efter dette – f.eks. at der ikke bruges invalide tegn, at adgangskoden indeholder både tal og bogstaver, og at kriterierne ikke er for korte eller lange.

****
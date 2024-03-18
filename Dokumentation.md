
## Info

- Selve projektet (UI) findes her: `/landrup_root`.
- Jeg har ikke lavet ændringer til `landrup-dans-api`, som derfor ikke er inkluderet.


## Tech-stack:

- React (JavaScript framework)
- Next.js (React framework)
- Tailwind (CSS framework)
- React Icons


## Teknisk Dokumentation:

### React

JavaScript frontend framework, som bl.a. gør det muligt at dele koden op i komponenter, frem for som traditionelt i hele sider. Man kan se komponenter som skabeloner eller byggeklodser, der kan genbruges overalt i projektet. De indlæses med JavaScript, udskiftes / restruktureres ved nye states, og gengangere behøver ikke genindlæses. Denne type applikationer kaldes 'single-page-applikationer' og tillader, at UI renderes hurtigere, eftersom mindre data skal hentes.

React er et ud af mange populære JavaScript frameworks, som tilbyder lignende funktionalitet. En oplagt grund til at vælge React er, at det er (et af) de(t) ældste (har eksistret siden 2013) og bliver brugt af 57% af alle JavaScript udviklere (* 1). Det gør det ikke nødvendigvis bedre, men betyder at det er let at finde resourser til problemløsning, og der findes et stort økosystem af biblioteker og værktøjer. Det gør det også lettere at finde arbejde. Det er desuden udviklet af (nu) Meta, et af verdens allerstørste firmaer, så man kan godt regne med, at det er et fremtidssikret valg.

(* 1) The JetBrains Blog: "JavaScript and TypeScript Trends 2024", 
https://blog.jetbrains.com/webstorm/2024/02/js-and-ts-trends-2024


### Next.js

React / JavaScript framework. Da Next.js bygger på React, gør alle ovennævnte fordele sig også gældende her, hvis man skal sammenligne med andre frameworks. Ligesom React har det ovennævnte fordele ved at have mange brugere og er udviklet af Vercel, som også tilbyder moderne og automatiseret hosting.

Next.js har fokus på server-side rendering, som vil sige at JavaScript og eksterne resourser i mange tilfæde kan compile's på serveren, så data kan serveres direkte til klienten. Standarden for React er, at JavaScript compile's på klienten, før UI kan renderes. Server-side rendering kan give hurtigere page load og bedre SEO. Mappebaseret routing gør det også mere intuitivt at skabe routes.

Next.js kommer også med mange værktøjer til forbedring af performance. Bl.a. next/image component, som bl.a. konverterer tungere billedfiltyper til WebP eller AVIF og komprimerer billeder til at matche deres størrelse i viewport. Med next/link kan interne links prefetch'es og cache's, så endnu hurtigere loading kan opnås. Og next/font kan cache Google fonts på serveren, så man undgår layout shift på skrifttypen. Med i installationen tilbydes også Tailwind, som beskrives nedenfor.


### Tailwind

CSS framework med predefinerede 'utility classes'(* 2) til næsten alle CSS properties og mulighed for let at bygge designsystemer som js objekter. Tailwind kommer med faste værdier for f.eks. størrelser og farver (som igen kan redigeres), hvilket automatisk skaber kontinuerlighed.

(* 2) Det er et såkaldt low-level 'utility-first' framework, hvilket vil sige at det bruger classes som værktøjer til enkelte CSS deklarationer, som kan sættes sammen, frem for at en class er møntet et bestemt komponent som traditionelt. Det giver stor fleksibilitet og samtidig ensartethed ved at fordre genbrug af værdier.

Der er desuden praktiske værktøjer inkluderet, som f.eks. en ultrakondenceret syntax for pseudo-classes, nested classes og breakpoints, som f.eks. kan target'e minimumsbredde på 1024px bare med `lg:[classname]` uden behov for media query.

Tailwind kommer også med en bred vifte reset styles, som sikrer ensartede resultater mellem browsere og systemer og sørger for mere neutrale standarder. Samtidig er PostCSS integreret, som betyder at kun de styles, der faktisk bruges inkluderes i build.

Det nærmeste alternativ til Tailwind – foruden vanilla CSS – er måske Bootstrap, som også kommer med predefinerede styles og et responsivt grid system. Men Bootstrap er et bibliotek af færdigbyggede komponenter (det modsatte af utility-first), som skal overskrives, hvis man vil tilpasse designet. Hvor tailwind er et low-level framework, der giver værktøjer til at skabe sit eget design (eller implementere et udleveret design) fra bunden.


### React Icons

...


## Kode til særlig bedømmelse

- Indsæt kode til særlig bedømmelse.


## Evt. tilføjelser og rettelser

- Ugedag og tidspunkt for aktivitet er ikke i designet, men det står i opgavebeskrivelse, så jeg har tilføjet det inline med aldersgruppe, med en prik ("·") imellem. Havde der været en designer, ville jeg selvfølgelig konsultere vedkommende.

- Login gemmes i local storage (og selvfølgelig også i context, som tjekker local storage), så det er muligt at refreshe siden uden at blive logget ud

- Da der ingen log-ud funktion var i beskrivelsen / layoutet, har jeg tilføjet en, som vises (når man er logget ind) øverst til højre (fixed) i alle routes, undtagen `velkommen`. Den sætter både context og local storage, ligesom når man logger ind.

- Da der ikke er en anvisning til, hvordan brugere navigerer til login-siden, har jeg gjort kalenderknappen i "drawer"-menuen til et link til login-siden, når man ikke er logget ind, og når man er logget ind, fører den selvfølgelig til kaldenderen som beskrevet i opgaven. Tilmeldingsknappen under en aktivitet kunne fungere på sammen måde, men da der står konkret i opgaven, at den skal være skjult, når man ikke er logget ind, må jeg rette mig efter det.

- På søgesiden har jeg tilføjet teksten "Søg efter en aktivitet i søgefeltet ↑", når søgefeltet er tomt, så man ikke bare får en tom baggrund (= dårlig brugeroplevelse).


## Valgfri opgave

- Forklar hvilken en af de valgfrie opgaver du har valgt og uddyb herunder.


## Reflektion

- %% Reflekter over og beskriv hvordan applikationen i sin nuværende form kan skaleres i fremtiden. %%

- Noget af det første, man skulle arbejde videre med var at gøre applikationen mere responsiv, selvom jeg allerede har sørget for det "grove" ved at bruge responsive enheder til de forekellige værdier.

- Man kunne lave native apps til iOS og Android (og evt. andre systemer), f.eks. med React Native

- Der mangler både en funktion til at oprette en bruger og til at logge ud..

- Hvis applikationen skal have nogle krav til brugernavn og adgangskode, kunne man udvide valideringen til også at tjekke efter dette – f.eks. at der ikke bruges invalide tegn, at adgangskoden indeholder både tal og bogstaver, og at kriterierne ikke er for korte eller lange.


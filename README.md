# E-commerce winkel met Nuxt en Deno - Nuxt frontend

## Inleiding

Project statement

Dit is een project dat door 2 studenten gemaakt wordt: Michiel Vanhimbeeck en Loran Maes.

We maken een platform waarop het voor nieuwe business owners makkelijk is een eigen store aan te maken. Ze
kunnen hierop hun eigen items verkopen en deze optioneel categoriseren. Achterliggend krijgt elke store een
custom CMS. Deze CMS geeft de verkopers analytics van hun store. Dit kan bijvoorbeeld het click percentage zijn,
duration op de webshop, zoektermen om product x van een store te vinden, aantal aankopen, omzet etc.

Het is natuurlijk ook de bedoeling dat al deze data (user data voor authenticatie, store data etc. opgeslaan wordt.
We doen dit met Firebase omdat dit ook goed is voor de Jamstack architectuur. Het is namelijk de bedoeling
server, database en frontend gescheiden te houden en statische pagina’s te genereren met de frontend. Hiervoor
gebruiken we Nuxt omdat we hiermee een .dist folder en dus de static pages kunnen genereren.

De API wordt gemaakt met Deno en alle code wordt met Typescript geschreven. Verder gebruiken we GraphQL
om duidelijkere en snellere queries te schrijven.


Wij hebben als admin een apart account waar we nieuwe stores (en hun items) kunnen accepteren of verwijderen
zodat deze niet met “slechte” bedoelingen op onze website kunnen. Verder is onze store een soort van
“supermarkt” waar je van verschillende merken/mensen items kan kopen in hun eigen shop. Met onze
zoekfunctie vind alle items die aan je zoekterm voldoen van alle stores.

Uiteraard kan je filteren op prijs, aantal aankopen ...

Het is (nog) niet de bedoeling dat wij de items zouden versturen. Een store-owner krijgt een tabel met de
gekochte items, kan een label afprinten (dit mag in onze applicatie nog een fake label zijn) en aanvinken dat deze
verstuurd is. De persoon die een item kocht krijgt telkens een mail met een statusupdate over zijn/haar
aangekochte product.


Uiteraard wordt deze code gevalideerd met Axe Devtools, is alles responsive en hebben we geldige HTML (W3C
HTML validator), we maken geen UX raport.

## Voor dat we beginnen

De bijhorende backend is te vinden op volgende repo: https://github.com/LoranMaes/ecom-deno-backend

## Setup

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Maak een .env.development en .env.production aan in de root van het project met volgende configuratie:

```
VITE_BASE_URL=""
```

De lege string na VITE_BASE_URL vervang je respectievelijk met de development en productie url van de backend

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

"# e-commerce" 

# Afdeling 55 Strandhusene – opslagstavle

Læsning er åben for alle. Opslag oprettes på `opret.html` med en fælles adgangskode, som kontrolleres på serveren (Firebase-funktion). Push sendes via Firebase Cloud Messaging.

## Opsætning (én gang)
1. **Firebase:** opret projekt på console.firebase.google.com. Tilføj en *Web-app* og kopiér konfigurationen til `docs/config.js`.
2. **Firestore:** opret database (region eur3/europe-west).
3. **Push-nøgle:** Projektindstillinger → Cloud Messaging → Web Push-certifikater → generér nøglepar. Indsæt den offentlige nøgle som `vapidKey` i `docs/config.js`.
4. **Abonnement:** skift projektet til Blaze (kræver betalingskort; forbruget ved så lille en brug er i praksis 0 kr.). Sæt gerne et budgetloft.
5. **Deploy** (kræver Node.js): `npm i -g firebase-tools`, `firebase login`, `firebase use --add`
   - `firebase functions:secrets:set OPSLAG_KODE` (skriv adgangskoden)
   - `firebase deploy --only firestore:rules,functions`
   - Kopiér de to funktions-URL'er fra udskriften ind som `opretUrl` og `tilmeldUrl` i `docs/config.js`.
6. **GitHub Pages:** læg mappen i et repo → Settings → Pages → Branch `main`, mappe `/docs`.

## Brug
- Beboere åbner linket i Chrome på Android → menu → *Føj til startskærm* → åbn appen → tryk *Få besked, når der er nyt*.
- Opretterne går til `.../opret.html` (kan også føjes til startskærmen).
- Skift adgangskode: `firebase functions:secrets:set OPSLAG_KODE` og deploy funktionerne igen.

Bemærk: `apiKey` i config.js er ikke hemmelig; sikkerheden ligger i Firestore-reglerne (ingen skrivning udefra) og i funktionen.

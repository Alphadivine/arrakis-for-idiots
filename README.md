# 🏜️ Arrakis for Idiots

A **Dune: Awakening** crafting companion for our server. Look up any recipe, see every raw material it takes, plan what to gather, and share one live group list with everyone playing, so nobody farms copper nobody needed.

Arrakis for Idiots is a single self-contained HTML file. No build step, no framework, no server of our own. It runs in the browser and stores shared group data in a free [Firebase](https://firebase.google.com) database. Friends join with a nickname and the group code; **no accounts needed**.

> **Live site:** _add the link here once deployed, e.g._ `https://yourname.github.io/arrakis-for-idiots/`

Recipe data is for **Update 1.5** (game version 1.5.3.3).

---

## ✨ Features

- **506 recipes**: materials and refining, weapons, tools, armor, stillsuits, consumables and ammo, base stations, refineries, power, water and building pieces, and **20 vehicles broken down into all 135 of their parts** (Sandbike, Buggy, Treadwheel, Scout / Assault / Carrier Ornithopter, Sandcrawler).
- **Item pictures**: real in-game icons for 558 of the 562 items, shown straight from [awakening.wiki](https://awakening.wiki). If one doesn't load, a drawn icon in the tier color takes its place. **View on wiki** on any item opens its full page.
- **Search and filter** by category and tier: Salvaged → Copper → Iron → Steel → Aluminum → Duraluminum → Plastanium. Each tier has its own color.
- **Full breakdown**: set how many you want and it rolls every sub-part down to raw materials, lists what to craft first and at which station, and shows everything the item is used in.
- **Gather tab**: 56 raw and looted materials with how and where to get them (Hagga Basin, Deep Desert, which tool), and what each one feeds into.
- **Group list**: shared with everyone who joined. Anyone can add, change or remove items, and each shows who added it. Add from any recipe with **Add to group**.
- **Group gathering checklist**: tick a material once it's all in. Everyone sees the tick live, with **who did it**.
- **"I'm on it" claims**: claim a material so two people don't farm the same thing. Everyone sees who's gathering what.
- **Base storage**: record what the group already has (raw materials or crafted parts like ingots). Every total shrinks to what's still missing, at every level, so 20 Copper Ingots in storage mean fewer ingots to refine and less ore to mine.
- **Recent activity**: a feed of adds, claims, ticks, storage and new spots ("Mike is gathering Copper Ore").
- **Spots board**: pin good ore, spice and salvage spots with a region, a note and up to 3 screenshots (drop, paste or pick). Screenshots are shrunk automatically.
- **Copy for Discord**: one tap copies any gathering checklist as text, ready to paste.
- **First-visit guide**: a short how-to opens the first time someone visits, and the **?** button brings it back.
- **Personal lists**: each player keeps their own list (**Mine**) for their own gear. The rest of the group can see it under **Players** but only its owner can change it.
- **Survive tab**: an 8-stage path for new players, from the crash site to the Deep Desert, plus tips on water, heat, sandworms, storms, spice, death and base safety.
- **Phone-friendly**: works at phone width in light and dark. Add it to your home screen and it opens like an app with its own icon.

---

## 🧩 How it works

- **Frontend:** one `index.html` (HTML, CSS and plain JavaScript with all recipe data built in). Firebase's JS SDK loads from Google's CDN.
- **Sign-in:** Firebase **anonymous auth** gives each browser a hidden ID. Players only ever type a nickname and the group code.
- **Storage and sync:** Cloud Firestore with live listeners. The Firebase config values in the file are **meant to be public**. The security rules are what protect the data.
- **Without Firebase:** leave the config blank and the app runs **solo** on each device. Recipes, the guide and personal lists all still work.

Who can do what (enforced by the database rules, not just hidden in the page):

| | Recipes & guide | Group list, storage, claims, spots | Change a player's list | Post activity |
|---|---|---|---|---|
| Anyone with the link | ✅ | ❌ | ❌ | ❌ |
| Joined with the group code | ✅ | ✅ read and change | Only their own | Only as themselves |

---

## 🚀 Self-hosting setup

About 10 minutes.

### 1. Create a Firebase project
[console.firebase.google.com](https://console.firebase.google.com) → **Create a project** (e.g. `arrakis-for-idiots`). Google Analytics can be off. The free **Spark** plan is all you need.

### 2. Add Firestore
**Build → Firestore Database → Create database.** Pick a location near you and choose **production mode**.

### 3. Turn on anonymous sign-in
**Build → Authentication → Get started → Sign-in method → Anonymous → Enable.**

### 4. Set the group code
In **Firestore Database → Data**:

1. **Start collection** → ID `boards`.
2. Document ID `main`. The console needs at least one field, so add `name` (string) = `Arrakis for Idiots`. Nothing reads it.
3. Open `main` → **Start collection** → ID `config`.
4. Document ID `access`, with one field: `code` (string) = your group code. This is what you give your friends.

### 5. Set the security rules
**Firestore Database → Rules** → replace everything with this, then **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /boards/{board} {

      function signedIn() { return request.auth != null; }
      function isMember() {
        return signedIn() &&
          exists(/databases/$(database)/documents/boards/$(board)/members/$(request.auth.uid));
      }
      function codeMatches() {
        return request.resource.data.code ==
          get(/databases/$(database)/documents/boards/$(board)/config/access).data.code;
      }
      function goodName() {
        return request.resource.data.name is string &&
          request.resource.data.name.size() > 0 && request.resource.data.name.size() <= 24;
      }

      // the group code itself: the app can never read or change it
      match /config/{doc} { allow read, write: if false; }

      // joining: a player writes their own member record with the right code
      match /members/{uid} {
        allow read: if isMember() || (signedIn() && request.auth.uid == uid);
        allow create, update: if signedIn() && request.auth.uid == uid && codeMatches() && goodName();
        allow delete: if false;
      }

      // the shared group list and its ticks: members only
      match /groupItems/{id} {
        allow read, delete: if isMember();
        allow create, update: if isMember() &&
          request.resource.data.n is string &&
          request.resource.data.q is int && request.resource.data.q > 0 && request.resource.data.q <= 9999;
      }
      match /groupGot/{id} { allow read, write: if isMember(); }

      // each player's own list: the group can read it, only its owner can write it
      match /players/{uid} {
        allow read: if isMember();
        allow write: if isMember() && request.auth.uid == uid;
      }

      // base storage counts
      match /groupStock/{id} {
        allow read, delete: if isMember();
        allow create, update: if isMember() &&
          request.resource.data.n is string &&
          request.resource.data.q is int && request.resource.data.q > 0 && request.resource.data.q <= 10000000;
      }

      // "I'm on it" claims
      match /groupClaims/{id} { allow read, write: if isMember(); }

      // recent activity: members add entries as themselves; nobody edits history
      match /groupLog/{id} {
        allow read: if isMember();
        allow create: if isMember() && request.resource.data.by == request.auth.uid;
        allow update, delete: if false;
      }

      // spots board and its screenshots
      match /spots/{id}      { allow read, write: if isMember(); }
      match /spotImages/{id} { allow read, write: if isMember(); }
    }
  }
}
```

### 6. Add your Firebase config to the app
Project overview → the **`</>`** icon → register a web app → copy four values from the `firebaseConfig` it shows. Open `index.html` in a text editor and fill in the `CONFIG` block near the top of the script:

```js
const CONFIG = {
  FIREBASE: {
    apiKey:     "AIza...",
    authDomain: "arrakis-for-idiots.firebaseapp.com",
    projectId:  "arrakis-for-idiots",
    appId:      "1:1234567890:web:abc123..."
  },
  GROUP_ID: "main"
};
```

> These values identify the project; they aren't passwords. It's safe to commit them to a public repo, because the rules above are what decide who can read and write.

### 7. Deploy
Any static host works.

- **GitHub Pages:** create a **public** repo, upload `index.html` (and this README), then **Settings → Pages → Deploy from a branch → `main` / root → Save**. The site goes live at `https://<username>.github.io/<repo>/` in a minute or two.
- **Netlify:** drag `index.html` onto [app.netlify.com/drop](https://app.netlify.com/drop).

### 8. Check it
Open the link. The pill at the top should say **Join group** and a join box pops up. Join with your name and the code, add something to the group list, then open the link on your phone, join there too, and check it shows up. Then post the link and the code in Discord.

---

## 🎮 Using it

1. **Join:** open the link, type your name and the group code. Your name shows on the pill at the top; tap it to change it.
2. **Find a recipe:** search in **Craft** or filter by category and tier. Set how many you want to see the full material breakdown.
3. **Plan:** tap **Add to my list** for your own gear, or **Add to group** for shared projects.
4. **Split the work:** on the **Group** tab, tap **I'm on it** for what you're farming, type what's already **In storage**, and tick things off when they're all in.
5. **Share spots:** on **Spots**, add good resource locations with a note and screenshots.
6. **New to the game?** Start with the **Survive** tab, or tap **?** for the how-to.

**On a phone:** iPhone → Safari → Share → *Add to Home Screen*. Android → Chrome menu → *Add to Home screen*.

---

## 🛠️ Running the group

- **Change the code:** edit `code` on `boards/main/config/access`. Players who already joined stay in.
- **Remove someone:** delete their record under `boards/main/members` (and under `boards/main/players` to clear their list).
- **New phone or cleared browser data** counts as a new player. They rejoin with the code.
- **Another group:** set `GROUP_ID` to a new name, host that copy separately, and give it its own `boards/<name>/config/access` code.
- **Free-tier headroom:** Spark allows 50,000 reads and 20,000 writes a day. A handful of friends won't come close.

---

## 🔄 Updating

**Upgrading from the first version?** Paste the rules from step 5 again (they gained sections for storage, claims, activity and spots) and **Publish**, then replace `index.html`. Nothing else changes and the existing group list carries over.

Replace `index.html` in the repo (or drag the new one onto Netlify). Pages redeploys in about a minute at the same link. Nothing in the database needs to change.

When the game patches, the recipe data gets rebuilt into a new `index.html`. Firebase config values already pasted into the file carry over when it's rebuilt from the previous copy.

---

## ⚠️ Notes & limitations

- **Recipe data** comes mainly from [dune.gaming.tools](https://dune.gaming.tools) (game version 1.5.3.3) and [awakening.wiki](https://awakening.wiki), with the official 1.5 patch notes for changes. Vehicle costs come almost entirely from awakening.wiki.
- Items marked **Check in game** came from a single source or from sources that disagree. Double-check those before a big crafting run.
- **Not covered yet:** unique and named schematic variants, some optional vehicle parts, grenades, a few tool tiers, research unlock costs and landing pads.
- **Water** amounts are in mL. Looted parts (Mechanical Parts, Gun Parts, EMF Generator, Industrial Pump, Complex Machinery and others) can't be crafted, so they're treated as raw materials.
- **Private servers** can change sandworm, Coriolis storm and decay settings, so the Survive tab's advice on those may not match ours.
- Personal-list **ticks stay on each device**. Only the group checklist is shared.
- **Pictures** load from awakening.wiki's servers. Four items have no wiki picture (Adept Dual Blades, Adept Missile Launcher, Cutteray Mk4, Personal Fabricator) and always use the drawn icon. If the wiki ever blocks outside sites, every item falls back to drawn icons automatically.
- **Screenshots** are stored in Firestore, about 100–300 KB each after shrinking. The free 1 GiB holds a few thousand.

---

## 🙏 Credits

Recipe data from **[dune.gaming.tools](https://dune.gaming.tools)** and **[awakening.wiki](https://awakening.wiki)**; item pictures are hosted by awakening.wiki. Database and sign-in by **[Firebase](https://firebase.google.com)**. Dune: Awakening is made by Funcom; this is an unofficial fan tool built for playing with friends. 🏜️

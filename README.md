# 🏜️ Arrakis for Idiots

A **Dune: Awakening** crafting companion for our server. Look up any recipe, see every raw material it takes, plan what to gather, and share one live group list with everyone playing, so nobody farms copper nobody needed.

Arrakis for Idiots is a single self-contained HTML file. No build step, no framework, no server of our own. It runs in the browser and stores shared group data in a free [Firebase](https://firebase.google.com) database. Friends join with a nickname and the group code; **no accounts needed**.

> **Live site:** [alphadivine.github.io/arrakis-for-idiots](https://alphadivine.github.io/arrakis-for-idiots/#craft)

Recipe data is for **Update 1.5** (game version 1.5.3.3).

---

## ✨ Features

- **506 recipes**: materials and refining, weapons, tools, armor, stillsuits, consumables and ammo, base stations, refineries, power, water and building pieces, and **20 vehicles broken down into all 135 of their parts** (Sandbike, Buggy, Treadwheel, Scout / Assault / Carrier Ornithopter, Sandcrawler).
- **Guide pictures**: location screenshots, enemies, trainers and quest art on most Guide cards, plus House crests, vendor portraits and gear icons, all loaded from awakening.wiki.
- **Search everything**: the magnifier at the top (or press **/**, or Ctrl+K) searches recipes, materials, Guide cards, spots and tasks at once. Enter opens the top result.
- **Built for phones**: on a phone the tabs move to a bottom bar with icons and counts, filters fold into one **Filters** button, and the header stays on one line.
- **New for you**: a dot on Group when someone assigns you a task or there's new activity since you last looked, a count of your open tasks, your own tasks listed first and marked new.
- **Works offline**: recipes, the Guide, your lists and item pictures you've seen keep working without signal. Group changes made offline sync when you're back. The status shows "· offline" meanwhile.
- **Light, dark or match your device**: the half-circle button at the top (on small phones, it's in the **?** menu).
- **Which House should we pick?**: a side-by-side Atreides vs Harkonnen comparison at the top of the Houses guide. It covers where you pledge, the one gameplay schematic each side gets, what the other side can still get, the looks, and the switching rules.
- **Item pictures**: real in-game icons for 558 of the 562 items, shown straight from [awakening.wiki](https://awakening.wiki). If one doesn't load, a drawn icon in the tier color takes its place. **View on wiki** on any item opens its full page.
- **Search and filter** by category and tier: Salvaged → Copper → Iron → Steel → Aluminum → Duraluminum → Plastanium. Each tier has its own color.
- **Full breakdown**: set how many you want and it rolls every sub-part down to raw materials, lists what to craft first and at which station, and shows everything the item is used in.
- **Vehicle builder**: open any vehicle and switch its optional modules on (booster, storage, scanner, backseat, rocket launcher and so on). Totals and "Add to list" include them.
- **Station pages**: "Made at" on every recipe opens its station: power use, everything it makes (grouped, with tiers), and its other sizes and upgrades. A **Stations** filter lists them all.
- **Base planner**: pick how many generators, wind turbines, windtraps, cisterns, refineries, fabricators and chests you'll build. It adds up power made vs used, fuel burned per hour and day, water per hour, cistern and storage space, and the full build cost, which you can send to your list or the group's.
- **Saved and Recent**: star recipes you check often; both show as quick filters in Craft.
- **Gather tab**: 56 raw and looted materials with how and where to get them (Hagga Basin, Deep Desert, which tool), and what each one feeds into.
- **Group list**: shared with everyone who joined. Anyone can add, change or remove items, and each shows who added it. Add from any recipe with **Add to group**.
- **Group gathering checklist**: tick a material once it's all in. Everyone sees the tick live, with **who did it**.
- **"I'm on it" claims**: claim a material so two people don't farm the same thing. Everyone sees who's gathering what.
- **Base storage**: record what the group already has (raw materials or crafted parts like ingots). Every total shrinks to what's still missing, at every level, so 20 Copper Ingots in storage mean fewer ingots to refine and less ore to mine.
- **Optional Google sign-in**: everyone can still join with just a name and the group code. Anyone who wants the app on more than one device taps their name → **Save my account with Google**. Their same player (name, tasks, history) is linked to Google, and My list, ticks, Saved/Recent, the base plan and vehicle module picks sync across devices. On a new device, **Sign in with Google** in the join box goes straight to their player without the code. If a Google account already has a player, the app offers to switch to it and hands over any tasks.
- **Leader and officers**: whoever enters the leader code becomes leader and can make trusted friends officers from the Crew list. Leader and officers hand out and delete tasks, change base storage, manage the crew, remove group list items, clear lists, untick everything, and edit or delete anyone's spots. Members can still add to the group list, change amounts, claim with "I'm on it", tick gathered materials, tick their own tasks, and add and edit their own spots. The database rules enforce all of this.
- **Tasks**: hand out jobs to anyone on the crew, including friends who only play on their phone and never open the site (add them by name). Assign gathering (amount filled in from what's still needed), crafting or building, or any free-form job, with an optional note and due date. Each person gets their own list with a **Copy list** button. Tick tasks off when they report back; finishing a gathering task ticks the material on the group checklist under their name. "Assign to…" on every checklist row does it in one step. The **Who** list shows app users and phone-only friends separately. Typing a name that already belongs to an app user suggests that person, and if a phone-only friend later joins the app under the same name, their tasks move to their account automatically.
- **What can we craft now?**: from base storage, shows what's ready to craft, what's ready once you make the parts, and what's one material short (and by how much).
- **Recent activity**: a feed of adds, claims, ticks, storage and new spots ("Mike is gathering Copper Ore").
- **Spots board**: pin good ore, spice and salvage spots with a region, a note and up to 3 screenshots (drop, paste or pick). Screenshots are shrunk automatically.
- **Copy for Discord**: one tap copies any gathering checklist as text, ready to paste.
- **First-visit guide**: a short how-to opens the first time someone visits, and the **?** button brings it back.
- **Personal lists**: each player keeps their own list (**Mine**) for their own gear. The rest of the group can see it under **Players** but only its owner can change it.
- **Guide tab**: everything about how the game works, in seven sections with one search box:
  - **Getting started**: an 8-stage path from the crash site to the Deep Desert.
  - **Staying alive**: water, heat, sandworms, storms, spice, death and base safety.
  - **Guilds & factions**: creating and running a guild, base permissions for friends, Atreides vs Harkonnen, faction rewards and the Landsraad.
  - **Skills & trainers**: the five skill trees, where each trainer is, respec, Intel and research, and four starter builds for a group.
  - **Places & vendors**: regions, hubs, testing stations and shipwrecks, what vendors sell, travel costs, and where every looted part drops.
  - **Enemies & combat**: shields vs blades and darts, armor, mobility, enemy groups, bosses, sandworms, and death and repair.
  - **Quests & contracts**: the first journey chain, contract boards like Scrap Mettle, trials, trainer questlines, and a suggested path for new players.
  - **Houses**: Atreides vs Harkonnen side by side: vendors, currency (Solari and House Scrip), and every armor, weapon, vehicle and building variant each House sells, with filters. Almost all of it is cosmetic; the few gameplay items are marked. Also covers switching Houses.
- **Phone-friendly**: works at phone width in light and dark. Add it to your home screen and it opens like an app with its own icon.

---

## 🧩 How it works

- **Frontend:** one `index.html` (HTML, CSS and plain JavaScript with all recipe data built in). Firebase's JS SDK loads from Google's CDN.
- **Sign-in:** Firebase **anonymous auth** gives each browser a hidden ID. Players only ever type a nickname and the group code.
- **Storage and sync:** Cloud Firestore with live listeners. The Firebase config values in the file are **meant to be public**. The security rules are what protect the data.
- **Without Firebase:** leave the config blank and the app runs **solo** on each device. Recipes, the guide and personal lists all still work.

Who can do what (enforced by the database rules, not just hidden in the page):

| | Recipes & guide | See group data | Add to list, claim, tick, add spots | Assign tasks, storage, crew, remove, clear | Make officers |
|---|---|---|---|---|---|
| Anyone with the link | ✅ | ❌ | ❌ | ❌ | ❌ |
| Member (joined with the group code) | ✅ | ✅ | ✅ | ❌ (can tick their own tasks) | ❌ |
| Officer | ✅ | ✅ | ✅ | ✅ | ❌ |
| Leader (entered the leader code) | ✅ | ✅ | ✅ | ✅ | ✅ |

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
4. Document ID `access`, with two fields: `code` (string) = your group code, which you give your friends; and `leaderCode` (string) = a different code only you know, which makes you leader.

### 4b. Turn on Google sign-in (optional, for using the app on more than one device)
1. **Build → Authentication → Sign-in method → Add new provider → Google → Enable**. Pick your email as the support email, then **Save**. Keep **Anonymous** enabled too.
2. **Authentication → Settings → Authorized domains → Add domain** → `alphadivine.github.io` (your site's address, without `https://` or the path).

### 5. Set the security rules
**Firestore Database → Rules** → replace everything with this, then **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /boards/{board} {

      function signedIn() { return request.auth != null; }
      function isMember() {
        return signedIn() && exists(/databases/$(database)/documents/boards/$(board)/members/$(request.auth.uid));
      }
      function hasRole() {
        return exists(/databases/$(database)/documents/boards/$(board)/roles/$(request.auth.uid));
      }
      function myRole() {
        return get(/databases/$(database)/documents/boards/$(board)/roles/$(request.auth.uid)).data.role;
      }
      function isStaff()  { return isMember() && hasRole() && myRole() in ['leader', 'officer']; }
      function isLeader() { return isMember() && hasRole() && myRole() == 'leader'; }
      function me() { return 'm:' + request.auth.uid; }
      function access() { return get(/databases/$(database)/documents/boards/$(board)/config/access).data; }
      function codeMatches() { return request.resource.data.code == access().code; }
      function goodName() {
        return request.resource.data.name is string &&
          request.resource.data.name.size() > 0 && request.resource.data.name.size() <= 24;
      }
      function onlyChanges(keys) { return request.resource.data.diff(resource.data).affectedKeys().hasOnly(keys); }

      // the group code and leader code: the app can never read or change them
      match /config/{doc} { allow read, write: if false; }

      // joining: a player writes their own member record with the right group code
      match /members/{uid} {
        allow read: if isMember() || (signedIn() && request.auth.uid == uid);
        allow create, update: if signedIn() && request.auth.uid == uid && codeMatches() && goodName();
        allow delete: if signedIn() && request.auth.uid == uid;   // leaving, or switching to a saved player
      }

      // roles: the leader proves the leader code once; the leader makes and removes officers
      match /leaderClaims/{uid} {
        allow read, delete: if false;
        allow create, update: if isMember() && request.auth.uid == uid &&
          request.resource.data.code == access().leaderCode;
      }
      match /roles/{uid} {
        allow read: if isMember();
        allow create, update: if
          (isMember() && request.auth.uid == uid && request.resource.data.role == 'leader' &&
             exists(/databases/$(database)/documents/boards/$(board)/leaderClaims/$(uid))) ||
          (isLeader() && request.auth.uid != uid && request.resource.data.role == 'officer');
        allow delete: if isLeader() && request.auth.uid != uid;
      }

      // group list: everyone adds and changes amounts; only leader/officers remove
      match /groupItems/{id} {
        allow read: if isMember();
        allow create, update: if isMember() &&
          request.resource.data.n is string &&
          request.resource.data.q is int && request.resource.data.q > 0 && request.resource.data.q <= 9999;
        allow delete: if isStaff();
      }

      // gathered ticks: anyone ticks as themselves; untick your own, or leader/officers untick any
      match /groupGot/{id} {
        allow read: if isMember();
        allow create, update: if isMember() && request.resource.data.by == request.auth.uid;
        allow delete: if isStaff() || (isMember() && (resource.data.by == request.auth.uid || resource.data.for == me()));
      }

      // "I'm on it": claim for yourself; leader/officers claim for anyone
      match /groupClaims/{id} {
        allow read: if isMember();
        allow create, update: if isStaff() ||
          (isMember() && request.resource.data.by == request.auth.uid && request.resource.data.for in ['', me()]);
        allow delete: if isStaff() ||
          (isMember() && ((resource.data.by == request.auth.uid && resource.data.for in ['', me()]) || resource.data.for == me()));
      }

      // base storage: everyone sees it, leader/officers change it
      match /groupStock/{id} {
        allow read: if isMember();
        allow delete: if isStaff();
        allow create, update: if isStaff() &&
          request.resource.data.n is string &&
          request.resource.data.q is int && request.resource.data.q > 0 && request.resource.data.q <= 10000000;
      }

      // tasks: leader/officers hand out and delete; the person a task is for can tick it done
      match /groupTasks/{id} {
        allow read: if isMember();
        allow create, delete: if isStaff();
        allow update: if isStaff() ||
          (isMember() && resource.data.who == me() && onlyChanges(['done', 'doneBy', 'doneAt'])) ||
          (isMember() && request.resource.data.who == me() && onlyChanges(['who']) &&
             resource.data.who.matches('m:.+') &&
             !exists(/databases/$(database)/documents/boards/$(board)/members/$(resource.data.who.split(':')[1])));
      }

      // crew list (names for friends who don't use the app): leader/officers manage it
      match /groupCrew/{id} {
        allow read: if isMember();
        allow delete: if isStaff();
        allow create, update: if isStaff() && goodName();
      }

      // recent activity: members add entries as themselves; nobody edits history
      match /groupLog/{id} {
        allow read: if isMember();
        allow create: if isMember() && request.resource.data.by == request.auth.uid;
        allow update, delete: if false;
      }

      // each player's own list: the group can read it, only its owner can write it
      match /players/{uid} {
        allow read: if isMember();
        allow write: if isMember() && request.auth.uid == uid;
      }

      // private synced data for players who saved their account to Google
      match /users/{uid} {
        allow read, write: if signedIn() && request.auth.uid == uid;
      }

      // spots: anyone adds; the author or leader/officers edit and delete
      match /spots/{id} {
        allow read: if isMember();
        allow create: if isMember() && request.resource.data.by == request.auth.uid;
        allow update, delete: if isStaff() || (isMember() && resource.data.by == request.auth.uid);
      }
      match /spotImages/{id} {
        allow read: if isMember();
        allow create: if isMember() && request.resource.data.by == request.auth.uid;
        allow update, delete: if isStaff() || (isMember() && resource.data.by == request.auth.uid);
      }
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

- **GitHub Pages:** create a **public** repo, upload `index.html` **and `sw.js`** (plus this README), then **Settings → Pages → Deploy from a branch → `main` / root → Save**. The site goes live at `https://<username>.github.io/<repo>/` in a minute or two.
- **Netlify:** drag a folder containing `index.html` and `sw.js` onto [app.netlify.com/drop](https://app.netlify.com/drop).

### 7b. Make yourself leader
Open the site and join. Tap your name at the top → **Run this group? Enter the leader code** → type your `leaderCode` → **Unlock**. Your role changes to Leader. Make friends officers from **Group → Tasks → Crew**.

### 8. Check it
Open the link. The pill at the top should say **Join group** and a join box pops up. Join with your name and the code, add something to the group list, then open the link on your phone, join there too, and check it shows up. Then post the link and the code in Discord.

---

## 🎮 Using it

1. **Join:** open the link, type your name and the group code. Your name shows on the pill at the top; tap it to change it.
2. **Find a recipe:** search in **Craft** or filter by category and tier. Set how many you want to see the full material breakdown.
3. **Plan:** tap **Add to my list** for your own gear, or **Add to group** for shared projects.
4. **Split the work:** on the **Group** tab, tap **I'm on it** for what you're farming, type what's already **In storage**, and tick things off when they're all in.
5. **Share spots:** on **Spots**, add good resource locations with a note and screenshots.
6. **New to the game?** Start with the **Guide** tab, or tap **?** for the how-to.

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

**Upgrading to the sign-in and roles version** (one-time):
1. Paste the rules from step 5 and **Publish**.
2. In **Firestore Database → Data**, open `boards/main/config/access` and **Add field** `leaderCode` (string) with a code only you know.
3. Do step 4b to turn on Google sign-in and approve `alphadivine.github.io`.
4. Replace `index.html` on GitHub.
5. Do step 7b to make yourself leader. Until someone does, tasks, storage and the crew list are locked for everyone.

**Upgrading?** Whenever the rules in step 5 change, paste them again and **Publish**, then replace `index.html`. The latest additions are sections for storage, claims, activity and spots, then tasks and the crew list. Nothing else changes and the existing group list carries over.

Replace `index.html` and `sw.js` in the repo (or drag the new folder onto Netlify). Pages redeploys in about a minute at the same link. Nothing in the database needs to change.

When the game patches, the recipe data gets rebuilt into a new `index.html`. Firebase config values already pasted into the file carry over when it's rebuilt from the previous copy.

---

## ⚠️ Notes & limitations

- **Recipe data** comes mainly from [dune.gaming.tools](https://dune.gaming.tools) (game version 1.5.3.3) and [awakening.wiki](https://awakening.wiki), with the official 1.5 patch notes for changes. Vehicle costs come almost entirely from awakening.wiki.
- Items marked **Check in game** came from a single source or from sources that disagree. Double-check those before a big crafting run.
- **Not covered yet:** unique and named schematic variants, some optional vehicle parts, grenades, a few tool tiers, research unlock costs and landing pads.
- **Water** amounts are in mL. Looted parts (Mechanical Parts, Gun Parts, EMF Generator, Industrial Pump, Complex Machinery and others) can't be crafted, so they're treated as raw materials.
- **Private servers** can change sandworm, Coriolis storm and decay settings, so the Guide's advice on those may not match ours.
- Personal-list **ticks stay on each device**. Only the group checklist is shared.
- **Pictures** load from awakening.wiki's servers. Four items have no wiki picture (Adept Dual Blades, Adept Missile Launcher, Cutteray Mk4, Personal Fabricator) and always use the drawn icon. If the wiki ever blocks outside sites, every item falls back to drawn icons automatically.
- **Guide** info comes from the 1.5 patch notes, awakening.wiki and player guides. Cards marked **Check in game** came from a single source, or from sources that disagree. Some details are from before 1.5 and are labeled as such: guild size, Landsraad reset timing, and the names of the early quest steps.
- **Base planner** figures come from the recipe data: power per structure, fuel from the generator notes (a Fuel Cell lasts 1 hour, a Spice-infused Fuel Cell 1 h 30 m) and windtrap output from its gather rate. Treat water per hour as an estimate. Wind turbine lubricant use isn't in the data.
- **Optional vehicle modules** only exist in the data for some tiers. Where a newer one isn't listed, the builder offers the highest tier it has and says so.
- **Screenshots** are stored in Firestore, about 100–300 KB each after shrinking. The free 1 GiB holds a few thousand.

---

## 🙏 Credits

Recipe data from **[dune.gaming.tools](https://dune.gaming.tools)** and **[awakening.wiki](https://awakening.wiki)**; item pictures are hosted by awakening.wiki. Database and sign-in by **[Firebase](https://firebase.google.com)**. Dune: Awakening is made by Funcom; this is an unofficial fan tool built for playing with friends. 🏜️

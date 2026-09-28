# Changelog

What changed in each update of Arrakis for Idiots, newest first.

## 2026-09-28: Share links, install as an app, compare tiers
- **Share links**: a **Link** button on every recipe, material, Guide card and spot opens that exact page when pasted in Discord.
- **Install as an app** on Android and desktop Chrome/Edge (new `manifest.webmanifest` and app icons), with an **Install app** button under **?**.
- **Compare tiers**: Mk1–Mk6 side by side on any recipe with several tiers.
- **Fixes from the smoke test:**
  - Esc now closes the search box in one press.
  - The Salvaged tier filter was always empty; it's now **No tier** (starter gear and untiered base pieces).
  - The House comparison and House gear no longer run off the side of small phones.

## 2026-09-28 (night): Map
- **Map tab** (it replaces Spots) with three views:
  - **Our map:** the group's pins on Hagga Basin and the Deep Desert. Tap **+ Drop a pin** and tap the spot. Pins are colored by type, and Deep Desert pins get their grid square.
  - **Spots list:** the old board. Any spot there can be put on the map or shown on the map.
  - **Full map · th.gl:** the complete community map (Hagga Basin, Deep Desert, Arrakeen, Harko Village).
- The leader and officers can set a **map picture** per area from a screenshot of the in-game map. Until then the map is a sand-colored grid.
- **Rules:** new `mapImages` section. Paste `firestore.rules` into Firebase and Publish.

## 2026-09-28 (evening): Activity cleanup, claim fix
- **Remove activity lines:** the leader gets a × on each Recent activity line and a **Clear all activity** button.
- **Fix:** finishing or deleting a gathering task now takes its "I'm on it" claim off the material. Before, the claim stayed behind and kept showing under "You're gathering". Leftover claims like that are cleaned up automatically the next time the app loads.
- **Fix:** ticked-off materials no longer show under "You're gathering".
- **Rules:** `groupLog` now allows the leader to delete. Paste `firestore.rules` into Firebase and Publish.

## 2026-09-28 (later): Sorting, back trail, "You" card
- **Sort** the Craft list by type, A–Z, tier or station, and Gather by type, A–Z or tier.
- **Back trail:** tapping into an ingredient shows "‹ Back to …" plus the last few items, across Craft and Gather.
- **"You" card** at the top of Group: your open tasks, what you're gathering and how much is left, and the storm countdown.
- **Fix:** the version label pushed the tabs onto a second row on laptop and desktop screens once you'd joined. It moved to the ? guide.

## 2026-09-28: Desert run planner, weekly backups, 899 recipes
- **Desert run planner** (Craft → Desert run): seats, fuel and cargo for your vehicles, a packing list with Copy for Discord, a Coriolis storm countdown in local time, and a haul log that adds what you bring back to base storage.
- **Automatic weekly group backup** saved in Firebase (leader only, keeps the last 4). Restore or download any copy, or save one now.
- **Group backup** download and restore from a file (leader only).
- **Recipes 506 → 899**: unique schematics with a new **Unique** filter, more armor, stillsuit and tool tiers, all vehicle parts and modules.
- **Vehicle part costs** updated to game data 1.5.3.3 (92 changed).
- **Pictures** for 950 of 955 items.
- **Rules:** new `backups` section. Paste `firestore.rules` into Firebase and Publish.

## Earlier updates (before this changelog)
- **House gear:** Atreides vs Harkonnen gear with pictures, a "Which House should we pick?" comparison, and tap-to-enlarge pictures.
- **App polish:** phone app layout with a bottom tab bar, light/dark switch, search everything, new-for-you alerts, and offline support.
- **Accounts and roles:** optional Google sign-in with sync across devices, and leader and officer roles enforced by the Firebase rules.
- **Tasks:** assign gathering, crafting or any job to the crew, including friends who only play on their phone.
- **Guide tab:** Getting started, Staying alive, Guilds & factions, Skills & trainers, Places & vendors, Enemies & combat, Quests & contracts, and Houses.
- **Planners:** vehicle builder with optional modules, Base planner, "What can we craft now?", Saved and Recent filters, and station pages.
- **Group features:** base storage, "I'm on it" claims, activity feed, Spots board with screenshots, first-visit guide, Copy for Discord, and item pictures.
- **First version:** recipes, raw-material breakdowns, a shared group list and a new-player guide.

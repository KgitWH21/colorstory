COLOR STORY — A writer’s color wheel

832 named shades, sensory associations, story-name prompts, HEX/RGB values,
and three companion-color modes. No accounts, API keys, dependencies, or build step.

TRY IT ON YOUR COMPUTER
Unzip this package and open index.html in your browser. Core features work offline.

INSTALL ON YOUR PHONE
Host these files on any HTTPS static host (for example, GitHub Pages).
For GitHub Pages: put these files in the root of a repository, enable Pages for
that branch and root folder in repository settings, then open the published URL.
On iPhone use Safari > Share > Add to Home Screen.
On Android use Chrome > menu > Install app / Add to Home screen.
The service worker caches the app for offline use after a successful initial load.
The self-hosted version doesn't require ChatGPT sign-in.

EDIT IN VS CODE
Open the extracted folder. colors.js contains the color collection.
Each row is [HEX, shade name, four associations separated by ;, story name].
style.css controls the layout. app.js controls the wheel and palette matching.
The smooth wheel represents the flow of hues; its center shows the exact
selected shade. All 832 shades remain selectable. Drag with a finger or mouse
and release to coast and land on a named shade. The Spin button picks randomly.
Arrow keys browse shades, Space/Enter spins, and Escape stops motion. Color
information appears below the larger wheel. Reduced motion skips coasting.
wheel.js controls direct rotation, momentum, snapping, and keyboard input.
Companion colors are selected approximately by hue, saturation, and lightness.
Names and associations are editorial suggestions; HEX/RGB values are exact.

COLOR SEARCH
Search everyday color names (green, blue, red, yellow, orange, purple, pink,
brown, gray/grey, black, or white), full or partial shade names, or 3/6-digit
HEX values. Similar shades shows broad color families or the closest named
shades by perceived color distance. Companion colors shows Contrast, Neighbors,
or Same family pairings with a visible, changeable base shade. Related imagery
uses curated color vocabulary and the collection's sensory associations; you
can also search images such as moss, sea glass, or leather in this mode.
Tap a result to select it on the wheel and read its associations and story.
Show more reveals additional results. All search modes work offline.
search.js contains matching rules and the curated imagery vocabulary.

OFFLINE UPDATES
After changing files, increment CACHE in sw.js, redeploy, and reload online.

MOOD SEARCH
Choose By mood or search calm, tender, uneasy, austere, festive, weathered,
mysterious, hopeful, melancholy, or nostalgic. Combine a mood and color
(e.g. calm blue or uneasy green). Mood associations are editorial suggestions,
not universal color meanings. Mood search works offline.

GUIDED SPINS AND RECENT DISCOVERIES
Choose a color family and/or mood under the wheel to guide the Spin button.
Drag freely to explore the entire wheel. Empty combinations explain how to
change or reset guidance. The last 12 selected shades appear under Recent
discoveries; tap one to return to it. History is stored in this browser when
local storage is available. Clear recent removes it.

PALETTE EXPANSION
The 832-shade collection preserves the original 416 and adds vivid pigments,
tinted neutrals, and a dedicated family of 24 blacks. scripts/expand-palette.cjs
is an optional offline authoring tool that regenerates the static expansion;
it is not needed to run the app. moods.js defines mood associations and
discovery.js handles spin pools and recent history.

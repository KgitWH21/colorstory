COLOR STORY — A writer’s color wheel

416 named shades, sensory associations, story-name prompts, HEX/RGB values,
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
The wheel shows all 416 discrete swatches and lands on the selected shade.
Companion colors are selected approximately by hue, saturation, and lightness.
Names and associations are editorial suggestions; HEX/RGB values are exact.

OFFLINE UPDATES
After changing files, increment CACHE in sw.js, redeploy, and reload online.

This is a [Next.js](https://nextjs.org/) custom boilerplate bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with a few additionnal features.

## What's in it ?

- A basic Next app
- Firebase & react-firebase-hooks
- TailwindCSS & some plugins
- Two typefaces 

### Firebase

- create a new project in the Firebase console
- put the project variables inside a .env.local file following the example file
- `firebase.js` will automatically fetch the environnement variables and initialize the app

**Authentication**

- a custom `useAuth` hook is provided and relies on the ProvideAuth Context component encapsulating the `_app`
- just import `./lib/useAuth.js` from a component to access _user_ as well as `signInwithGoogle` & `signOut` functions.

### Tailwindcss & plugins

Ready to use TailwindCSS with the following plugins :

- [tailwindCSS/typography](https://github.com/tailwindlabs/tailwindcss-typography) A plugin that provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don't control (like HTML rendered from Markdown, or pulled from a CMS).
- [tailwind-heropatterns](https://github.com/AndreaMinato/tailwind-heropatterns) Allow for an easy implementation of [hero-patterns](https://www.heropatterns.com/) with the class `bg-hero-$pattern`
- [daisyUI](https://daisy.js.org/core/colors) a gorgeous Tailwind library providing ready-to-use components & flexible styling

### Fonts

Two fonts are included in the `package.json` to avoid loading from Google's servers.

- Headers : PT-sans
- Paragraphs : Lato
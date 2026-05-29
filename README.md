# Kristen Hodges Therapy

Marketing site for [kristenhodges.com](https://kristenhodges.com).

A static [Gatsby](https://www.gatsbyjs.com/) site. Content is hardcoded in the
page components (no CMS). Styling is SCSS + Tailwind. The contact form is handled
by [Netlify Forms](https://docs.netlify.com/manage/forms/setup/).

## Stack

- **Gatsby 5** (static site generator)
- **React 18**
- **Tailwind CSS** + **SCSS** for styling
- **Netlify** for hosting and form handling

## Local development

Requires Node 22+ (see [`.nvmrc`](.nvmrc)).

```bash
yarn install      # install dependencies
yarn develop      # start the dev server at http://localhost:8000
yarn build        # production build into ./public
yarn serve        # serve the production build locally
yarn clean        # clear the Gatsby cache
```

No environment variables are required.

## Project structure

```
src/
  pages/        Top-level routes (index, about, services, contact, faq, ...)
  components/
    modules/    Page sections (Hero, ContactForm, Footer, ...)
    shared/     Reusable pieces (Layout, Button, Logo, ...)
  styles/       Global SCSS and Tailwind setup
  svg/          Inline SVGs imported as React components
static/         Files served as-is (images, fonts, favicon, robots.txt)
```

## Deployment

Hosting is on Netlify, which builds from the `main` branch on push.

### Contact form

The contact form ([`src/components/modules/ContactForm/ContactForm.js`](src/components/modules/ContactForm/ContactForm.js))
uses Netlify Forms. Submissions appear under **Forms → contactForm** in the Netlify
dashboard. To receive submissions by email, configure an email notification under
**Forms → Form notifications**.

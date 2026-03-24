This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO & Google Discovery

To make `caner elmas` search more discoverable for your portfolio:

- Keep the brand in key SEO fields (title, description, h1, alt text): the app already uses this in layout, homepage, and About page metadata.
- Add your verified site to Google Search Console and submit the sitemap.
- Keep the sitemap updated in `src/app/sitemap.ts` when you add new routes.

### Quick checklist

1. Add your Google verification token:
   - In Google Search Console, get the verification TXT/HTML code.
   - Set `NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION=your_token` in your deployment environment.
   - Redeploy after adding it.
2. Submit sitemap:
   - Open Google Search Console > Sitemaps
   - Add `/<sitemap route>` from your current domain (usually `/sitemap.xml`)
3. Improve index coverage:
   - Request indexing for the homepage and `/About`.
   - Check the “Coverage” report weekly and fix crawl issues if any appear.
4. Consistency:
   - Keep public profile links (LinkedIn / CV) and `canerelmas.png` name consistent with your brand.

### Optional content upgrades for faster ranking

- Add a project section with real project names and outcomes.
- Add client testimonials and a dedicated skills/experience narrative with long-tail keywords like:
  - `Caner Elmas fullstack developer Germany`
  - `Caner Elmas web development portfolio`

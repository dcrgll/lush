This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Users can navigate throught product categories to products, and products to product details.

This app uses [Next.js](https://nextjs.org/) 13 and it's [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components) feature meaning all pages are rendered on the server, and the client only needs to hydrate the page. This means that the initial page load is faster, and the page is more accessible to users with JavaScript disabled. Any components with `'use client'` in the file name will be rendered on the client.

[Tailwind CSS](https://tailwindcss.com/) is used for styling.

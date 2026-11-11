# Fazri & Partners Law Firm

A law firm website for Fazri & Partners, featuring firm information, legal services, case studies, and insights.

## Development

Install dependencies and start the development server:

```sh
bun install --frozen-lockfile
bun run dev
```

## Available scripts

- `bun run build` - Build the production app.
- `bun run preview` - Preview the production build.
- `bun run lint` - Run ESLint.
- `bun run test` - Run tests.

## Deploy to Vercel

The production build uses Nitro's Vercel preset and writes the Vercel Build Output API files to
`.vercel/output/`.

To deploy through GitHub:

1. Import this repository in the [Vercel dashboard](https://vercel.com/new).
2. Leave the framework and build settings on automatic detection. If prompted, use `bun run build`
   as the build command.
3. Deploy. Vercel will build and deploy pushes to the production branch, and create preview
   deployments for other branches and pull requests.

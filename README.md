This is a [Next.js](https://nextjs.org/) project powered with PrismaDB, mongoDB, tailwind CSS for styles, and more.

## Prerequisites

Visit MongoDB atlas and create an account with your Cluster.
Procceed with creating .env file

```bash
DATABASE_URL="Your-mongo-DB-URL"
NEXTAUTH_JWT_SECRET="NEXT-JWT-SECRET"
NEXTAUTH_SECRET="NEXT-SECRET"
```
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

## Populating Movies in DB

Visit again your MongoDB and populate the Movies collection by Inserting a Document in this format:

```bash
title "Tears of Steel"
description "Tears of Steel is an action-packed sci-fi short film exploring the con…"
videoUrl "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Tears…"
thumbnailUrl "https://i0.wp.com/www.3dart.it/wp-content/uploads/2012/09/blender_3dar…"
genre "Action"
duration "12 minutes"
```

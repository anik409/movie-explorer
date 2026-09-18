# 🎬 MovieExplorer

A responsive movie browsing app built with React, React Router, and the TVMaze API

🔗 **Live Demo:** https://movie-explorer-five-lemon.vercel.app/
📦 **Repo:** [movie-explorer](https://github.com/anik409/movie-explorer)

## Features

- **Home page** — hero section with a call-to-action into the movie listing
- **Movie listing page** — search bar (TVMaze search API) with a fallback list of shows on first load
- **Responsive movie grid** — poster, title, release year, and rating on each card
- **Details modal** — overview, genres, rating, and release date; closable via the ✕ button or by clicking outside the modal
- **Client-side routing** — React Router, with shared Navbar/Footer across pages

## Tech Stack

- React 18 (Vite)
- React Router
- Plain CSS (no framework)
- [TVMaze API](https://www.tvmaze.com/api) — `/shows` for the default list, `/search/shows?q=` for search

## Running locally

\`\`\`
git clone https://github.com/anik409/movie-explorer.git
cd movie-explorer
npm install
npm run dev
\`\`\`

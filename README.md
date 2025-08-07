# Pokémon Discovery App

A React-based web app to explore Pokémon using infinite scroll and manage a personal collection. It utilizes TanStack Query for fetching data, Intersection Observer for infinite scrolling, and localStorage for storing selected Pokémon.

## Features

### Discovery Page
- Infinite scrolling loads more Pokémon as you scroll down.
- Each Pokémon card displays name, image, type(s), and stats like HP, Attack, and Defense.
- Add button to save Pokémon to your personal collection.
- Images are lazy-loaded using the Intersection Observer API to improve performance.

### My Collection Page
- View all Pokémon you've added from the discovery page.
- Persistent collection using localStorage.
- Remove button to delete Pokémon from your collection.

## Tech Stack

- React
- TanStack Query (React Query)
- Intersection Observer API
- localStorage
- PokeAPI (https://pokeapi.co/api/v2/pokemon)

## Installation

Clone the repository and install dependencies:

```
git clone https://github.com/Abhishekkvpnld/pokemon_discovery.git
cd client
npm install
npm run dev
```

## Deployment

This app is deployed using **Vercel**. You can visit the live app here:

https://pokemon-discovery-phi.vercel.app

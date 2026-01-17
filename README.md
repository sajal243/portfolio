# Live Link
https://movie-app-gamma-pied-31.vercel.app/

# 🎬 Movie Explorer Dashboard

A **Movie Explorer Dashboard** built using the **TMDB (The Movie Database) public API**.  
This application allows users to discover movies, search by keywords, apply filters, view detailed movie information, and explore related content — similar to a front-facing discovery tool for a streaming platform.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps to Run Locally

# Clone the repository
git clone https://github.com/sajal243/Movie-app.git

# Navigate to project directory
cd Movie-app

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm start
# or
yarn dev

## 🏗 Architecture Overview

The application follows a **modular, component-driven architecture** with clear separation between UI, state, and data-fetching logic to ensure scalability and maintainability.

### Structure

src/
├─ api/ # TMDB API calls
├─ hooks/ # Custom hooks for data & state logic
├─ components/ # Reusable UI components
├─ pages/ # Route-level screens

### Key Design Decisions / Assumptions

- No backend is used; all data comes from TMDB API
- Infinite scroll is implemented for better discovery
- Debounced search is used to reduce unnecessary API calls
- Components are reusable and state management is centralized
- Use React query for fetching data from APIs
- Added centralized fetch logic

### Known Limitations

- No user authentication or profiles
- Limited caching for API responses
- Minimal styling; functional design only
- TMDB API rate limits may affect heavy usage


## ✅ Project Checklist (As Per Requirement Document)

### Core Functionality

- [x] Search movies by title or keyword using TMDB API
- [x] Display relevant search results based on user query
- [x] Browse movies in a list/grid layout
- [x] Support pagination or infinite scrolling
- [x] View detailed information for a selected movie

**Movie Details Page Includes:**
- [x] Movie title
- [x] Overview / description
- [x] Release year
- [x] Rating (vote_average from TMDB)
- [x] Genres
- [x] Poster image

### Filtering & Related Content

- [x] Filter movies by genre
- [x] Filter movies by release year
- [x] Filter movies by rating
- [x] Combine search with filters
- [x] Display related / similar movies on movie detail page
- [x] Update related movies when navigating to another movie

### Scalability & Reliability

- [x] Handles large datasets using pagination / infinite scroll
- [x] Maintains consistent state across:
  - Search
  - Filters
  - Selected movie
- [x] Displays loading indicators during API calls
- [x] Displays empty state when no results are found
- [x] Displays error state on API/network failure
- [x] Prevents broken or inconsistent UI states




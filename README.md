# Users List App

A modern, full-stack Next.js application that displays a searchable, filterable list of users with responsive design and detailed user viewing.  
User data is generated server-side with Faker, cached in Redis, and served via a custom API route.  
The UI leverages React, Zustand for state management, TanStack React Query for data fetching, and Tailwind CSS for styling.

---

## Features

- **Fake User Data**: Server-side generation of realistic user data using [Faker](https://fakerjs.dev/).
- **Redis Caching**: User data is cached in Redis for fast API responses.
- **Custom API**: The client fetches users only from the internal `/api/users` endpoint.
- **Search & Filter**: Search users by name, company, or email.
- **Responsive Design**: Sidebar and user viewer adapt to screen size using Zustand and a custom hook.
- **State Management**: Zustand manages UI state (selected user, screen size).
- **Data Fetching**: TanStack React Query handles efficient, cached data fetching.
- **Dockerized**: Includes Docker and Docker Compose for easy local development with Redis.
- **Lighthouse Audited**: See `LightHouse_diagram/` for performance reports.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) (for Redis and app container)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Users_list
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.exemple` to `.env.local` or `.env`.
   - For local development:  
     ```
     REDIS_URL=redis://localhost:6379
     ```
   - For Docker Compose:  
     ```
     REDIS_URL=redis://redis:6379
     ```
   - For production (e.g., Render):  
     - Use the Redis connection string provided by your Redis provider.

4. **Start Redis and the app using Docker Compose:**
   ```bash
   docker-compose up
   ```
   - This will start both the Next.js app and a Redis instance.

5. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/                # Next.js app directory (pages, layout, API routes)
components/         # React UI components (Sidebar, UserCard, etc.)
hooks/              # Custom React hooks (e.g., useSyncIsLg)
lib/                # Utilities (Redis client, queries, React Query client)
public/             # Static assets (avatars, etc.)
stores/             # Zustand stores for state management
ui/                 # UI elements (Avatar, Loading, etc.)
LightHouse_diagram/ # Lighthouse report screenshots
```

---

## Architecture Overview

- **Next.js App Router**: Handles routing, layouts, and API endpoints.
- **API Route (`/api/users`)**:  
  - Checks Redis for cached users.
  - If not found, generates 100 fake users with Faker, caches them for 5 minutes, and returns them.
- **Redis**: Used as a cache layer for user data.
- **Client Data Fetching**:  
  - Uses TanStack React Query to fetch from `/api/users`.
  - Data is filtered and displayed in the UI.
- **State Management**:  
  - Zustand manages selected user and responsive state (`isLg`).
  - `useSyncIsLg` hook keeps `isLg` in sync with window size.
- **UI**:  
  - Responsive sidebar and user viewer.
  - Avatar and user details components.
  - Search bar for filtering users.

---

## Deployment Notes

- **Environment Variables**:  
  - Set `REDIS_URL` to your Redis connection string in your deployment environment.
  - For Docker Compose, use `redis://redis:6379`.
  - For cloud providers (e.g., Render), use the provided Redis URL.
- **Redis**:  
  - Ensure Redis is running and accessible from your app.
- **Error Handling**:  
  - The API route will throw a 500 error if Redis is not reachable or `REDIS_URL` is not set.

---

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Lint code

---

## Author

Tariq Bendallah

---
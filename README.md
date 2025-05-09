# Users List App

A modern, full-stack Next.js application that displays a list of users with search, responsive design, and user detail viewing.  
It uses fake user data generated server-side with Faker, cached in Redis, and fetched via a custom API route.  
The UI is built with React, Zustand for state management, TanStack React Query for data fetching, and Tailwind CSS for styling.

---

## Features

- **Fake User Data**: Server-side generation of realistic user data using [Faker](https://fakerjs.dev/).
- **Redis Caching**: User data is cached in Redis for fast API responses.
- **Custom API**: The client fetches users only from your own `/api/users` endpoint.
- **Search & Filter**: Search users by name, company, or email.
- **Responsive Design**: Sidebar and user viewer adapt to screen size.
- **State Management**: Uses Zustand for UI state (selected user, screen size).
- **Data Fetching**: Uses TanStack React Query for efficient, cached data fetching.
- **Dockerized**: Includes Docker and Docker Compose for easy local development with Redis.

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
   - Copy `.env.example` to `.env` if provided, or set `REDIS_URL` as needed (defaults to `redis://localhost:6379`).

4. **Start Redis and the app using Docker Compose:**
   ```bash
   docker-compose up
   ```
   - This will start both the Next.js app and a Redis instance.


6. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/                # Next.js app directory (pages, layout, API routes)
components/         # React UI components (Sidebar, UserCard, etc.)
hooks/              # Custom React hooks
lib/                # Utilities (Redis client, queries)
public/             # Static assets (avatars, etc.)
stores/             # Zustand stores for state management
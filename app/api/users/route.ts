import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import redis from "@/lib/redis";
import { User } from "@/types";

const CACHE_KEY = "users";
const TTL = 60 * 5; // 5 minutes
const USERS_COUNT = 100;

/**
 * This function generates a list of fake users using the Faker library.
 * I used Faker because other APIs only provide a few users,
 * and I wanted to simulate a more realistic, large dataset to test the app.
 */
const generateUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => ({
    id: faker.number.int(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    city: faker.location.city(),
    phone: faker.phone.number(),
    company: faker.company.name(),
  }));
};

export async function GET(req: Request) {
  const { pathname } = new URL(req.url);

  // Log only requests to /api/users
  if (pathname === "/api/users") {
    // Check Redis cache for users
    const cachedUsers = await redis.get(CACHE_KEY);
    if (cachedUsers) {
      return NextResponse.json(JSON.parse(cachedUsers));
    }

    // Generate fake users if not found in cache
    const users = generateUsers(USERS_COUNT);

    // Store generated users in Redis with expiration
    await redis.set(CACHE_KEY, JSON.stringify(users), "EX", TTL);

    return NextResponse.json(users);
  }

  // Ignore other requests
  return NextResponse.json({ message: "Not Found" }, { status: 404 });
}

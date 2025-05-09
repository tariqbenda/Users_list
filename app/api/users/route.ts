import { NextResponse } from "next/server";
import { faker } from '@faker-js/faker';
import redis from "@/lib/redis";
import { User } from "@/types";

const cachedKey = "users";
const TTL = 60; // 1 minute
const API_URL = "https://jsonplaceholder.typicode.com/users";



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
    const { pathname, searchParams } = new URL(req.url);

    const page = searchParams.get("page");
    const limit = searchParams.get("limit");

    console.log("Page:", page);
    console.log("Limit:", limit);

    // Log only requests to /api/users
    if (pathname === "/api/users") {
        const cachedUsers = await redis.get(cachedKey);
        if (cachedUsers) {
            console.log("Cache hit");
            return NextResponse.json(JSON.parse(cachedUsers));
        }
        console.log("Cache miss");

        const response = generateUsers(50); // Simulate fetching users from an API

        const users = response;

        await redis.set(cachedKey, JSON.stringify(users), "EX", TTL);
        console.log("Cache set");

        return NextResponse.json(users);
    }

    // Ignore other requests
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
}
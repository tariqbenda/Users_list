import { NextResponse } from "next/server";
import redis from "@/lib/redis";

const cachedKey = "users";
const TTL = 60; // 1 minute
const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function GET(req: Request) {
    const { pathname } = new URL(req.url);

    // Log only requests to /api/users
    if (pathname === "/api/users") {
        const cachedUsers = await redis.get(cachedKey);
        if (cachedUsers) {
            console.log("Cache hit");
            return NextResponse.json(JSON.parse(cachedUsers));
        }
        console.log("Cache miss");

        const response = await fetch(API_URL);
        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
        }
        const users = await response.json();

        await redis.set(cachedKey, JSON.stringify(users), "EX", TTL);
        console.log("Cache set");

        return NextResponse.json(users);
    }

    // Ignore other requests
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
}
// This function fetch From my own API
// and it will be used in the app/api/users/route.ts
// to generate fake users using the Faker library as (Real External API) have a important data
// for the secrity reasons the client should not know about the External API he just know about my API and get the data needed
// and the data will be generated in the server side and sent to the client
// and the data will be cached in the redis for 5 minute

export const fetchUsers = async () => {

  try {
    const res = await fetch(`/api/users`);
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  }
  catch (error) {
    console.log("Error fetching users:", error);
  }
  return [];
};
export const fetchUsers = async () => {

    console.log("Fetching users from API... fun");
    const res = await fetch(`/api/users`);

    if (!res.ok) throw new Error("Failed to fetch users");

    return res.json();
  };
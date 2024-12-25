import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    return (
      <main>
        <h1 className="text-3xl font-bold text-red-500">Failed to load users.</h1>
      </main>
    );
  }

  const users: User[] = await response.json();  // Specify that `users` is an array of `User` objects

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Users List</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <Link href={`${user.id}`} className="text-blue-500 hover:underline">
              {user.id}. {user.name}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

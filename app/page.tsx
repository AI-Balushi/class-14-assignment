import Link from "next/link";

export default async function Home() {
	try {
		// Fetch all users
		const response = await fetch("https://jsonplaceholder.typicode.com/users");

		if (!response.ok) {
			throw new Error("Failed to fetch users.");
		}

		const users = await response.json();

		return (
			<main>
				<h1 className="text-3xl font-bold mb-4">Users List</h1>
				<div>
					{users.map((user: any) => (
						<div key={user.id}>
							{/* Corrected Link usage */}
							<Link href={`${user.id}`} className="text-blue-500 hover:underline">
								{user.id}. {user.name}
							</Link>
						</div>
					))}
				</div>
			</main>
		);
	} catch (error) {
		console.error(error);
		return (
			<main>
				<h1 className="text-3xl font-bold text-red-500">Failed to load users.</h1>
			</main>
		);
	}
}

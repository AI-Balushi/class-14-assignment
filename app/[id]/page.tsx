const DynamicUsers = async ({ params }: { params: { id: string } }) => {
	// Fetch data for the specific user by ID
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);

		if (!response.ok) {
			throw new Error(`Failed to fetch user with ID: ${params.id}`);
		}

		const user = await response.json();

		return (
			<div className="pl-5 text-5xl">
				<h1>User Details:</h1>
				<p>
					<strong>ID:</strong> {params.id}
				</p>
				<p>
					<strong>Name:</strong> {user.name}
				</p>
				<p>
					<strong>Username:</strong> {user.username}
				</p>
				<p>
					<strong>Email:</strong> {user.email}
				</p>
			</div>
		);
	} catch (error) {
		console.error(error);
		return (
			<div className="pl-5 text-5xl text-red-500">
				Error: Unable to fetch user details.
			</div>
		);
	}
};

export default DynamicUsers;

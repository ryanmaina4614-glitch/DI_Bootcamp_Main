import { useEffect, useState } from "react";

// ====================
// Exercise 2: Greeting
// ====================

interface GreetingProps {
  name: string;
  messageCount: number;
}

const Greeting = ({ name, messageCount }: GreetingProps) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You have {messageCount} new messages.</p>
    </div>
  );
};

// ====================
// Exercise 3: Counter
// ====================

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<string>("None");

  const increment = (): void => {
    setCount((prev) => prev + 1);
    setLastAction("Incremented");
  };

  const decrement = (): void => {
    setCount((prev) => prev - 1);
    setLastAction("Decremented");
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <p>Last Action: {lastAction}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
};

// ====================
// Exercise 4: UserCard
// ====================

interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

const UserCard = ({
  name = "Anonymous User",
  age = 18,
  role = "Guest",
}: UserCardProps) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

// ====================
// Exercise 5: UserList
// ====================

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <br />
            Username: {user.username}
            <br />
            Email: {user.email}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

// ====================
// Main App Component
// ====================

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React + TypeScript Exercises</h1>

      <hr />

      <Greeting name="Ryan" messageCount={5} />

      <hr />

      <Counter />

      <hr />

      <h2>User Cards</h2>

      <UserCard
        name="John Doe"
        age={25}
        role="Developer"
      />

      <UserCard name="Jane" />

      <UserCard />

      <hr />

      <UserList />
    </div>
  );
}

export default App;
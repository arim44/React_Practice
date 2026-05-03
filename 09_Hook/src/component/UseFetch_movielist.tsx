import { useFetch } from "./useFetch";

export default function 


// export default function UserList() {
// const [users, setUsers] = useState<User[]>([]);
// const [error, setError] = useState<string | null>(null);
// useEffect(() => {
// const load = async () => {
// try {
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// if (!res.ok) {
// throw new Error('요청 실패');
// }
// const data: User[] = await res.json();
// setUsers(data);
// } catch (err) {
// if (err instanceof Error) { setError(err.message); }
// }
// };
// load();
// }, []);

// if (error) return <p>{error}</p>;
// return (
// <ul>
// {users.map((user) => (
// <li key={user.id}>
// {user.name} ({user.email})
// </li>
// ))}
// </ul>
// );
// }
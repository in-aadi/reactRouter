import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({})
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/in-aadi")
	// 		.then((res) => res.json())
	// 		.then((res) => setData(res));
	// }, []);

	return (
		<div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
			Github Public Repos: {data.public_repos}
            <img src={data.avatar_url} alt="Github Picture" width={300} />
		</div>
	);
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/in-aadi");
    return response.json();
}
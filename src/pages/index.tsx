// import useSWR from "swr";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
const USERS = gql`
  query($name: String!, $id: Int!) {
    users(name: $name, id: $id) {
      name
      id
    }
  }
`;

// const fetcher = (query) =>
//   fetch("/api", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//   })
//     .then((res) => res.json())
//     .then((json) => json.data);

export default function Index() {
  //   const { data, error } = useSWR("{ users { name } }", fetcher);
  const [state, setState] = useState("fuga");
  const { loading, error, data } = useQuery(USERS, {
    variables: { name: state, id: 1 },
  });
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { users } = data;

  return (
    <div>
      {users.map((user, i) => (
        <div key={i}>{user.name}</div>
      ))}
      <button onClick={() => setState("name")} />
    </div>
  );
}

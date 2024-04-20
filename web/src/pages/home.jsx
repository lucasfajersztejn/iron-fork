import { useEffect, useState } from "react";
import { getRestaurants } from "../services/api.service";

function Home() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getRestaurants().then((response) => {
      setRestaurants(response.data);
    });
  }, []);

  if (!restaurants) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(restaurants, null, 2)}</pre>
    </div>
  );
}

export default Home;

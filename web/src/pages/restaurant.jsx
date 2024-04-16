import { useParams } from "react-router-dom";

function Restaurant() {
  const params = useParams();

  return <div>Restaurant {params.id}!</div>;
}

export default Restaurant;

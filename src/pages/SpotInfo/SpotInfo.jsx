import { useLoaderData } from "react-router-dom";

const SpotInfo = () => {
  const spot = useLoaderData();
  console.log(spot);
  return <div></div>;
};

export default SpotInfo;

import { Fade, Slide } from "react-awesome-reveal";
import Banner from "./Banner";
import Countries from "./Countries";
import TouristSpots from "./TouristSpots";

const Home = () => {
  return (
    <div>
      <Slide>
        <Banner></Banner>
      </Slide>
      <Fade>
        <TouristSpots></TouristSpots>
        <Countries></Countries>
      </Fade>
    </div>
  );
};

export default Home;

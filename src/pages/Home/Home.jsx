import { Fade, Slide } from "react-awesome-reveal";
import Banner from "./Banner";
import Countries from "./Countries";
import TouristSpots from "./TouristSpots";
import Testimonials from "./Testimonials";
import Questions from "./Questions";

const Home = () => {
  return (
    <div>
      <Slide>
        <Banner></Banner>
      </Slide>
      <Fade>
        <TouristSpots></TouristSpots>
        <Countries></Countries>
        <Testimonials></Testimonials>
        <Questions></Questions>
      </Fade>
    </div>
  );
};

export default Home;

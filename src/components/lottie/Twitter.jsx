import Lottie from "lottie-react";
import github from "../../../public/svg-animation/twitter.json";
const Twitter = () => (
  <Lottie
    className="w-12 h-12 border-white"
    animationData={github}
    loop={true}
  />
);

export default Twitter;

import Lottie from "lottie-react";
import github from "../../../public/svg-animation/github.json";
const Github = () => (
  <Lottie
    className="w-12 h-12 text-white border-white"
    animationData={github}
    loop={true}
  />
);

export default Github;

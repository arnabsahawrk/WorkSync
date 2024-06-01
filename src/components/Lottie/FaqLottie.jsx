import Lottie from "lottie-react";
import faqLottie from "../../../public/faq.json";
const FaqLottie = () => {
  const style = {
    height: 300,
  };
  return <Lottie animationData={faqLottie} style={style} />;
};

export default FaqLottie;

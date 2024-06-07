import PropTypes from "prop-types";
import Lottie from "lottie-react";
import emptyAnimation from "../../../../public/empty.json";

const Empty = ({ text }) => {
  const style = {
    height: 300,
  };
  return (
    <div className="container mx-auto px-4 py-10 space-y-4 md:space-y-6">
      <Lottie animationData={emptyAnimation} style={style} />;
      <p className="text-secondary text-center font-bold text-lg md:text-2xl underline decoration-dotted capitalize">
        {text}
      </p>
    </div>
  );
};

Empty.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Empty;

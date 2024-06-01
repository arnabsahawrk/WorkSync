import PropTypes from "prop-types";

const SubmitButton = ({ text }) => {
  return (
    <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
      <button
        type="submit"
        className="block w-full px-4 py-3 bg-secondary hover:bg-[#fdb71ccc] transition duration-200 text-base md:text-lg rounded dark:text-common text-darkPrimary font-semibold"
      >
        {text}
      </button>
    </div>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitButton;

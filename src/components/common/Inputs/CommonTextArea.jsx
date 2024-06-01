import PropTypes from "prop-types";

const CommonTextArea = ({ placeholder }) => {
  return (
    <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
      <textarea
        rows={3}
        placeholder={placeholder}
        className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
        required
      ></textarea>
    </div>
  );
};

CommonTextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default CommonTextArea;

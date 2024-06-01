import PropTypes from "prop-types";

const CommonInput = ({ value, placeholder, type }) => {
  return (
    <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
      <input
        defaultValue={value ? value : ""}
        placeholder={placeholder}
        type={type}
        className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
        required
      />
    </div>
  );
};

CommonInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CommonInput;

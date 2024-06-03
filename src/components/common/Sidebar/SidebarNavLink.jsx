import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SidebarNavLink = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-3  transition-colors duration-300 transform  hover:bg-secondary hover:text-common ${
          isActive ? "bg-secondary text-common" : "text-primaryBg"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

SidebarNavLink.propTypes = {
  label: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default SidebarNavLink;

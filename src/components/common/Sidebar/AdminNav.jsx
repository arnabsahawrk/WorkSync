import SidebarNavLink from "./SidebarNavLink";
import { FaPeopleGroup } from "react-icons/fa6";

const AdminNav = () => {
  return (
    <nav>
      {/* All Employee List  */}
      <SidebarNavLink
        label="All Employee List"
        address="/dashboard"
        icon={FaPeopleGroup}
      />
    </nav>
  );
};

export default AdminNav;

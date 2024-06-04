import SidebarNavLink from "./SidebarNavLink";
import { FaPeopleGroup } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const AdminNav = () => {
  return (
    <nav>
      {/* Profile  */}
      <SidebarNavLink label="Profile" address="/dashboard" icon={CgProfile} />
      {/* All Employee List  */}
      <SidebarNavLink
        label="All Employee List"
        address="/dashboard/all-employee-list"
        icon={FaPeopleGroup}
      />
    </nav>
  );
};

export default AdminNav;

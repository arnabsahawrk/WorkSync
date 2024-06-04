import SidebarNavLink from "./SidebarNavLink";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";

const HrNav = () => {
  return (
    <nav>
      {/* Profile  */}
      <SidebarNavLink label="Profile" address="/dashboard" icon={CgProfile} />
      {/* Employee List  */}
      <SidebarNavLink
        label="Employee List"
        address="/dashboard/employee-list"
        icon={HiOutlineUserGroup}
      />
      {/* Progress  */}
      <SidebarNavLink
        label="Progress"
        address="/dashboard/progress"
        icon={GiProgression}
      />
    </nav>
  );
};

export default HrNav;

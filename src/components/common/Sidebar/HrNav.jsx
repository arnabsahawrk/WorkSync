import SidebarNavLink from "./SidebarNavLink";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiProgression } from "react-icons/gi";

const HrNav = () => {
  return (
    <nav>
      {/* Employee List  */}
      <SidebarNavLink
        label="Employee List"
        address="/dashboard"
        icon={HiOutlineUserGroup}
      />
      {/* Progress  */}
      <SidebarNavLink
        label="Progress"
        address="/progress"
        icon={GiProgression}
      />
    </nav>
  );
};

export default HrNav;

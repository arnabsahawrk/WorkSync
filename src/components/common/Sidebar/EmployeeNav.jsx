import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { SiContactlesspayment } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import SidebarNavLink from "./SidebarNavLink";

const EmployeeNav = () => {
  return (
    <nav>
      {/* Profile  */}
      <SidebarNavLink label="Profile" address="/dashboard" icon={CgProfile} />
      {/* Work Sheet  */}
      <SidebarNavLink
        label="Work Sheet"
        address="/dashboard/work-sheet"
        icon={BsFileEarmarkSpreadsheet}
      />
      {/* Payment History  */}
      <SidebarNavLink
        label="Payment History"
        address="/dashboard/payment-history"
        icon={SiContactlesspayment}
      />
    </nav>
  );
};

export default EmployeeNav;

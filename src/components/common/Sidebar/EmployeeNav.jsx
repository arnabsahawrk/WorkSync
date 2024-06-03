import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { SiContactlesspayment } from "react-icons/si";
import SidebarNavLink from "./SidebarNavLink";

const EmployeeNav = () => {
  return (
    <nav>
      {/* Work Sheet  */}
      <SidebarNavLink
        label="Work Sheet"
        address="/dashboard"
        icon={BsFileEarmarkSpreadsheet}
      />
      {/* Payment History  */}
      <SidebarNavLink
        label="Payment History"
        address="/payment-history"
        icon={SiContactlesspayment}
      />
    </nav>
  );
};

export default EmployeeNav;

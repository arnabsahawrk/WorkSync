import PropTypes from "prop-types";
import { LiaRupeeSignSolid } from "react-icons/lia";
import SalaryIncreaseModal from "../Modal/SalaryIncreaseModal";
import { ImSpinner10 } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { MdDoNotDisturb } from "react-icons/md";

const AllEmployeeListCard = ({
  employee,
  staffAsync,
  staffAsyncPending,
  handleHR,
  handleFire,
}) => {
  return (
    <div className="w-full max-w-sm overflow-hidden bg-primaryBg rounded-lg shadow-lg dark:bg-darkPrimary border border-darkPrimary dark:border-common group">
      <div className="overflow-hidden">
        <img
          className="object-cover object-center w-full h-56 group-hover:scale-110 transition duration-700"
          src={employee?.photoURL}
          alt="avatar"
        />
      </div>
      <div className="px-6 py-3 bg-primary dark:bg-secondary">
        <h1 className="mx-3 text-lg font-semibold text-common">
          {employee?.designation}
        </h1>
      </div>
      <div className="px-6 py-4 text-darkPrimary dark:text-common">
        <h1 className="text-xl font-semibold">{employee?.name}</h1>
        <p className="py-2 text-darkPrimaryBg dark:text-primaryBg">
          {employee?.email}
        </p>
        {/* Salary  */}
        <div className="flex items-center gap-3 mt-4 font-bold">
          <p className="flex justify-center items-center gap-1">
            <LiaRupeeSignSolid />
            {employee.salary}
          </p>
          <SalaryIncreaseModal
            staff={employee}
            staffAsync={staffAsync}
            staffAsyncPending={staffAsyncPending}
          />
        </div>
        {/* Role */}
        <div className="flex items-center mt-4 gap-1">
          <CgProfile />
          {employee.role === "HR" ? (
            <p className="font-bold flex items-center gap-1">HR</p>
          ) : (
            <p className="flex justify-center items-center gap-3 font-bold">
              <span className="flex items-center gap-1">Employee</span>
              {staffAsyncPending ? (
                <ImSpinner10 className="animate-spin mx-auto" />
              ) : (
                <button
                  disabled={staffAsyncPending || employee.isFired}
                  onClick={() => handleHR(employee.uid)}
                  className={`p-1 rounded text-xs ${
                    employee.isFired
                      ? "bg-[#fdb71c80] text-[#F5F5F5CC] cursor-not-allowed"
                      : "bg-secondary text-common"
                  }`}
                >
                  Make HR
                </button>
              )}
            </p>
          )}
        </div>
        {/* Fire */}
        <div className="flex items-center mt-4 gap-1">
          <MdDoNotDisturb />
          {employee.isFired ? (
            <p className="text-red-400 font-bold">Fired</p>
          ) : (
            <>
              {staffAsyncPending ? (
                <ImSpinner10 className="animate-spin mx-auto" />
              ) : (
                <button
                  disabled={staffAsyncPending}
                  onClick={() => handleFire(employee.uid)}
                  className="bg-red-400 p-1 rounded text-xs text-common font-bold"
                >
                  Fire
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

AllEmployeeListCard.propTypes = {
  employee: PropTypes.object.isRequired,
  staffAsync: PropTypes.func.isRequired,
  staffAsyncPending: PropTypes.bool.isRequired,
  handleHR: PropTypes.func.isRequired,
  handleFire: PropTypes.func.isRequired,
};

export default AllEmployeeListCard;

import { LiaRupeeSignSolid } from "react-icons/lia";
import CommonTable from "../../../../components/Table/CommonTable";
import Container from "../../../../components/common/Others/Container";
import CommonSpinner from "../../../../components/common/Spinner/CommonSpinner";
import { useGetVerifiedEmployees } from "../../../../hooks/query/useGet";
import Swal from "sweetalert2";
import { usePutStaffData } from "../../../../hooks/query/usePut";
import { useEffect, useState } from "react";
import { ImSpinner10 } from "react-icons/im";
import SalaryIncreaseModal from "../../../../components/Modal/SalaryIncreaseModal";
import AllEmployeeListCard from "../../../../components/Card/AllEmployeeListCard";

const AllEmployeeList = () => {
  const [view, setView] = useState(true);

  const {
    verifiedEmployees,
    verifiedEmployeesIsLoading,
    verifiedEmployeesRefetch,
  } = useGetVerifiedEmployees();
  const { staffAsync, staffAsyncPending } = usePutStaffData();

  useEffect(() => {
    verifiedEmployeesRefetch();
  }, [verifiedEmployeesRefetch, staffAsyncPending]);

  //Handle HR role
  const handleHR = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#fdb71c",
      cancelButtonColor: "#866674",
      color: "#F5F5F5",
      background: "#402530",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        staffAsync({
          uid: e,
          isVerified: true,
          role: "HR",
          update: true,
        });
        Swal.fire({
          color: "#F5F5F5",
          background: "#402530",
          confirmButtonColor: "#fdb71c",
          title: "Role Changed.",
          icon: "success",
        });
      }
    });
  };

  //Handle Fire role
  const handleFire = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fdb71c",
      cancelButtonColor: "#866674",
      color: "#F5F5F5",
      background: "#402530",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        staffAsync({
          uid: e,
          isFired: true,
          update: true,
        });
        Swal.fire({
          color: "#F5F5F5",
          background: "#402530",
          confirmButtonColor: "#fdb71c",
          title: "The Employee Is Fired.",
          icon: "success",
        });
      }
    });
  };

  const columns = [
    {
      header: "No.",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Designation",
      accessorKey: "designation",
    },
    {
      header: "Salary",
      accessorKey: "salary",
      cell: (e) => (
        <div className="space-y-1 font-bold">
          <p className="flex justify-center items-center gap-1">
            {e.row.original.salary}
            <LiaRupeeSignSolid />
          </p>
          <SalaryIncreaseModal
            staff={e.row.original}
            staffAsync={staffAsync}
            staffAsyncPending={staffAsyncPending}
          />
        </div>
      ),
    },
    {
      header: "Role",
      accessorKey: "role",
      cell: (e) =>
        e.row.original.role === "HR" ? (
          <p className="font-bold">HR</p>
        ) : (
          <p className="flex flex-col justify-center items-center gap-1 font-bold">
            <span>Employee</span>
            {staffAsyncPending ? (
              <ImSpinner10 className="animate-spin mx-auto" />
            ) : (
              <button
                disabled={staffAsyncPending || e.row.original.isFired}
                onClick={() => handleHR(e.row.original.uid)}
                className={`p-1 rounded text-xs ${
                  e.row.original.isFired
                    ? "bg-[#fdb71c80] text-[#F5F5F5CC] cursor-not-allowed"
                    : "bg-secondary"
                }`}
              >
                Make HR
              </button>
            )}
          </p>
        ),
    },
    {
      header: " ",
      cell: (e) =>
        e.row.original.isFired ? (
          <p className="text-red-400 font-bold">Fired</p>
        ) : (
          <>
            {staffAsyncPending ? (
              <ImSpinner10 className="animate-spin mx-auto" />
            ) : (
              <button
                disabled={staffAsyncPending}
                onClick={() => handleFire(e.row.original.uid)}
                className="bg-red-400 p-1 rounded text-xs"
              >
                Fire
              </button>
            )}
          </>
        ),
    },
  ];

  return (
    <Container>
      <p className="text-darkPrimary dark:text-primaryBg font-bold text-3xl md:text-4xl text-center underline">
        Verified Employee List
      </p>
      {/* View Button  */}
      <p className="text-center mt-10">
        <button
          onClick={() => setView(!view)}
          className="px-4 py-2 text-common bg-primary dark:bg-secondary rounded-md hover:scale-95 transition duration-300 font-bold"
        >
          {view ? "Card View" : "Table View"}
        </button>
      </p>
      {/* Table or Card View  */}
      {verifiedEmployeesIsLoading ? (
        <CommonSpinner />
      ) : view ? (
        //Table View
        <CommonTable data={verifiedEmployees} columns={columns} />
      ) : (
        //Card View
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {verifiedEmployees?.map((employee) => (
            <AllEmployeeListCard
              key={employee?.uid}
              employee={employee}
              staffAsync={staffAsync}
              staffAsyncPending={staffAsyncPending}
              handleHR={handleHR}
              handleFire={handleFire}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default AllEmployeeList;

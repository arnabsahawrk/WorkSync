import CommonTable from "../../../../components/Table/CommonTable";
import Container from "../../../../components/common/Others/Container";
import { useGetEmployees } from "../../../../hooks/query/useGet";
import { MdVerified } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { usePutStaffData } from "../../../../hooks/query/usePut";
import { ImSpinner10 } from "react-icons/im";
import CommonSpinner from "../../../../components/common/Spinner/CommonSpinner";
import { useEffect } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";

const EmployeeList = () => {
  const { employees, employeesIsLoading, employeesRefetch } = useGetEmployees();
  const { staffAsync, staffAsyncPending } = usePutStaffData();

  useEffect(() => {
    employeesRefetch();
  }, [employeesRefetch, staffAsyncPending]);

  const columns = [
    // {
    //   header: "No.",
    //   accessorKey: "id",
    // },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Account No.",
      accessorKey: "accountNumber",
    },
    {
      header: "Salary",
      accessorKey: "salary",
      cell: (e) => (
        <p className="space-y-1">
          <span className="flex justify-center items-center gap-1">
            {e.row.original.salary}
            <LiaRupeeSignSolid />
          </span>
          <button
            disabled={!e.row.original.isVerified}
            className={`rounded p-1 ${
              e.row.original.isVerified
                ? "bg-secondary"
                : "bg-[#fdb71c80] text-[#F5F5F5CC] cursor-not-allowed"
            }`}
          >
            Pay
          </button>
        </p>
      ),
    },
    {
      header: "Status",
      cell: (e) => (
        <>
          {staffAsyncPending ? (
            <ImSpinner10 className="animate-spin mx-auto" />
          ) : (
            <button
              disabled={staffAsyncPending}
              onClick={() =>
                staffAsync({
                  uid: e.row.original.uid,
                  isVerified: !e.row.original.isVerified,
                  update: true,
                })
              }
              className="bg-secondary p-1 rounded"
            >
              {e.row.original.isVerified ? (
                <span className="flex justify-center items-center gap-1">
                  Verified <MdVerified />
                </span>
              ) : (
                <span className="flex justify-center items-center gap-1">
                  Not Verified <RxCrossCircled />
                </span>
              )}
            </button>
          )}
        </>
      ),
    },
    {
      header: " ",
      cell: () => (
        <button className="bg-white text-secondary font-bold p-1 rounded">
          Details
        </button>
      ),
    },
  ];

  return (
    <Container>
      <p className="text-darkPrimary dark:text-primaryBg font-bold text-3xl md:text-4xl text-center underline">
        Employee List
      </p>
      {employeesIsLoading ? (
        <CommonSpinner />
      ) : (
        <CommonTable data={employees} columns={columns} />
      )}
    </Container>
  );
};

export default EmployeeList;

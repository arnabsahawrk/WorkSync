import CommonTable from "../../../../components/Table/CommonTable";
import Empty from "../../../../components/common/Empty/Empty";
import Container from "../../../../components/common/Others/Container";
import CommonSpinner from "../../../../components/common/Spinner/CommonSpinner";
import { useGetPaymentHistory } from "../../../../hooks/query/useGet";

const PaymentHistory = () => {
  const { history, historyIsLoading } = useGetPaymentHistory();

  const historyColumn = [
    {
      header: "Given Date",
      accessorKey: "date",
    },
    {
      header: "Salary Month",
      accessorFn: (row) => `${row.inputDate.month}/${row.inputDate.year}`,
    },
    {
      header: "Account Number",
      cell: (e) => `${e.row.original.accountNumber}`,
    },
    {
      header: "Amount",
      accessorKey: "salary",
    },
    {
      header: "Transaction Id",
      cell: (e) => `${e.row.original.transactionId}`,
    },
  ];

  return (
    <Container>
      <p className="text-darkPrimary dark:text-primaryBg font-bold text-3xl md:text-4xl text-center underline">
        History Of Payment
      </p>
      {/* Payment History Table  */}
      {historyIsLoading ? (
        <CommonSpinner />
      ) : history.length > 0 ? (
        <CommonTable data={history} columns={historyColumn} />
      ) : (
        <Empty text="No payment has been made yet" />
      )}
    </Container>
  );
};

export default PaymentHistory;

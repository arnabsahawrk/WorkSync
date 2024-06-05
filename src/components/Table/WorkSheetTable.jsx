import { useGetTasks } from "../../hooks/query/useGet";
import CommonSpinner from "../common/Spinner/CommonSpinner";

const WorkSheetTable = () => {
  const { tasks, tasksIsLoading } = useGetTasks();
  const TABLE_HEAD = ["No.", "Task", "Time", "Date"];

  return (
    <>
      {tasksIsLoading ? (
        <CommonSpinner />
      ) : (
        tasks.length > 0 && (
          <div className="w-full max-w-2xl overflow-auto rounded-md border-2 border-darkPrimary dark:border-primaryBg">
            <table className="w-full min-w-max table-auto text-center">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-lightPrimary bg-primary p-4"
                    >
                      <p className="text-sm text-common">{head}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tasks?.map(({ task, hours, date }, index) => (
                  <tr
                    key={index}
                    className="even:bg-lightPrimary odd:bg-mildPrimary text-common"
                  >
                    <td className="p-4">
                      <p className="text-sm font-normal">{index + 1}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-normal">{task}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-normal">{hours}h</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-normal">{date}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </>
  );
};

export default WorkSheetTable;

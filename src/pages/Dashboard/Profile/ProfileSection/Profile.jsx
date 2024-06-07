import { LiaRupeeSignSolid } from "react-icons/lia";
import UpdateProfileModal from "../../../../components/Modal/UpdateProfileModal";
import Container from "../../../../components/common/Others/Container";
import CommonSpinner from "../../../../components/common/Spinner/CommonSpinner";
import { useGetStaff } from "../../../../hooks/query/useGet";

const Profile = () => {
  const { staff, staffIsLoading } = useGetStaff();

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <Container className="max-w-md bg-darkPrimaryBg dark:bg-primaryBg min-h-[300px] rounded-md">
        {/* Staff Info */}
        {staffIsLoading ? (
          <CommonSpinner />
        ) : (
          <div className="py-5 text-center text-base text-common dark:text-darkPrimary font-bold space-y-1">
            <img
              src={staff?.photoURL}
              alt={staff?.name}
              className="object-cover size-52 mx-auto rounded-full mb-5 border border-secondary dark:border-primary shadow-lg hover:shadow-sm transition duration-300"
            />
            <p>
              Name: <span className="font-medium text-sm">{staff?.name}</span>
            </p>
            <p>
              Email: <span className="font-medium text-sm">{staff?.email}</span>
            </p>
            <p>
              Role: <span className="font-medium text-sm">{staff?.role}</span>
            </p>
            <p>
              Account Number:
              <span className="font-medium text-sm">
                {" "}
                {staff?.accountNumber}
              </span>
            </p>
            <p className="flex items-center gap-1 justify-center">
              Salary:
              <span className="font-medium text-sm">{staff?.salary}</span>
              <LiaRupeeSignSolid />
            </p>
            <p>
              Designation:
              <span className="font-medium text-sm"> {staff?.designation}</span>
            </p>
            <p>
              Status:
              <span className="font-medium text-sm">
                {staff?.isVerified ? " Verified" : " Not Verified"}
              </span>
            </p>
            <p>
              Join: <span className="font-medium text-sm">{staff?.join}</span>
            </p>
            <UpdateProfileModal />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Profile;

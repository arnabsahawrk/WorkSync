import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/common/Others/Container";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-common">
      <Container className="h-screen flex flex-col items-center justify-center py-10">
        <div className="w-full max-w-[552px]">
          {/* Logo */}
          <Link
            to="/"
            className="flex justify-center items-center gap-2 bg-primary py-2 rounded-t-md"
          >
            <img
              src="https://i.postimg.cc/8PXkRHGy/work-sync.png"
              alt="WorkSync"
              className="size-8 object-cover"
            />
            <h1 className="text-common text-2xl font-bold">WorkSync</h1>
          </Link>
          <div className="bg-white p-6 rounded-b-md border border-gray-400 text-center flex flex-col justify-center items-center gap-5">
            <img
              src="https://identity.ripplingcdn.com/68fa96c8cbc46b546352.svg"
              alt
              aria-hidden="true"
              style={{ width: 140, height: 140 }}
            />
            <p className="text-darkPrimary font-semibold text-2xl">
              Unknown error
            </p>
            <p className="text-darkPrimaryBg">
              Sorry for the inconvenience. We have notified our team and will
              try to identify the cause of this. Please refer to this error code
              when you reach out to our technical support team.
            </p>
            <p className="text-darkPrimaryBg">Error: 404</p>
            <button
              onClick={() => navigate(-1)}
              className="border-2 border-primary w-full py-[14px] rounded font-bold hover:shadow-xl"
            >
              Back
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ErrorPage;

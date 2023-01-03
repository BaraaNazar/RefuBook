import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import NavBar from '../home/navbar';

const index = () => {
  return (
    <div className="h-screen w-full bg-refubg-blue flex items-center justify-center">
      <div className="h-[90vh] xl:h-[80vh] w-11/12 xl:w-4/5 py-6 px-4 bg-white rounded-6xl shadow-custom-xl relative overflow-hidden">
        <div className="hidden xl:block absolute -left-48 -top-4 z-0 w-[800px] h-[650px] rounded-[1009px] bg-[#E5FAFF]" />

        <div className="xl:hidden absolute -left-16 -bottom-[40%] z-0 w-[500px] h-[500px] rounded-[1009px] bg-[#E5FAFF]" />

        <div className="relative z-10">
          <NavBar />

          <div
            data-testid="signup-main-container"
            className="p-10 h-[40vh] xl:w-2/5 transform translate-y-6 xl:translate-y-10 m-auto bg-white shadow-custom-xl rounded-6xl flex flex-col items-center justify-between xl:justify-around"
          >
            <h3 className="text-xl xl:text-2xl text-refubook-blue font-bold leading-[20px] xl:leading-[28px]">
              SIGN UP WITH
            </h3>

            <div className="w-full grid gap-1 xl:gap-0 xl:flex xl:justify-between px-6 xl:p-0">
              <button
                className="bg-[#EB5757] xl:w-2/5 h-12 rounded-6xl flex items-center justify-center"
                type="button"
                onClick={() => {}}
              >
                <FaGoogle color="white" className="text-2xl xl:text-3xl" />
              </button>
              <h5 className="text-xl font-bold text-refubook-blue xl:w-1/5 flex items-center justify-center">
                OR
              </h5>
              <button
                className="bg-[#2F80ED] xl:w-2/5 h-12 rounded-6xl flex items-center justify-center"
                type="button"
                onClick={() => {}}
              >
                <FaFacebookF color="white" className="text-2xl xl:text-3xl" />
              </button>
            </div>

            <h5
              title="AlreadyMember"
              className="text-[#70CDD6] hidden xl:block"
            >
              Already a Member?{' '}
              <Link to="/login">
                <button className="text-[#70CDD6] font-bold" type="button">
                  Sign in
                </button>
              </Link>
            </h5>
          </div>
        </div>

        <div className="xl:hidden w-full absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <h5 className="text-[#70CDD6] text-xl">Already a Member? </h5>
          <Link to="/login">
            <button
              className="mt-2 text-white bg-refubook-blue px-6 py-0.5 rounded-xl font-bold"
              type="button"
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default index;

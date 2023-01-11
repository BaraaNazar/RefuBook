import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import NavBar from '../../Containers/Navbar';
import { auth } from '../../Firebase/firebase';
// import { signIn } from '../../Features/signUpSlice';

const index = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.signup);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const logInWithGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, googleProvider);

    const path = `/user-profile`;
    navigate(path);
  };

  const logInWithFacebook = (e) => {
    e.preventDefault();

    signInWithPopup(auth, facebookProvider);

    const path = `/user-profile`;
    navigate(path);
  };

  return (
    <div className="h-screen w-full bg-refubook-blue flex items-center justify-center">
      <div className="h-[90vh] xl:h-[80vh] w-11/12 xl:w-4/5 py-6 px-4 bg-white rounded-6xl shadow-custom-xl relative overflow-hidden">
        <div className="hidden xl:block absolute -left-48 -top-4 z-0 w-[800px] h-[650px] rounded-[1009px] bg-[#E5FAFF]" />

        <div className="xl:hidden absolute -left-16 -bottom-[40%] z-0 w-[500px] h-[500px] rounded-[1009px] bg-[#E5FAFF]" />

        <div className="relative z-10">
          <NavBar />

          <div
            data-testid="login-main-container"
            className="p-10 h-[40vh] xl:w-2/5 transform translate-y-6 xl:translate-y-10 m-auto bg-white shadow-custom-xl rounded-6xl flex flex-col items-center justify-between xl:justify-around"
          >
            <h3 className="text-xl xl:text-2xl text-refubook-blue font-bold leading-[20px] xl:leading-[28px]">
              SIGN IN WITH
            </h3>

            <div className="w-full grid gap-1 xl:gap-0 xl:flex xl:justify-between px-6 xl:p-0">
              <button
                className="bg-[#EB5757] xl:w-2/5 h-12 rounded-6xl flex items-center justify-center"
                type="button"
                onClick={logInWithGoogle}
              >
                <FaGoogle color="white" className="text-2xl xl:text-3xl" />
              </button>
              <h5 className="text-xl font-bold text-refubook-blue xl:w-1/5 flex items-center justify-center">
                OR
              </h5>
              <button
                className="bg-[#2F80ED] xl:w-2/5 h-12 rounded-6xl flex items-center justify-center"
                type="button"
                onClick={logInWithFacebook}
              >
                <FaFacebookF color="white" className="text-2xl xl:text-3xl" />
              </button>
            </div>

            <h5 className="text-[#70CDD6] hidden xl:block">
              Want to be a member?{' '}
              <Link to="/signup">
                <button className="text-[#70CDD6] font-bold" type="button">
                  Sign up
                </button>
              </Link>
            </h5>
          </div>
        </div>

        <div className="xl:hidden w-full absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <h5 className="text-[#70CDD6] text-xl">Want to be a member? </h5>
          <Link to="/signup">
            <button
              className="mt-2 text-white bg-refubook-blue px-6 py-0.5 rounded-xl font-bold"
              type="button"
            >
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default index;

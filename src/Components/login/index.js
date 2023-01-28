import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import NavBar from '../../Containers/Navbar';
import db, { auth } from '../../Firebase/firebase';
import { signUp } from '../../Features/signUpSlice';

const index = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.signup);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const [userRef, setUserRef] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'Users'), (snapshot) => {
      snapshot.docChanges().forEach((docChange) => {
        const userIDD = docChange.doc.id;
        const userEmail = docChange.doc.data().user.email;
        const userObj = { ...docChange.doc.data(), userIDD, userEmail };
        setUserRef((prevUSerRef) => [...prevUSerRef, userObj]);
      });
    });
  }, []);

  const signUpWithGoogle = async (e) => {
    e.preventDefault();

    await signInWithPopup(auth, googleProvider).then((userAuth) => {
      dispatch(
        signUp({
          userId: userAuth.user.uid,
          surename: '',
          email: userAuth.user.email,
          friends: [],
          jobtitle: '',
          // eslint-disable-next-line
          joinedDate: dd + '/' + mm + '/' + yyyy,
          location: '',
          name: userAuth.user.displayName,
          profilePicture: userAuth.user.photoURL,
          skills: [],
          posts: [],
        })
      );

      if (
        userRef.some(
          (singleUser) => userAuth.user.email === singleUser.userEmail
        )
      ) {
        // eslint-disable-next-line
      } else {
        addDoc(collection(db, 'Users'), {
          user: {
            userId: userAuth.user.uid,
            surename: '',
            email: userAuth.user.email,
            friends: [],
            jobtitle: '',
            // eslint-disable-next-line
            joinedDate: dd + '/' + mm + '/' + yyyy,
            location: '',
            name: userAuth.user.displayName,
            profilePicture: userAuth.user.photoURL,
            skills: [],
            posts: [],
          },
        });
      }
    });

    const path = `/user-profile`;
    navigate(path);
  };

  const signUpWithFacebook = async (e) => {
    e.preventDefault();

    await signInWithPopup(auth, facebookProvider).then((userAuth) => {
      dispatch(
        signUp({
          userId: userAuth.user.uid,
          surename: '',
          email: userAuth.user.email,
          friends: [],
          jobtitle: '',
          // eslint-disable-next-line
          joinedDate: dd + '/' + mm + '/' + yyyy,
          location: '',
          name: userAuth.user.displayName,
          profilePicture: userAuth.user.photoURL,
          skills: [],
          posts: [],
        })
      );
      if (
        userRef.some(
          (singleUser) => userAuth.user.email === singleUser.userEmail
        )
      ) {
        // eslint-disable-next-line
      } else {
        // eslint-disable-next-line
        addDoc(collection(db, 'Users'), {
          user: {
            userId: userAuth.user.uid,
            surename: '',
            email: userAuth.user.email,
            friends: [],
            jobtitle: '',
            // eslint-disable-next-line
            joinedDate: dd + '/' + mm + '/' + yyyy,
            location: '',
            name: userAuth.user.displayName,
            profilePicture: userAuth.user.photoURL,
            skills: [],
            posts: [],
          },
        });
      }
    });

    const path = `/user-profile`;
    navigate(path);
  };
  const {t}=useTranslation();
  return (
   
      <div className="min-h-screen xl:min-h-screen w-full xl:full py-6 px-4 bg-white  shadow-custom-xl relative overflow-hidden">
        <div className="hidden xl:block absolute -left-48 -top-4 z-0 w-[800px] h-[650px] rounded-[1009px] bg-[#E5FAFF]" />

        <div className="xl:hidden absolute -left-16 -bottom-[40%] z-0 w-[500px] h-[500px] rounded-[1009px] bg-[#E5FAFF]" />

        <div className="relative z-10 my-auto">
          <NavBar />

          <div
            data-testid="login-main-container"
            className="p-10 h-[40vh] xl:w-2/5 mt-24 transform translate-y-6 xl:translate-y-10 m-auto bg-white shadow-custom-xl rounded-6xl flex flex-col items-center justify-between xl:justify-around"
          >
            <h3 className="text-xl xl:text-2xl text-refubook-blue font-bold leading-[20px] xl:leading-[28px]">
            {t("log-in-page.sign-in-with")}
            </h3>

            <div className="w-full grid gap-1 xl:gap-0 xl:flex xl:justify-between px-6 xl:p-0">
              <button
                className="bg-[#EB5757] xl:w-2/5 h-12 rounded-6xl flex items-center justify-center"
                type="button"
                onClick={signUpWithGoogle}
              >
                <FaGoogle color="white" className="text-2xl xl:text-3xl" />
              </button>
              <h5 className="text-xl font-bold text-refubook-blue xl:w-1/5 flex items-center justify-center">
              {t("log-in-page.Or")}
              </h5>
              <button
                className="bg-[#2F80ED] xl:w-2/5 h-12 rounded-6xl flex items-center justify-center"
                type="button"
                onClick={signUpWithFacebook}
              >
                <FaFacebookF color="white" className="text-2xl xl:text-3xl" />
              </button>
            </div>

            <h5 className="text-[#70CDD6] hidden xl:block">
            {t("log-in-page.member-to-be")}{' '}
              <Link to="/signup">
                <button className="text-[#70CDD6] font-bold" type="button">
               
                {t("navlinks.signUp")}
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
              {t("navlinks.signUp")}
            </button>
          </Link>
        </div>
      </div>

  );
};
export default index;

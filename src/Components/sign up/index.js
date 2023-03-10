import { Link, useNavigate } from 'react-router-dom';
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

  const signUpWithGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, googleProvider).then((userAuth) => {
      
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

  const signUpWithFacebook = (e) => {
    e.preventDefault();

    signInWithPopup(auth, facebookProvider).then((userAuth) => {
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

  return (
  
      <div className="min-h-screen xl:min-h-screen w-full xl:full py-6 px-4 bg-white shadow-custom-xl relative overflow-hidden">
        <div className="hidden xl:block absolute -left-48 -top-4 z-0 w-[800px] h-[650px] rounded-[1009px] bg-[#E5FAFF]" />

        <div className="xl:hidden absolute -left-16 -bottom-[40%] z-0 w-[500px] h-[500px] rounded-[1009px] bg-[#E5FAFF]" />

        <div className="relative z-10">
          <NavBar />

          <div
            data-testid="signup-main-container"
            className="p-10 h-[40vh] xl:w-2/5 transform  mt-24 translate-y-6 xl:translate-y-10 m-auto bg-white shadow-custom-xl rounded-6xl flex flex-col items-center justify-between xl:justify-around"
          >
            <h3 className="text-xl xl:text-2xl text-refubook-blue font-bold leading-[20px] xl:leading-[28px]">
              SIGN UP WITH
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
                OR
              </h5>

              <button
                className="bg-[#2F80ED] xl:w-2/5 h-12 rounded-6xl flex items-center justify-center"
                type="button"
                onClick={signUpWithFacebook}
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

  );
};
export default index;

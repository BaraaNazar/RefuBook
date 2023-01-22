import { useEffect, useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { BsFillCameraFill } from 'react-icons/bs';
import { onAuthStateChanged } from 'firebase/auth';
import db, { auth } from '../../Firebase/firebase';
import Card from './Card';
import LoggedInNavbar from '../../Containers/LoggedInNavbar';
import { signUp } from '../../Features/signUpSlice';

const index = () => {
  const [userRef, setUserRef] = useState([]);
  const [loggedUserId, setLoggedUserId] = useState('');

  const { user } = useSelector((state) => state.signup);
  const dispatch = useDispatch();

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
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      userRef.map((signedUser) => {
        if (currentUser.email === signedUser.userEmail) {
          setLoggedUserId(signedUser.userIDD);
          dispatch(signUp(signedUser.user));
        }
        return true;
      });
    });
  }, [userRef]);

  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [isEditMode, setIsEditMode] = useState(false);
  const [slideNum, setSlideNum] = useState(0);
  const [sliderTotalContent, setSliderTotalContent] = useState(
    screenWidth > 1280 ? 6 : 2
  );

  useEffect(() => {
    const resizeScreen = () => {
      setScreenWidth(window.screen.width);
      setSliderTotalContent(screenWidth > 1280 ? 6 : 2);
    };

    window.addEventListener('resize', resizeScreen);
    resizeScreen();
    return () => window.removeEventListener('resize', resizeScreen);
  }, [window.screen]);

  const toggleSlideNumber = (dotIndex) => {
    setSlideNum(dotIndex * sliderTotalContent);
  };

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const onCancel = () => {
    setIsEditMode(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsEditMode(false);
  };

  const displayNameHandler = (event) => {
    const keyName = event.target.name;
    // eslint-disable-next-line
    const value = event.target.value;

    dispatch(
      signUp({
        userId: user.userId,
        surename: user.surename,
        email: user.email,
        friends: [],
        jobtitle: user.jobtitle,
        joinedDate: '',
        location: user.location,
        [keyName]: value,
        profilePicture: user.profilePicture,
        skills: [],
        posts: user.posts,
      })
    );
  };
  const sureNamehandler = (event) => {
    const keyName = event.target.name;
    // eslint-disable-next-line
    const value = event.target.value;

    dispatch(
      signUp({
        userId: user.userId,
        [keyName]: value,
        email: user.email,
        friends: [],
        jobtitle: user.jobtitle,
        joinedDate: '',
        location: user.location,
        name: user.name,
        profilePicture: user.profilePicture,
        skills: [],
        posts: user.posts,
      })
    );
  };
  const jobTitlehandler = (event) => {
    const keyName = event.target.name;
    // eslint-disable-next-line
    const value = event.target.value;

    dispatch(
      signUp({
        userId: user.userId,
        surename: user.surename,
        email: user.email,
        friends: [],
        [keyName]: value,
        joinedDate: '',
        location: user.location,
        name: user.name,
        profilePicture: user.profilePicture,
        skills: [],
        posts: user.posts,
      })
    );
  };
  const locationhandler = (event) => {
    const keyName = event.target.name;
    // eslint-disable-next-line
    const value = event.target.value;

    dispatch(
      signUp({
        userId: user.userId,
        surename: user.surename,
        email: user.email,
        friends: [],
        jobtitle: user.jobtitle,
        joinedDate: '',
        [keyName]: value,
        name: user.name,
        profilePicture: user.profilePicture,
        skills: [],
        posts: user.posts,
      })
    );
  };
  const onSaveClick = () => {
    updateDoc(doc(db, 'Users', loggedUserId), {
      user,
    });
  };

  return (
    <div
      className="h-screen w-full bg-refubook-bg flex items-center justify-center"
      data-testid="signedUser-profile-main"
    >
      <div className="h-[95vh] xl:h-[90vh]  w-11/12 py-6 px-4 bg-white rounded-6xl shadow-custom-xl relative overflow-hidden">
        <div className="hidden xl:block absolute -left-48 -top-4 z-0 w-[800px] h-[650px] rounded-[1009px] bg-[#E5FAFF]" />

        <div className="xl:hidden absolute -left-16 -bottom-[40%] z-0 w-[500px] h-[500px] rounded-[1009px] bg-[#E5FAFF]" />

        <div className="relative z-10" data-testid="Login-NavBar">
          <LoggedInNavbar />

          <div
            className="flex flex-col xl:items-center mt-8 xl:mt-0 px-6"
            data-testid="signedUser-secondary-container"
          >
            <div className="relative flex flex-col items-center xl:block">
              <img
                className=" rounded-[50%]"
                width={screenWidth > 1280 ? 130 : 100}
                height={screenWidth > 1280 ? 130 : 100}
                src={user.profilePicture}
                alt="profilePic"
              />

              <button
                type="button"
                className="absolute right-[27%] xl:right-2 bottom-7 bg-refubook-blue border-4 border-white rounded-full p-1"
                onClick={toggleEditMode}
              >
                {isEditMode ? (
                  <BsFillCameraFill
                    className="p-0.5"
                    color="white"
                    size={screenWidth > 1280 ? 20 : 16}
                  />
                ) : (
                  <MdOutlineEdit
                    className="transform -rotate-90"
                    color="white"
                    size={screenWidth > 1280 ? 20 : 16}
                  />
                )}
              </button>

              <h3
                className="text-base leading-6 font-medium"
                data-testid="username"
              >
                {user.name}
              </h3>
            </div>

            {isEditMode ? (
              <form
                onSubmit={onSubmit}
                className="xl:w-3/5 grid xl:grid-cols-2 gap-x-10 gap-y-4 mt-6 xL:mt-10"
              >
                <label
                  htmlFor="name"
                  className="col-span-1 grid gap-2 text-lg leading-5 text-[#4699C2] font-bold"
                >
                  Name
                  <input
                    onChange={displayNameHandler}
                    placeholder={user.name}
                    value={user.name}
                    name="name"
                    id="name"
                    type="text"
                    className="border border-gray-500 bg-transparent rounded-[10px] h-9 xl:h-12"
                    required
                  />
                </label>

                <label
                  htmlFor="surename"
                  className="col-span-1 grid gap-2 text-lg leading-5 text-[#4699C2] font-bold"
                >
                  surename
                  <input
                    onChange={sureNamehandler}
                    placeholder={user.surename}
                    value={user.surename}
                    name="surename"
                    id="surename"
                    type="text"
                    className="border border-gray-500 bg-transparent rounded-[10px] h-9 xl:h-12"
                    required
                  />
                </label>

                <label
                  htmlFor="biography"
                  className="col-span-full grid gap-2 text-lg leading-5 text-[#4699C2] font-bold"
                >
                  Biography
                  <input
                    onChange={jobTitlehandler}
                    placeholder={user.jobtitle}
                    value={user.jobtitle}
                    name="jobtitle"
                    id="biography"
                    type="text"
                    className="border border-gray-500 bg-transparent rounded-[10px] h-9 xl:h-12"
                    required
                  />
                </label>

                <label
                  htmlFor="location"
                  className="col-span-full grid gap-2 text-lg leading-5 text-[#4699C2] font-bold"
                >
                  Location
                  <input
                    onChange={locationhandler}
                    placeholder={user.location}
                    value={user.location}
                    name="location"
                    id="location"
                    type="text"
                    className="border border-gray-500 bg-transparent rounded-[10px] h-9 xl:h-12"
                    required
                  />
                </label>

                <div className="col-span-full flex justify-center gap-6 xl:mt-2">
                  <button
                    onClick={onSaveClick}
                    type="submit"
                    className="xl:text-lg font-semibold xl:font-bold leading-5 text-white bg-refubook-blue border border-refubook-blue px-3 xl:px-6 py-1.5 xl:py-3 rounded-6xl"
                  >
                    SAVE
                  </button>
                  <button
                    onClick={onCancel}
                    type="button"
                    className="xl:text-lg font-semibold xl:font-bold leading-5 text-refubook-blue bg-transparent border border-refubook-blue px-3 xl:px-6 py-1.5 xl:py-3 rounded-6xl"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="grid xl:grid-cols-3 gap-x-10 gap-y-6 my-6 xl:my-10">
                  {!user.posts
                    ? null
                    : user.posts.map((card) => (
                        <Card
                          key={card.id}
                          data={card}
                          profilePicture={user.profilePicture}
                          screenWidth={screenWidth}
                        />
                      ))}
                </div>

                <div className="flex items-center justify-center xl:justify-start gap-x-4">
                  {!user.posts
                    ? null
                    : user.posts.map((i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggleSlideNumber(i)}
                        >
                          <div
                            className={`w-3 xl:w-4 h-3 xl:h-4 transform transition-all duration-300 ease-in-out ${
                              slideNum / sliderTotalContent === i
                                ? 'bg-refubook-blue'
                                : 'bg-[#EAE6E6]'
                            } rounded-full`}
                          />
                        </button>
                      ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

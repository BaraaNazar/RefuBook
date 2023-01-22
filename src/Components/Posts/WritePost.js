import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import db, { auth } from '../../Firebase/firebase';
import { signUp } from '../../Features/signUpSlice';
import LoggedInNavbar from '../../Containers/LoggedInNavbar';

const WritePost = () => {
  const [userRef, setUserRef] = useState([]);
  const [loggedUserId, setLoggedUserId] = useState('');
  const [newPost, setNewPost] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const { user } = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onChangeHandler = (event) => {
    const keyName = event.target.name;
    // eslint-disable-next-line
    const value = event.target.value;
    setNewPost((prevPost) => {
      return { ...prevPost, [keyName]: value };
    });
    setAllPosts([...user.posts, newPost]);
  };

  const onSaveClick = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line

    await updateDoc(doc(db, 'Users', loggedUserId), {
      user: {
        userId: user.userId,
        surename: user.surename,
        email: user.email,
        friends: [],
        jobtitle: user.jobtitle,
        joinedDate: '',
        location: user.location,
        name: user.name,
        profilePicture: user.profilePicture,
        skills: [],
        posts: allPosts,
      },
    });

    // const path = `/user-profile`;
    // navigate(path);
  };
  const onCancel = (e) => {
    e.preventDefault();
    const path = `/user-profile`;
    navigate(path);
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
            className="flex flex-col xl:items-center my-8 xl:mt-0 px-6"
            data-testid="signedUser-secondary-container"
          >
            <form
              //   onSubmit={onSubmit}
              className="xl:w-3/5 grid xl:grid-cols-2 gap-x-10 mt-36 gap-y-4  xL:mt-10"
            >
              <label
                htmlFor="name"
                className="col-span-1 grid gap-2 text-lg leading-5 text-[#4699C2] font-bold"
              >
                Title
                <input
                  onChange={onChangeHandler}
                  placeholder="Enter Your Post Title"
                  name="Title"
                  id="Title"
                  type="text"
                  className="border border-gray-500 bg-transparent rounded-[10px] h-9 xl:h-12"
                  required
                />
              </label>

              <label
                htmlFor="surename"
                className="col-span-1 grid gap-2 text-lg leading-5 text-[#4699C2] font-bold"
              >
                Name
                <input
                  placeholder="Enter Your Post Name"
                  onChange={onChangeHandler}
                  name="Name"
                  id="Name"
                  type="text"
                  className="border border-gray-500 bg-transparent rounded-[10px] h-9 xl:h-12"
                  required
                />
              </label>

              <label
                htmlFor="biography"
                className="col-span-full grid gap-2 text-lg leading-5 text-[#4699C2] font-bold"
              >
                Paragraph
                <input
                  placeholder="Enter Your Post Description"
                  onChange={onChangeHandler}
                  name="Paragraph"
                  id="Paragraph"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePost;

import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../../Containers/Navbar';
import Cards from './blogcards';
import db from '../../../Firebase/firebase';
import { signedIn } from '../../../Features/signedInUserSlice';

function Blog() {
  const dispatch = useDispatch();
  const { article } = useSelector((state) => state.signedin);

  // const [content, setContent] = useState([])
  useEffect(() => {
    async function fetchingData() {
      const querySnapshot = await getDocs(collection(db, 'Posts'));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // setContent(doc.data().articleInfo);
        dispatch(signedIn(doc.data().articleInfo));
      });
    }
    fetchingData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="md:grid md:place-items-center">
        <div className="m-5 md:w-2/3 mt-24">
          <div className="hidden md:flex md:justify-end">
            <div className="mx-1">Sort by:</div>
            <select className="mx-1 bg-sky-200">
              <option>DATE</option>
              <option>Alphabatic</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full px-3"
            />
          </div>
          <hr className="hidden md:block md:h-1 md:bg-gray-300 md:m-1 md:rounded-full" />
          <div className="text-[#4F4F4F] font-bold text-lg">Popular:</div>
          <div className="hidden md:flex">
            <Carousel
              showArrows={false}
              itemsToShow={3}
              itemPadding={[0, 6]}
              outerSpacing={0}
              className=" md:p-0"
            >
              {article.map((articleInfo) => (
                <Cards articleInfo={articleInfo} />
              ))}
            </Carousel>
          </div>
          <div className="flex md:hidden">
            <Carousel
              showArrows={false}
              itemsToShow={1}
              itemPadding={[0, 6]}
              outerSpacing={0}
              className=" md:p-0"
            >
              {article.map((articleInfo) => (
                <Cards articleInfo={articleInfo} />
              ))}
            </Carousel>
          </div>

          <div className="grid justify-center items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 space-x-5 space-y-5 flex-wrap m-5 text-left justify-center items-center">
              {article.map((articleInfo) => (
                <Cards articleInfo={articleInfo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

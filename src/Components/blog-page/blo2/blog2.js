import React, { useEffect,useState } from 'react';
import Carousel from 'react-elastic-carousel';
import NavBar from '../../../Containers/Navbar';
import Cards from './blogcards';

function Blog() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e1e7a4c8056d4b4eac7ca7cb22220b2b')
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);
//   function filterLastWeek(items) {
//     const lastWeek = new Date();
//     lastWeek.setDate(lastWeek.getDate() - 7);
//     const filteredItems = items.filter((item)=> {
//       const itemDate = new Date(item.publishedAt);
//         return itemDate >= lastWeek;
//     });
//     return filteredItems;
// }

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
              {articles.slice(0, 6)
              .map((article) => (
                <Cards article={article} />
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
              {articles.slice(0, 6).map((article) => (
                <Cards article={article} />
              ))}
            </Carousel>
          </div>

          <div className="grid justify-center items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 space-x-5 space-y-5 flex-wrap m-5 text-left justify-center items-center">
              {articles.map((article) => (
                <Cards article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

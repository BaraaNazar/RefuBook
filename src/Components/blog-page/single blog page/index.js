import React from 'react';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineShareAlt } from 'react-icons/ai';
import emptyimg from '../blogimg/emptyblog.png';
import NavBar from '../../../Containers/Navbar';
import blogpic from '../blogimg/blogimg.png';

const ArticleInfo = {
  id: 1,
  author: {
    id: 1,
    name: 'Bruce lee',
    avatar: { blogpic },
    profile: '',
  },
  title: '  Title Title Title Title Title Title  ',
  subTitle:
    'subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle ',
  image: { emptyimg },
  body1:
    'Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ',
  body2:
    'Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum orem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ',
  body3:
    'Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ',
  date: 'Aug 18',
  dateTime: '2015-05-16 19:00',
};
function SingleblogPage() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 lg:mx-20 xl:mx-40  mx-3 relative  xl:h-screen   ">
        <div className=" ">
          <article className="">
            <section className="content-center  ">
              <div className="grid grid-cols-2 justify-center pl-[200px]  md:grid md:grid-cols-1 lg:grid-cols-2 sm:grid sm:grid-cols-1">
                <div className=" ">
                  <h1 className="text-center  text-xl font-bold pb-6">
                    {ArticleInfo.title}
                  </h1>
                  <div className="flex items-center p-2 justify-center content-center  ">
                    <div
                      style={{ backgroundImage: `url(${emptyimg})` }}
                      className="w-[561px]  h-[305px] justify-items-end px-0 pt-[140px] pl-[470px] lg:pl-[470px] md:pl-[380px]"
                    >
                      <a
                        className="grid grid-cols-1 lg:mx-40 xl:mx-20 gap-16 mx-3 relative justify-items-end   bg-[emptyimg]  pb-[20px] "
                        href="/signup"
                      >
                        <AiOutlineShareAlt className="text-[#4699C2] text-2xl  " />
                      </a>
                      <a
                        className="grid grid-cols-1 lg:mx-40 xl:mx-20  mx-3 relative justify-items-end   pb-[20px] "
                        href="signup"
                      >
                        <ImFacebook className="text-[#4699C2] text-2xl " />
                      </a>
                      <a
                        className="grid grid-cols-1 lg:mx-40 xl:mx-20 gap-16 mx-3 relative justify-items-end   pb-[20px]  "
                        href="signup"
                      >
                        <FaInstagram className="text-[#4699C2] text-2xl  " />
                      </a>
                      <a
                        className="grid grid-cols-1 lg:mx-40 xl:mx-20 gap-16 mx-3 relative justify-items-end   bg-[emptyimg] "
                        href="signup"
                      >
                        <ImTwitter className="text-[#4699C2] text-2xl " />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center p-2 justify-center flex-col ">
                    <div className="flex">
                      <div className="pr-2">
                        <p>by:</p>
                      </div>
                      <div>
                        <img
                          className="w-8 h-8 rounded-full mr-2 "
                          src={blogpic}
                          alt={`profile of ${ArticleInfo.author.name}`}
                        />
                      </div>
                      <div>
                        <p>
                          <a
                            href="#author"
                            target="_blank"
                            className="text-sky-400 font-bold"
                          >
                            Bruce lee
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text-center  w-[539px] h-[60px] ">
                      <h2 className="pt-3 text-lg font-medium text-left pl-2">
                        {ArticleInfo.subTitle}
                      </h2>
                      <p className="pt-3 text-sm leading-normal text-left pl-2  ">
                        {ArticleInfo.body1}
                      </p>
                      <p className="pt-3 text-sm leading-normal text-left pl-2  ">
                        {ArticleInfo.body2}
                      </p>
                      <p className="pt-3  pb-32 text-sm leading-normal  text-left pl-2 ">
                        {ArticleInfo.body3}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-4 mx-2 flex justify-center     lg:flex-col space-x-[100px] lg:pt-[80px]   md:pt-[350px] sm:justify-center sm:grid-rows-2 md:justify-center md:grid-rows-2 ">
                  <div className="flex-row pl-[100px]  ">
                    <h1 className="pb-2  font-bold  ">Read Also:</h1>
                  </div>
                  <div className="max-w-sm rounded overflow-hidden shadow-md  w-[200px] h-[250px] pb-2 mb-4   sm:flex-row md:flex-row  md:justify-center ">
                    <img className="w-full" src={emptyimg} alt="emptypic" />
                    <div className="px-4 py-4 w-[225px]">
                      <div className="font-bold text-l  ">
                        <p>{ArticleInfo.title.slice(0, 7)}</p>
                      </div>
                      <p className="text-gray-700 text-sm">
                        {ArticleInfo.body1.slice(0, 24)}
                      </p>
                    </div>

                    <div className="pl-2 flex items-center ">
                      <img
                        className="w-10 h-10 rounded-full mr-4 "
                        src={blogpic}
                        alt={`Profile of ${ArticleInfo.author.name}`}
                      />
                      <div className="text-sm">
                        <p className=" text-sky-400 font-bold">
                          {ArticleInfo.author.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-sm rounded overflow-hidden shadow-md  w-[200px] h-[250px] ">
                    <img className="w-full" src={emptyimg} alt="emptypic" />
                    <div className="px-4 py-4 w-[225px]">
                      <div className="font-bold text-l  ">
                        <p>{ArticleInfo.title.slice(0, 7)}</p>
                      </div>
                      <p className="text-gray-700 text-base text-sm">
                        {ArticleInfo.body1.slice(0, 24)}
                      </p>
                    </div>

                    <div className="pl-2 flex items-center ">
                      <img
                        className="w-10 h-10 rounded-full mr-4 "
                        src={blogpic}
                        alt={`Profile of ${ArticleInfo.author.name}`}
                      />
                      <div className="text-sm">
                        <p className=" text-sky-400 font-bold  ">
                          {ArticleInfo.author.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}

export default SingleblogPage;

import React from 'react';
import Carousel  from 'react-elastic-carousel';
import NavBar from "../../../Containers/Navbar";
import Cards from "./blogcards";
import blogpic from"../blogimg/blogimg.png";
import emptyimg from "../blogimg/emptyblog.png";


function Blog() {
  const ArticleInfo= [
    {
    id: 1,
    author: {
      id: 1,
      name: 'Bruce lee',
      avatar:{ blogpic},
      profile: '',
    },
    title: '  Title Title Title Title Title Title  ',
    subTitle: 'subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle ',
    image:{emptyimg},
    body1:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
    body2:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum orem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
    body3:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
  
   },
    {
        id: 2,
        author: {
          id: 2,
          name: 'Bruce lee2',
          avatar:{ blogpic},
          profile: '',
        },
        title: '  Title Title Title Title Title Title  ',
        subTitle: 'subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle ',
        image:{emptyimg},
        body1:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
        body2:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum orem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
        body3:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
      },
        {
            id: 3,
            author: {
              id: 3,
              name: 'Bruce lee3',
              avatar:{ blogpic},
              profile: '',
            },
            title: '  Title Title Title Title Title Title  ',
            subTitle: 'subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle ',
            image:{emptyimg},
            body1:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
            body2:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum orem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
            body3:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
       },
       {
         id: 4,
         author: {
             id: 4,
             name: 'Bruce lee4',
             avatar:{ blogpic},
             profile: '',
                },
            title: '  Title Title Title Title Title Title  ',
            subTitle: 'subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle ',
            image:{emptyimg},
            body1:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
            body2:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum orem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
            body3:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
          },
          {
            id: 5,
            author: {
                id: 5,
                name: 'Bruce lee5',
                avatar:{ blogpic},
                profile: '',
                   },
               title: '  Title Title Title Title Title Title  ',
               subTitle: 'subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle ',
               image:{emptyimg},
               body1:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
               body2:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum orem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
               body3:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
             },
             {
                id: 5,
                author: {
                    id: 5,
                    name: 'Bruce lee',
                    avatar:{ blogpic},
                    profile: '',
                       },
                   title: '  Title Title Title Title Title Title  ',
                   subTitle: 'subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle ',
                   image:{emptyimg},
                   body1:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
                   body2:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum orem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
                   body3:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
                 },
  
                 {
                    id: 6,
                    author: {
                        id: 6,
                        name: 'Bruce lee',
                        avatar:{ blogpic},
                        profile: '',
                           },
                       title: '  Title Title Title Title Title Title  ',
                       subTitle: 'subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle subTitle ',
                       image:{emptyimg},
                       body1:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
                       body2:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum orem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
                       body3:"Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor ",
                     }
  
  
    ]

  
    return (
      <div>
      <NavBar/>
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
         <div>
         <Carousel
        showArrows={false}
        itemsToShow={3}
        itemPadding={[0,6]}
        outerSpacing={0}
        
        className=" md:p-0 md:itemsToShow={1}"
      >
        
            
        {ArticleInfo.map((articles)=>( 
          <Cards  articles={articles}/>
        ))}
        </Carousel>

          </div>
          
          <div className="blog grid grid-cols-2 m-5  gap-3 md:grid-cols-4 md:justify-center ">
        
            
          {ArticleInfo.map((articles)=>( 
          <Cards articles={articles}/>
        ))}
         
          </div>
          
        </div>
      
      </div>
      
      </div>
      
    );
  }
  
  export default Blog;

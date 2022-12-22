import { useState, useLayoutEffect } from 'react';
import './style.css';
import EmptyImage from './assets/EmptyImages.svg';


const LATEST_STORIES = [
  {
    id: 1,
    image: EmptyImage,
    content: {
      category: 'Language',
      title:
        'How I learned Turkish quickly and what are the best places to learn.',
    },
    author: {
      name: 'Ahmad Faysal',
      status: 'Refugee in Turkey',
    },
  },
  {
    id: 2,
    image: EmptyImage,
    content: {
      category: 'Jobs',
      title:
        'How to find job in Lebnaon, and what are the obstacles in Lebanon.',
    },
    author: {
      name: 'Rami Al-Khaldi',
      status: 'Refugee in Lebanon',
    },
  },
];

const valueOnSize = (size) => {
  return size <= 500
    ? 'Home is behind, the world ahead and there are many paths to tread.'
    : 'Home is behind, the world ahead and there are many paths to tread through shadows to the edge.';
};
const LatestStories = () => {
  const [description, setDescription] = useState(
    valueOnSize(window.screen.width)
  );

  useLayoutEffect(() => {
    const updateSize = (e) => {
      const value = valueOnSize(e.target.screen.width);

      setDescription(value);
    };

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="latest-story-container">
      <div className="latest-story-top">
        <h2 className="title">Latest Stories</h2>

        <p className="description">{description}</p>
      </div>

      <div className="latest-story-bottom">
        {LATEST_STORIES.map((story) => (
          <div key={story.id} className="story-container">
            <img src={story.image} alt="Fisrt Empty" />

            <div className="right-side">
              <div className="story-title-container">
                <h5>{story.content.category}</h5>
              </div>

              <h3>{story.content.title}</h3>

              <div className="story-author-container">
                <div className="author-profile" />

                <div className="author">
                  <h4>{story.author.name}</h4>
                  <p>{story.author.status}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LatestStories;

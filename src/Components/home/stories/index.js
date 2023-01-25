import { useState, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';




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

  const {t}=useTranslation();

  return (
    <div
      className="latest-story-container"
      data-testid="latest-story-container"
    >
      <div className="latest-story-top">
        <h2 className="title">{t("home.hero.latest-stories.title")}</h2>

        <p className="description">{description}</p>
      </div>

      <div className="latest-story-bottom">
      {t('home.hero.latest-stories.latest-stories-content',{returnObjects:true}).map((story) => (
          <div key={story.id} className="story-container">
            <img src={t(story.image)} alt="Fisrt Empty" />

            <div className="right-side">
              <div className="story-title-container">
                <h5>{t(story.content.category)}</h5>
              </div>

              <h3>{t(story.content.title)}</h3>

              <div className="story-author-container">
                <div className="author-profile" />

                <div className="author">
                <h4>{t(story.author.name)}</h4>
                <p>{t(story.author.status)}</p>
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

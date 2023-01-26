import { useState, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import manHoldABook from '../../../images/young-man-stretching-hand-toward-book-white-t-shirt-jeans-looking-happy-front-view.jpg';
import manWork from '../../../images/building-construction-worker-site-with-architect.jpg';
import './style.css';

function Title1(){
  const {t}=useTranslation();

  return (
    <p>{t("home.hero.latest-stories.subtitle1")}</p>
  )


}

function Title2(){
  const {t}=useTranslation();

  return (
    <p>{t("home.hero.latest-stories.subtitle2")}</p>
  )


}


const valueOnSize = (size) => {
  return size <= 500
    ? <Title1/>
    : <Title2/>;
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
    
          <div  className="story-container">
            <img src={manHoldABook} alt="man hold book" />

            <div className="right-side">
              <div className="story-title-container">
                <h5>{t('home.hero.latest-stories.category')}</h5>
              </div>

              <h3>{t('home.hero.latest-stories.category-title')}</h3>

              <div className="story-author-container">
                <div className="author-profile" />

                <div className="author">
                <h4>{t('home.hero.latest-stories.author')}</h4>
                <p>{t('home.hero.latest-stories.status')}</p>
                </div>
              </div>
            </div>
          </div>
          <div  className="story-container">
            <img src={manWork} alt="manWork" />

            <div className="right-side">
              <div className="story-title-container">
                <h5>{t('home.hero.latest-stories.category1')}</h5>
              </div>

              <h3>{t('home.hero.latest-stories.category-title1')}</h3>

              <div className="story-author-container">
                <div className="author-profile" />

                <div className="author">
                <h4>{t('home.hero.latest-stories.author1')}</h4>
                <p>{t('home.hero.latest-stories.status1')}</p>
                </div>
              </div>
            </div>
          </div>
          
       
      </div>
    </div>
  );
};
export default LatestStories;

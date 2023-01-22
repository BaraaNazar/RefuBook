import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import db from '../../../Firebase/firebase';
import SingleblogPage from '../single blog page';

function BlogsPage() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    async function fetchingData() {
      const querySnapshot = await getDocs(collection(db, 'Posts'));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setContent(doc.data().articleInfo);
      });
    }
    fetchingData();

    console.log(content);
  }, []);
  console.log(content);
  return (
    <div>
      <div>
        {content &&
          content.map((articleInfo) => {
            return <SingleblogPage articleInfo={articleInfo} />;
          })}
      </div>
    </div>
  );
}
export default BlogsPage;

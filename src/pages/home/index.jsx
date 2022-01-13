import styles from "./Home.module.scss";
import UpTitle from "../../components/UpTitle";
import { useState, useEffect } from "react";
import Post from "../../components/post";
import Trend from "../../components/Trend";
import { http } from "../../libs/http";

const posts = [];
const trends = [];

const Home = () => {
  const [allPosts, setAllPosts] = useState(posts);
  const [allTrends, setAllTrends] = useState(trends);

  useEffect(() => {
    http("/post").then((data) => setAllPosts(data));

    http("/trends").then((data) => setAllTrends(data));
  }, []);

  return (
    <>
      <div className={styles.main}>
        <UpTitle name="Home" />
        {allPosts.map((element, index) => (
          <Post key={index} data={element} />
        ))}
      </div>

      <div className={styles.sideContent}>

        {allTrends.map((element, index) => (
          <Trend key={index} data={element} />
        ))}

      </div>
    </>
  );
};

export default Home;

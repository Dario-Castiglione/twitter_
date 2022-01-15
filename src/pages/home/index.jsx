import { useState, useEffect } from "react";
import { http } from "../../libs/http";
import Post from "../../components/post";
import UpTitle from "../../components/UpTitle";
import TrendList from "../../components/TrendList" ;
import WhoToFollowList from "../../components/WhoToFollowList/WhoToFollowList";
//import styles from "./Home.module.scss";

const posts = [];
const Home = () => {
  const [allPosts, setAllPosts] = useState(posts);

  useEffect(() => {
    http("/post").then((data) => setAllPosts(data));

  }, []);

  return (
    <>
      <div className="main">
        <UpTitle name="Home" />
        {allPosts.map((element, index) => (
          <Post key={index} data={element} />
        ))}
      </div>

      <div className="sideContent">

        <TrendList />
        <WhoToFollowList/>
      </div>
    </>
  );
};

export default Home;

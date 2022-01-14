import styles from "./trendList.module.scss";
import { useState, useEffect } from "react";
import Trend from "../../components/Trend";
import { http } from "../../libs/http";
import  "../../libs/common.scss"

const trends = [];

const TrendList = () => {

  const [allTrends, setAllTrends] = useState(trends);

  useEffect(() => {

    http("/trends").then((data) => setAllTrends(data));
  }, []);

  return (
    <div className={styles.container}>

        <p className="title">Trend For you</p>

        {allTrends.map((element, index) => (
          <Trend key={index} data={element} />
        ))}

      
    </div>
  );
};

export default TrendList;

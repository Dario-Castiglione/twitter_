import { http } from "../../libs/http";
import "../../libs/common.scss";
import { useState, useEffect } from "react";
import WhoToFollow from "../WhoToFollow";

const array = [];

const WhoToFollowList = () => {

    useEffect(() => {
        http("/account").then(data => setFollowMe(data))

    }, []);

    const [followMe, setFollowMe] = useState(array);

    return(
        <div>
            <h3 className="title">Who To Follow</h3>

            {followMe.map((element,index) => 
                <WhoToFollow data={element} key={index} />
            )}

        </div>
    );
}
export default WhoToFollowList;
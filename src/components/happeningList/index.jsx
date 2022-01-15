import { http } from "../../libs/http";
import { useState, useEffect } from "react";
import Happening from "../happening";
const HappeningList = () => {

    useEffect(() => {
        http("/happening").then(data => setHappening(data))
    }, []);

    const [happening, setHappening] = useState([]);

    return (
        <>
        {happening.map((element,index) =>
            <Happening key={index} data={element}/>
            )}
        </>
    );
}

export default HappeningList;
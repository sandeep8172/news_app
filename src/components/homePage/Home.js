import Header from "./header/Header";
import BottomComponent from "./newsPage/BottomComponent";
import TopComponent from "./newsPage/TopComponent";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
    const [data, setData] = useState([]);
    // const [topData, setTopData] = useState([])
    // const [bottomData, setBottomData] = useState([])

    const getData = () => {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-03&sortBy=publishedAt&apiKey=e11548daf27d42f4b48f2c7feb283b16")
            .then((response) => {
                const transformedData = [];
                for (let key in response.data.articles) {
                    const dataObj = {
                        img: response.data.articles[key].urlToImage,
                        title: response.data.articles[key].title,
                        description: response.data.articles[key].description,
                    }
                    transformedData.push(dataObj);
                }
                setData(transformedData);
            }).catch((err) => {
                console.log(err);
            })
    }
    // console.log(data);
    useEffect(() => {
        getData()
    }, [])
    const topComponentData = data.slice(0, 4);
    // setTopData(topComponentData);
    const bottomComponentData = data.slice(4);
    // setBottomData(bottomComponentData);
    console.log(topComponentData)
    console.log(bottomComponentData)



    return (
        <div>
            <Header />

            <TopComponent newsData={topComponentData} />

            <div className="bottomContent_wrapper">
                <h2>Artikel Terbaru</h2>
                <div className="bottom_content">
                    {bottomComponentData.map((ele, ind) => {
                        return (
                            <BottomComponent
                                key={ind}
                                data={{
                                    img: ele?.img,
                                    title: ele?.title,
                                    description: ele?.description,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Home;

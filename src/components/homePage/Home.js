import Header from "./header/Header"
import BottomComponent from "./newsPage/BottomComponent"
import TopComponent from "./newsPage/TopComponent"
import axios from "axios"
import { useState, useEffect } from "react"


const Home = () => {
    const [data, setData] = useState([])

    const getData = () => {
        axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e11548daf27d42f4b48f2c7feb283b16")
            .then((response) => {
                console.log(response.data.articles[0].description)
                console.log(response.data.articles[0].title)
                console.log(response.data.articles[0].urlToImage)
                const transformedData = [];
                for (let key in response.data.articles) {
                    const dataObj = {
                        img: response.data.articles[key].urlToImage,
                        title: response.data.articles[key].title,
                        description: response.data.articles[key].description,
                    }
                    transformedData.push(dataObj);
                    console.log(dataObj);
                }
                setData(transformedData);
            }).catch((err) => {
                console.log(err);
            })
    }
    console.log(data);
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Header />
            <TopComponent />
            <BottomComponent />
        </div>
    )
}
export default Home


// "You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests."

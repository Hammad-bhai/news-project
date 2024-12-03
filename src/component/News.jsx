import React from 'react'
import { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsCard from './NewsCard'
import Loader from "./Loader"
import Spinner from "./Spinner"

const News = ({ category }) => {

    const [result, setResult] = useState()
    const [article, setArticle] = useState([])
    const [page, setPage] = useState(1)
    const [loader, setLoader] = useState(false)


    useEffect(() => {
        window.scrollTo({ top: 0 })
        fetchNews()
    }, [category])



    async function fetchNews() {
        setLoader(true)
        try {
            let data = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=9b7743e23c7f4f92a91027da9aabda29&pageSize=20&page=${page}`)
            let res = await data.json()
            setArticle(res.articles)
            setResult(res.totalResults)
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
    }

    const fetchMoreData = () => {
        setPage(page => page + 1)
        setTimeout(() => {
            ((async () => {
                try {
                    let data = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=9b7743e23c7f4f92a91027da9aabda29&pageSize=20&page=${page + 1}`)
                    let res = await data.json()
                    setArticle(article.concat(res.articles))
                } catch (error) {
                    console.log(error);
                }
            }))()
        }, 1000);

    };


    return (
        <>
            <div style={{ minHeight: "calc(100vh - 80px)" }} className="cont select-none pt-7 pb-3 bg-[#000000bf]">
                {result == 0 && <div className="text-red-600 w-full text-center text-2xl fixed">Result Not Found</div>}

                {result == 0 || loader ? (
                    <Loader />
                ) : (
                    <InfiniteScroll className="custom-infinite-scroll flex flex-wrap justify-center gap-3"
                        dataLength={article.length}
                        next={fetchMoreData}
                        hasMore={article.length < result}
                        loader={<Spinner />}
                    >
                        {article.map((item, index) => (
                            <NewsCard key={index} title={item.title} des={item.description} img={item.urlToImage} url={item.url} />
                        ))}
                    </InfiniteScroll>
                )}


            </div>
        </>
    )
}

export default News
import React from 'react'

const NewsCard = (props) => {
    const { title, des, img, url } = props
    return (
        <>
            <a href={url} target='_blank' rel="noopener noreferrer" className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-56" src={img ? img : "news.jpg"} alt={title} />

                <div className="py-5 text-center">
                    <h3 className="block text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-200">{des}</span>
                </div>
            </a>

        </>
    )
}

export default NewsCard
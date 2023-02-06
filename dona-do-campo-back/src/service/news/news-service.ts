import { notFoundError } from "../../errors/not-found-error.js";
import newsRepository from "../../repositories/news-repository.js";

async function getNews() {
    const news = await newsRepository.findNews();

    if(!news){
        throw notFoundError();
    }
    return news;
}

async function postNews(title:string, content:string, createAt: Date) {
    
    const NewsData = {
        title, 
        content,   
        createAt,     
    };

    const insertNews = await newsRepository.createNews(NewsData);

    return insertNews
 }

const newsService = {
    getNews,   
    postNews
};

export default newsService;
import { news } from "@prisma/client";
import { prisma } from "../config/database.js";

async function findNews(): Promise<news[]> {
    return prisma.news.findMany();
}

async function createNews(news: CreateNewsParams): Promise<news> {
    return prisma.news.create({
        data: {
            ...news
        }
    })
}

// export type CreateNewsParams = Omit<news, "id" >
export type CreateNewsParams = {
    title: string,
    content: string,
    createAt?: string | Date
}


const newsRepository = {
    findNews,
    createNews
};

export default newsRepository;

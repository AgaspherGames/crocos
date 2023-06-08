import { IReview } from "../types/interfaces";

export function AvgRating(reviews: IReview[]): number {
    return (reviews.filter(el=>el).reduce((a,c)=>a+=c.rating, 0)/reviews.length)||0
}
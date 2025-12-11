import type {IComment} from "./IComment.ts";

export default interface ResponseComments {
    comments: IComment[];
    total: number;
    skip: number;
    limit: number;

}
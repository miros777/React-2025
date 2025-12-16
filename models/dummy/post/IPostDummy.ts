import type {IPostReactions} from "./IPostReactions";

export default interface IPostDummy {
   id: number;
   title: string;
   body: string;
   tags: string[];
   reactions: IPostReactions;
   views: number;
   userId: number;
}

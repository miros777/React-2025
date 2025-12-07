import type { FC } from 'react';
import type {ICoursesTitle} from "../../models/ICoursesTitle.ts";

type MyCoursesTitle = {
    titles: ICoursesTitle
}

const ShowCourses: FC<MyCoursesTitle> = ({titles}) => {
    // console.log(titles.all_titles)
    return (
        <div>
            {titles.all_titles.map((va,index)=> <p key={index}>{va}</p>)}
        </div>
    );
};

export default ShowCourses
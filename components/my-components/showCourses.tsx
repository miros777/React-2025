import type {FC} from 'react';
import type {CoursesTitle} from "../../models/CoursesTitle.ts";

type MyCoursesTitle = {
    titles: CoursesTitle
}

const ShowCourses: FC<MyCoursesTitle> = ({titles}) => {
    return (
        <div>
            <ul className="text-red-600 bg-amber-100 text-center">
                {titles.all_titles.map((va, index) => <li key={index}>{va}</li>)}
            </ul>
        </div>
    );
};

export default ShowCourses
import type {FC} from 'react';
import type {coursDuration} from "../../models/coursesDuration.ts";
import "./coursesDuration.css";

type PropsTypeCourse = {
    course: coursDuration
}
const CourseDuration:FC<PropsTypeCourse> = ({course}) => {
    return (
        <li className="mt-6 mb-6 text-center justify-between flex">
               <span className="p-3 italic uppercase">{course.title}</span>
               <span className="p-3 font-bold bg-amber-500 ml-3">{course.monthDuration}</span>
        </li>
    );
};

export default CourseDuration;
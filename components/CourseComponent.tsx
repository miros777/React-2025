import type {FC} from 'react';
import type {courseModel} from "../models/courseModel";

type CourseProps = {
    course: courseModel
}
const CourseComponent:FC<CourseProps> = ({course}) => {
    return (
        <div className="text-white bg-blue-500 p-4 mb-4 font-bold flex text-center flex-col">
            <div className="text-4xl text-yellow-200">{course.title}</div>
            <div className="text-2xl">{course.hourDuration}</div>
            <div className="mb-2">{course.monthDuration}</div>
            <div>{course.modules}</div>
        </div>
    );
};

export default CourseComponent;
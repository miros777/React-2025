import {coursesAndDurationArray} from "../../data/coursesAndDuration.ts";
import CourseDuration from "../courseDuration/CourseDuration.tsx";
import "./coursesDuration.css";

const CoursesDuration = () => {
    return (
        <div>
            <ul className="font-bold flex-col justify-center m-auto p-2">
                {coursesAndDurationArray.map((course, index)=> <CourseDuration key={index} course={course}/>)}
            </ul>
        </div>
    );
};

export default CoursesDuration;
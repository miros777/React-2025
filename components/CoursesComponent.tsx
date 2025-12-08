import {coursesArray} from "../data/data";
import CourseComponent from "./CourseComponent";

const CoursesComponent = () => {
    return (
        <div>
            {coursesArray.map((course, index) => <CourseComponent key={index} course={course} />)}
        </div>
    );
};

export default CoursesComponent;
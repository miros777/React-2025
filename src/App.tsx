import './App.css'
import ShowCourses from "../components/my-components/showCourses.tsx";
import {coursesTitleArray} from "../data/coursesTitle.ts";

const App = () => {

  return (
      <div>
          <ShowCourses titles={coursesTitleArray} />
      </div>
  )
}

export default App

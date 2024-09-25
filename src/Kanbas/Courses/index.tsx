import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import Assignment from "./Assignments";
import AssignmentEditor from "./Assignments/Editors";


export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/"
                     element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments"
                     element={<Assignment />} />
              <Route path="Assignments/:aid"
                     element={<AssignmentEditor />} />
              <Route path="People" element={<h3>People</h3>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}

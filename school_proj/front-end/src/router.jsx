import { createBrowserRouter }from "react-router-dom"
import App from "./App"
import { AStudentPage} from "./pages/AStudentPage"
import { ASubjectPage } from "./pages/ASubjectPage"
import { HomePage } from "./pages/HomePage"
import { StudentsPage } from "./pages/StudentsPage"
import { SubjectsPage } from "./pages/SubjectsPage"

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "students/:id/",
                element: <AStudentPage/>
            },
            {
                path: "subjects/:name/",
                element:  <ASubjectPage/>
            },
            {
                path: "students/",
                element: <StudentsPage/>
            },
            {
                path: "subjects/",
                element: <SubjectsPage/>
            }
        ]
    }
])

export default router
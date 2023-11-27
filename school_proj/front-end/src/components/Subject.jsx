import { Link } from "react-router-dom";

export const Subject = ({subject}) => {

    return (
        <>
        <h2><Link to={`/subjects/${subject.subject_name}/`}>{subject.subject_name}</Link></h2>
            <ul>
                <li key={subject.id}>
                    Professor: {subject.professor}<br/>
                    Number of Students: {subject.students}<br/>
                    Grade Average: {subject.grade_average}
                </li>
            </ul>
        </>
    )

}

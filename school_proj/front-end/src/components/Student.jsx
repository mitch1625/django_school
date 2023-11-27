import {Link} from "react-router-dom"
        
export const Student = ({student}) => {

    return(
        <>
        <h2><Link to={`/students/${student.id}/`}>{student.name}</Link></h2>
            <ul>
                    <li key={student.id}>
                        Student Email: {student.student_email} <br/>
                        Locker Number: {student.locker_number} <br />
                        Locker Combination: {student.locker_combination} <br/>
                        Student Status: {student.good_student ? "Good Student" : "Bad Student"} <br/>
                        Classes:
                        <ul>
                            {student.subjects.map((subject) => (
                                <l1 key={subject.id}>
                                    {subject.subject_name}<br/>
                                </l1>
                            ))}
                        </ul>
                    </li>
            </ul>
        </>
    )
}




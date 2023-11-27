import { useEffect,useState } from "react"
import axios from "axios"
import { Student } from "../components/Student"

export const StudentsPage = () => {
    const [students, setStudents] = useState([])

    const getAllStudents = async() => {
        let response = await axios
            .get("http://127.0.0.1:8000/api/v1/students/")
            .catch((err) => {
                console.log(err)
            })
        setStudents(response.data)
    }

    useEffect(()=> {
        getAllStudents();
    },[])

    return(
        <>
            <h2>Students</h2>
            <ul>
                {students.map((student) => (
                    <Student 
                    key={student.id}
                    student={student}/>
                ))}
            </ul>
        </>
    )
}

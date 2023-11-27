import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Student } from "../components/Student"
export const AStudentPage = () => {
    const {id} = useParams()
    const [student, setStudent] = useState(null)

    const getAStudent = async() => {
        let response = await axios
            .get(`http://127.0.0.1:8000/api/v1/students/${id}/`)
        setStudent(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getAStudent()
    },[])
    
    return(
        <>
           {student ? <Student student={student}/>: null}
        </>
    )
}

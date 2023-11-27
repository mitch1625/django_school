import {Subject} from "../components/Subject"
import { useState, useEffect } from "react"
import axios from "axios"


export const SubjectsPage = () => {
    const [subjects, setSubjects] = useState([])

    const getSubjects = async() => {
        let response = await axios
            .get(`http://127.0.0.1:8000/api/v1/subjects/`)
            .catch((err) => {
                console.log(err)
            })
        setSubjects(response.data)
    }

    useEffect(() =>{
        getSubjects()
    },[])

    return(
        <>
                {subjects.map((subject) => (
                    <Subject
                    key={subject.id}
                    subject={subject}/>
                ))}
        </>
    )
}
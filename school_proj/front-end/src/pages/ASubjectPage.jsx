import { useParams } from "react-router-dom"
import {Subject} from "../components/Subject"
import { useState, useEffect } from "react"
import axios from "axios"

export const ASubjectPage = () => {
    const {name} = useParams()
    const [subject, setSubject] = useState(null)

    const getSubject = async() => {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/subjects/${name}/`)
        setSubject(response.data)
    }

    useEffect(()=> {
        getSubject()
    },[])

    return(
        <>
            {subject ? <Subject subject={subject}/> : null}
        </>
    )
}
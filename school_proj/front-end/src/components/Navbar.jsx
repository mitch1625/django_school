import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <Row style={{display:"flex", justifyContent:"space-around"}}>
            <Link to="/">Home</Link>
            <Link to="students/">Students Page</Link>
            <Link to="subjects/">Subjects Page</Link>
            <Link to="students/:id/">A Student Page</Link>
            <Link to="subjects/:name/">A Subject Page</Link>
        </Row>
    )
}

export default Navbar;
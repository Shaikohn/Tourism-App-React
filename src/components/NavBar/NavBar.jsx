import { Link } from 'react-router-dom'
import '../Global.css'

export default function NavBar() {
    return (
        <ul className="navbar">
            <div className="nav-list">
                <Link to="/" className="link" style={{textDecoration: 'none'}}>Home</Link>
                <Link to="/info" className="link" style={{textDecoration: 'none'}}>Info</Link>
            </div>
        </ul>
    )
}
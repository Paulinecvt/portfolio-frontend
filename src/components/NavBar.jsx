import { Link } from 'react-router-dom';
import { RoutePaths } from "../general/RoutePaths.jsx";

export const NavBar = () => (
    <nav className="flex justify-between items-center p-4">
        <Link to={RoutePaths.HOME}>Home</Link>
        <Link to={RoutePaths.PROJECTS}>Projects</Link>
        <Link to={RoutePaths.CONTACT}>Contact</Link>
    </nav>
    );
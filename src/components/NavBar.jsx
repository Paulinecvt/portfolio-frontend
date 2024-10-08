import { Link } from 'react-router-dom';
import { RoutePaths } from "../general/RoutePaths.jsx";
import Logo from  '../img/Logo.png';

export const NavBar = () => (
    <nav>
        <div className="flex justify-between items-center p-4 border-b-2 border-black">
        <div className= 'flex justify-start items-center p-4'>
            <Link to={RoutePaths.HOME}>
        <img src={Logo} alt="logo" className="w-12"/>
            </Link>
        </div>

        <div className=" navlinks flex justify-end gap-6 items-center p-4">
        <Link to={RoutePaths.HOME} className='navlink '>Home</Link>
        <Link to={RoutePaths.LLM} className='navlink pl-5 border-l-2' >LLM</Link>
        <Link to={RoutePaths.PROJECTS} className='navlink pl-5 border-l-2' >Projects</Link>
        <Link to={RoutePaths.CONTACT} className='navlink pl-5 border-l-2'>Contact</Link>
        </div>
        </div>
    </nav>
    );
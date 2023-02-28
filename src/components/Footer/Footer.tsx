import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="news">News</NavLink></li>
                <li> <NavLink to="profile">Profile</NavLink></li>
            </ul>
        </div>
    );
};

export default Footer;
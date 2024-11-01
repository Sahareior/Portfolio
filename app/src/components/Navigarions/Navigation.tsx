
import { FaUser, FaBriefcase, FaFileAlt, FaEnvelope } from 'react-icons/fa';

type NavigationProps = {
    handleClick: () => void;
};

const Navigation: React.FC<NavigationProps> = ({ handleClick }) => {
    return (
        <div className=" top-0 left-0 md:h-screen md:w-24 w-full flex flex-col justify-center items-center p-5 shadow-lg ">
            <ul className="flex md:flex-col mx-auto md:space-y-7 space-x-5 md:space-x-0">
                <li 
                    className="flex flex-col items-center justify-center text-white cursor-pointer hover:text-yellow-400"
                    onClick={() => handleClick('About')}
                >
                    <FaUser className="mb-1 text-lg" />
                    <span>About</span>
                </li>
                <li 
                    className="flex flex-col items-center justify-center text-white cursor-pointer hover:text-yellow-400"
                    onClick={() => handleClick('Works')}
                >
                    <FaBriefcase className="mb-1 text-lg" />
                    <span>Works</span>
                </li>
                <li 
                    className="flex flex-col items-center justify-center text-white cursor-pointer hover:text-yellow-400"
                    onClick={() => handleClick('Resume')}
                >
                    <FaFileAlt className="mb-1 text-lg" />
                    <span>Resume</span>
                </li>
                <li 
                    className="flex flex-col items-center justify-center text-white cursor-pointer hover:text-yellow-400"
                    onClick={() => handleClick('Contacts')}
                >
                    <FaEnvelope className="mb-1 text-lg" />
                    <span>Contacts</span>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;

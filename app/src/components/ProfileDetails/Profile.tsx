import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import {ReactTyped} from "react-typed";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import slideshow styles

const Profile = () => {
    const slideImages = [
        "https://img.freepik.com/premium-photo/colorful-galaxy-with-words-galaxy-top_1222282-15932.jpg?ga=GA1.1.10786356.1696485729&semt=ais_hybrid",
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    return (
        <div className="relative w-full bg-black rounded-lg shadow-lg overflow-hidden">
            <div className="p">
                {/* Slideshow */}
                <Fade duration={3000} arrows={false}>
                    {slideImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="h-[50vh] w-full object-cover"
                            alt={`Slide ${index + 1}`}
                        />
                    ))}
                </Fade>
                
                {/* Profile Info */}
                <div className="flex flex-col items-center justify-center bg-[#222222] rounded-t-full p-12 pt-20 relative">
                    {/* Profile Picture */}
                    <img
                        className="w-40 h-40 z-30 rounded-full absolute top-[-4rem] border-4 border-[#222222] object-cover"
                        src="https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/460208954_2465640466956003_8013700623794645153_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEIFOVXj-fnCY6bUaQOUDsTUz7OVBmG7itTPs5UGYbuK86Z3nD5ECLmT8CAob0DW47bdwjMyaahHh7_lN3w6BGT&_nc_ohc=2ZIzT3A9px0Q7kNvgHXyEAY&_nc_zt=23&_nc_ht=scontent.fjsr1-2.fna&_nc_gid=Alj5mjx2t8C3438vcQjBoot&oh=00_AYAumD1s5-_rJ5Cmbocfm5UaFqFMMfNBWaNaSkiRDzsTSg&oe=67297D85"
                        alt="Sahareior Sijan"
                    />
                    
                    {/* Name and Title with Typing Effect */}
                    <h2 className="mt-16 font-bold text-white text-3xl">Sahareior Sijan</h2>
                    <ReactTyped
                        strings={[
                            "Backend Developer",
                            "React Native Developer",
                            "Web Developer",
                            "SEO Expert",
                        ]}
                        typeSpeed={50}
                        backSpeed={70}
                        loop
                    >
                        <input
                            type="text"
                            className="border-none outline-none bg-transparent text-yellow-300 text-lg text-center"
                            readOnly
                        />
                    </ReactTyped>
                    
                    {/* Social Icons */}
                    <div className="flex gap-6 mt-6">
                        <a
                            href="https://web.facebook.com/sahareior.sijan" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-blue-600 transition duration-200"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-blue-400 transition duration-200"
                        >
                            <FaLinkedinIn size={24} />
                        </a>
                        <a
                            href="https://wa.me/1234567890" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-green-500 transition duration-200"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                        <a
                            href="https://github.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-gray-300 transition duration-200"
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

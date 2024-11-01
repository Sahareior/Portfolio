import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import Slider from './Sweeper/Slider';

const AboutSection = () => {
    const servicesData = [
        {
            id: 1,
            icon: <FaCode size={32} className="text-yellow-400 mx-auto mb-4" />,
            name: "Frontend",
            des: "Experienced in creating beautiful and responsive UI designs."
        },
        {
            id: 2,
            icon: <FaServer size={32} className="text-yellow-400 mx-auto mb-4" />,
            name: "Backend",
            des: "Skilled in building scalable and secure backend systems."
        },
        {
            id: 3,
            icon: <FaMobileAlt size={32} className="text-yellow-400 mx-auto mb-4" />,
            name: "Mobile App",
            des: "Proficient in developing interactive and user-friendly mobile applications."
        },
        {
            id: 4,
            icon: <FaGlobe size={32} className="text-yellow-400 mx-auto mb-4" />,
            name: "Website",
            des: "Expertise in creating full-featured and optimized websites."
        },
    ];

    return (
        <div className='  flex justify-center items-center flex-col'>
            <div>
                <h1 className="text-white text-center  text-4xl - lekton3  mb-4">About Me</h1>
                <p className="text-white text-center lekton2 text-xl">
                Hi, I’m Sahareior Sijan, a passionate tech enthusiast with a deep love for building Mobile Apps, Websites and enhancing their online presence on Google. By combining my web development and SEO skills, I help businesses reach their target audiences more effectively. I’m always eager to learn new technologies and continue growing as a programmer, constantly exploring innovative ways to improve my craft.
                </p>
            </div>

            <div className='mt-8'>
                <h2 className="text-white text-4xl text-center mt-4 font-semibold lekton3 mb-5">My Services</h2>
                <div className="grid mt-12 grid-cols-2 gap-4">
                    {servicesData.map((service) => (
                        <div key={service.id} className="flex items-center justify-center border border-white w-full p-6 rounded-lg">
                            <div className="w-full text-center">
                                {service.icon}
                                <h2 className="text-white font-bold text-xl mb-2">{service.name}</h2>
                                <p className="text-gray-300 text-xl lekton2">{service.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h1 className='text-white font-bold lekton1  text-3xl mt-10'>Testimonials</h1>
            <div className='w-full py-7 mt-4'>
                <Slider />
            </div>

            {/* Fun Facts */}
            <div className='mt-5'>
                <h2 className='text-white font-semibold lekton1 mb-9 text-center  text-4xl mt-5'>Fun Facts</h2>
                <div className='flex md:flex-nowrap flex-wrap mt-14 md:mt-3 justify-center gap-5'>
                    <div className='p-9 border flex justify-center items-center flex-col gap-1 border-white'>
                        <FaCode color='yellow' size={40} />
                        <h1 className='text-white font-bold'>100+</h1>
                        <p className='text-white text-center mt-2 lekton2 mx-auto'>Projects Completed</p>
                    </div>
                    <div className='p-9 border flex justify-center items-center flex-col gap-1 border-white'>
                        <FaMobileAlt color='yellow' size={40} />
                        <h1 className='text-white font-bold'>50+</h1>
                        <p className='text-white text-center mt-2 lekton2'>Mobile Apps</p>
                    </div>
                    <div className='p-9 border flex justify-center items-center flex-col gap-1 border-white'>
                        <FaServer color='yellow' size={40} />
                        <h1 className='text-white font-bold'>20+</h1>
                        <p className='text-white text-center mt-2 lekton2'>Backend Systems</p>
                    </div>
                    <div className='p-9 border flex justify-center items-center flex-col gap-1 border-white'>
                        <FaGlobe color='yellow' size={40} />
                        <h1 className='text-white font-bold'>150+</h1>
                        <p className='text-white text-center mt-2 lekton2'>Websites Launched</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

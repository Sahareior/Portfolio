import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const data = [
    { name: "JavaScript", value: 0.80 },
    { name: "React", value: 0.80 },
    { name: "React JS", value: 0.90 },
    { name: "React Native CLI", value: 0.70 },
    { name: "Next.js", value: 0.80 },
    { name: "Node.js", value: 0.80 },
    { name: "Express.js", value: 0.80 },
];

const knowledge = [
    { name: "SEO Optimization" },
    { name: "Hosting Installation" },
    { name: "Responsive and Mobile-Ready" },
    { name: "Advertising Services" },
    { name: "Website Hosting" },
];

const Resume = () => {
    return (
        <div className=" bg-[#222222] w-full text-white ">

            <div className="  ">
                {/* Coding Skills */}
                <div>
                    <h3 className="text-4xl lekton2 md:text-start text-center font-semibold mb-9">Coding Skills</h3>
                    <div className="grid mt-9 grid-cols-3 gap-y-6">
                        {data.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-24 h-24 mb-2">
                                    <CircularProgressbar
                                        value={item.value}
                                        maxValue={1}
                                        text={`${Math.round(item.value * 100)}%`}
                                    />
                                </div>
                                <h3 className="text-xl">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Knowledge Section */}
                <div className='mt-14'>
                    <h3 className="text-4xl lekton2 md:text-start text-center  font-semibold mb-6">Knowledge</h3>
                    <ul className="grid grid-cols-2">
                        {knowledge.map((item, index) => (
                            <li key={index} className="lekton2 px-4 text-xl mt-3 flex items-center gap-2">
                                <span className="bg-yellow-400 w-2 h-2  rounded-full"></span>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <h3 className='text-4xl lekton2 md:text-start text-center mt-14'>Education</h3>
            <div className='border border-slate-400 space-y-2 p-4 mt-4'>
            <p className='border border-white p-1 mt-2 w-24'>2017-2019</p>
            <h3 className='lekton1 text-3xl'>Barguna Govt College</h3>
            <p>Science</p>
            </div>
            <div className='border border-slate-400 space-y-2 p-4 mt-4'>
            <p className='border border-white p-1 mt-2 w-24'>2022-2026</p>
            <h3 className='lekton1 text-3xl'>Green Univercity Of Bangladesh</h3>
            <p>Bsc In Cse</p>
            </div>
        </div>
    );
};

export default Resume;

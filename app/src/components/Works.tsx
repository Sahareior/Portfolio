import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Works = () => {
    const projects = [
        { name: "Kalles Shop", url: "https://kallesshop.netlify.app/", image: "/image/kalles.png", type: "Web" },
        { name: "LifeGuards", url: "https://merry-gnome-3d7277.netlify.app/", image: "/image/LifeGuards.png", type: "Web" },
        { name: "Coffee Shop", url: "", image: "/image/coffee.png", type: "Mobile" },
        { name: "NeonNet", url: "https://neonnet.netlify.app/", image: "/image/Neonnet.png", type: "Web" },
        { name: "ToyMan", url: "https://melodious-sundae-b416a0.netlify.app/", image: "/image/toy.png", type: "Web" },
        { name: "MedCare", url: "", image: "/image/Doctors.png", type: "Mobile" },
    ];

    const renderProjectCard = (project) => (
        <div key={project.name} className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="h-44 bg-gray-600 flex items-center justify-center">
                {project.image ? (
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                ) : (
                    <div className="text-4xl">📷</div>
                )}
            </div>
            <div className="p-4 flex justify-between items-center">
                <h3 className="lekton3 text-2xl font-semibold">{project.name}</h3>
                {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                        Live
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-full text-center">
            <h1 className="text-white font-bold text-4xl lekton2">My Recent Projects</h1>
            <Tabs className="mt-14 flex flex-col items-center">
                <TabList className="flex justify-center space-x-4 mb-8">
                    <Tab className="px-4 py-2 rounded-lg bg-gray-700 text-white cursor-pointer hover:bg-gray-600">Web Projects</Tab>
                    <Tab className="px-4 py-2 rounded-lg bg-gray-700 text-white cursor-pointer hover:bg-gray-600">Mobile Projects</Tab>
                </TabList>

                <TabPanel className="w-full">
                    <div className="grid grid-cols-2 gap-5">
                        {projects.filter(project => project.type === "Web").map(renderProjectCard)}
                    </div>
                </TabPanel>

                <TabPanel className="w-full">
                    <div className="grid grid-cols-2 gap-8">
                        {projects.filter(project => project.type === "Mobile").map(renderProjectCard)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Works;

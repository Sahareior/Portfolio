import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Profile from './components/ProfileDetails/Profile';

import Navigation from './components/Navigarions/Navigation';
import AboutSection from './components/AboutSection';
import Works from './components/Works';
import Resume from './components/Resume';
import Contact from './components/contact/Contact';

function App() {
  const [nav, setNav] = useState("About");

  const handlePage = () => {
    if (nav === "About") {
      return <AboutSection />;
    } else if (nav === "Works") {
      return <Works />;
    } else if (nav === "Resume") {
      return <Resume />;
    }
    else if (nav === "Contacts"){
      return <Contact />
    }
  };

  const handleNavigation = (section: string) => {
    setNav(section);
  };

  return (
    <div className='md:flex justify-center'>
      <Navigation handleClick={handleNavigation} />
      <div className="md:grid grid-cols-2 gap-6 h-[97vh] md:overflow-y-hidden w-full justify-items-center py-5 items-center">
        <div className="flex  flex-row items-center justify-center w-full h-full bg-[#222222] rounded-lg">
          <Profile />
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={nav} // Key changes with each new nav, triggering animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="overflow-y-scroll md:pl-12 p-4 md:p-8 bg-[#222222]  w-full h-full"
          >
            {handlePage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;

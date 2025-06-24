import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import AnimatedText from './components/AnimatedText';
import MeetMuse from './components/MeetMuse';
import ModularPresentationMain from './components/ModularPresentationMain';
import HowItWorks from './components/HowItWorks';
import UserCursor from './components/UserCursor';
import Benefits from './components/Benefits';
import HeroTwo from './components/HeroTwo';
import PlugAndPlay from './components/PlugAndPlay';
import Steps from './components/Steps';
import Comments from './components/Comments'
import FAQ from './components/FAQ.js';
import Footer from './components/Footer.js';

//!  redirect to showcase page -- YAP sonra sil
import { redirect } from 'next/navigation';

export default function Home() {
  //!  redirect to showcase page -- YAP sonra sil
  // redirect('/showcase'); 
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar /> 

      <MainContent />

      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>

        <AnimatedText />

        <MeetMuse />

        <ModularPresentationMain />

        <div className="w-4/5 max-w-[1024px] h-[1px] bg-[#EBEBEB] mx-auto"></div>
        
        <HowItWorks />

        <UserCursor />

        <Benefits />
      </div>

      <HeroTwo/>

      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18 '>
        <PlugAndPlay/> 

        <Steps />

        <Comments />
        
        <div className="w-4/5 max-w-[1024px] h-[1px] bg-[#EBEBEB] mx-auto hidden lg:block"></div>

        <FAQ />

        <Footer />

      </div>

    </div>
  );
}
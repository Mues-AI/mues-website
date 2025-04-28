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

{/* quality={100} priority loading='lazy' unoptimized */}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="">
        <Navbar /> 

        <MainContent />

        <div className='w-full px-18 '>
          {/* AnimatedTextte animasyon değişikliği istenirse değiştiririz */}
          <AnimatedText />

          <MeetMuse />

          <ModularPresentationMain />

          <div className="max-w-[1024px] h-[1px] bg-[#EBEBEB] mx-auto"></div>

          <HowItWorks />

          <UserCursor />
        
          <Benefits />

        </div>
      </div>

      <HeroTwo/>

      <div className='px-18 '>
        <PlugAndPlay/>
        
        <Steps />

        <Comments />
        
        <div className="max-w-[1024px] h-[1px] bg-[#EBEBEB] mx-auto"></div>

        <FAQ />

        <Footer />

      </div>

    </div>
  );
}
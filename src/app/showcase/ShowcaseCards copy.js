import { CursorSvg, MiniEnterButton, MiniLike, MiniDislike } from '../utils/showcase/svgShowcase';
import Image from 'next/image';
import styles from './ShowcaseCards.module.css';

// Card Components

export const MixpanelCard = () => (
    <div className={`${styles.baseCard} -translate-y-[15px] ${styles.adjustNextMargin} `}>
        
        <div className={`${styles.baseCardFirstContent}`}>
            {/* CURSOR - Absolute */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={24} height={24} fill="#7856FF" />
            </div>

            {/* ilk satır */}
            <div className='w-full flex items-center gap-4 h-[24px] '>
                <div className="w-6 h-6 flex items-center justify-center">
                    <Image 
                    src="/showcase/svg/mixpanel.svg" 
                    alt="Mixpanel" 
                    width={24} 
                    height={24}
                    />
                </div>
                
                <p className={styles.cardNameTitle}>
                Mixpanel Agentic AI
                </p>
            </div>

            {/* İkinci satır */}
            <p className={styles.cardParagraph}>
            The best way is to set up a funnel analysis in Mixpanel to see each step users take and where most of them leave your product. This helps you spot the drop-off points. <br /><br /> Do you want me to create one for you?
            </p>
        </div>

        {/* Reply Paragraph */}
        <p className="text-[#BBB] font-openRunde text-[23px] leading-[32px] px-6 py-4.5 border-t border-[#F5F6FA]">
        Reply to Mixpanel AI Assistant
        </p>
    </div>
);

export const HubSpotCard = () => (
    <div className={styles.baseCard}>

        <div className={`${styles.baseCardFirstContent}`}>
            {/* CURSOR - Absolute */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={24} height={24} fill="#F95C35" />
            </div>

            {/* ilk satır */}
            <div className='w-full flex items-center gap-4 h-[24px] '>

            <div className="w-6 h-6 flex items-center justify-center">
                <Image 
                src="/showcase/svg/hubspot.svg" 
                alt="HubSpot" 
                width={24} 
                height={24}
                />
            </div>
            
            <p className={styles.cardNameTitle}>
            Hubspot AI Assistant
            </p>
            </div>

            {/* İkinci satır */}
            <p className={styles.cardParagraph}>
            A contact is anyone whose information is stored in your CRM—this could be a customer, a prospect you interact with.
            <br /><br />
            Anything else you&apos;d like to ask me?
            </p>
        </div>

        {/* Reply Paragraph */}
        <p className="text-[#BBB] font-openRunde text-[23px] leading-[32px] px-6 py-4.5 border-t border-[#F5F6FA]">
        Reply to Hubspot AI Assistant
        </p>
    </div>
);

export const DropboxCard = () => (
    <div className={styles.baseCard}>
        <div className={`${styles.baseCardFirstContent}`}>
            {/* CURSOR - Absolute */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={24} height={24} fill="#0061FE" />
            </div>

            {/* ilk satır */}
            <div className='w-full flex items-center gap-4 h-[24px]'>
                <div className="w-6 h-6 flex items-center justify-center">
                    <Image 
                        src="/showcase/svg/dropbox.svg" 
                        alt="Dropbox" 
                        width={24} 
                        height={24}
                    />
                </div>
                
                <p className={styles.cardNameTitle}>
                Dropbox AI Agent
                </p>
            </div>

            {/* İkinci satır */}
            <p className={styles.cardParagraph}>
            I can help you to create a signature
            </p>

            {/* Üçüncü ve dördüncü satır */}
            <div className="w-full flex flex-col items-center gap-2.5">
                
                {/* Üçüncü */}
                <div className="w-full flex items-center h-auto rounded-3xl px-6 py-2.5 gap-2.5 border border-[rgba(0,97,254,0.15)] ">
                    <p className="text-[#0061FE] text-center font-openRunde text-[21px] font-normal leading-[28px] tracking-[0.21px]">
                    Create a signature for me
                    </p>

                    <div className="w-7 h-7 rounded-[7px] border-[1.75px] border-[#EEE] bg-white flex justify-center pt-[4px]"style={{ boxShadow: '0px -1.75px 0px 1.75px #D8D8D8 inset' }}>
                        <MiniEnterButton />
                    </div>
                
                </div>

                {/* Dördüncü */}
                <div className="w-full flex items-center h-auto rounded-3xl px-6 py-2.5 gap-2.5 border border-[#F4F4F4] ">
                    <p className="text-[#323232] text-center font-openRunde text-[21px] font-normal leading-[28px] tracking-[0.21px]">
                    I have another request
                    </p>      
                </div>

            </div>
        </div>
    </div>
);
  
export const JiraCard = () => (
    <div className={styles.baseCard}>
        <div className={`${styles.baseCardFirstContent}`}>
            {/* CURSOR - Absolute */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={24} height={24} fill="#1868DB" />
            </div>

            {/* ilk satır */}
            <div className='w-full flex items-center gap-4 h-[24px] '>

            <div className="w-6 h-6 flex items-center justify-center">
                <Image 
                    src="/showcase/svg/jira.svg" 
                    alt="Jira" 
                    width={24} 
                    height={24}
                />
            </div>
            
            <p className={styles.cardNameTitle}>
            Jira AI Companion
            </p>
            </div>

            {/* İkinci satır */}
            <p className={styles.cardParagraph}>
            What to do with incomplete tasks?
            </p>

            {/* Üçüncü ve dördüncü satır */}
            <div className="w-full flex flex-col items-center gap-2.5">
            
            {/* Üçüncü */}
            <div className="w-full flex items-center h-auto rounded-3xl px-6 py-2.5 gap-2.5 border border-[#1868DB26] ">
                <p className="text-[#1868DB] text-center font-openRunde text-[21px] font-normal leading-[28px] tracking-[0.21px]">
                Move to the next sprint
                </p>

                <div className="w-7 h-7 rounded-[7px] border-[1.75px] border-[#EEE] bg-white flex justify-center pt-[4px]"style={{ boxShadow: '0px -1.75px 0px 1.75px #D8D8D8 inset' }}>
                    <MiniEnterButton />
                </div>
            </div>

            {/* Dördüncü */}
            <div className="w-full flex items-center h-auto rounded-3xl px-6 py-2.5 gap-2.5 border border-[#F4F4F4] ">
                <p className="text-[#323232] text-center font-openRunde text-[21px] font-normal leading-[28px] tracking-[0.21px]">
                I have another request
                </p>      
            </div>

            </div>
        </div>
    </div>
);

export const ProductboardCard = () => (
    <div className={styles.baseCard}>
        <div className={`${styles.baseCardFirstContent}`}>
            {/* CURSOR - Absolute */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={24} height={24} fill="#F4BE00" />
            </div>

            {/* ilk satır */}
            <div className='w-full flex items-center gap-4 h-[24px] '>

            <div className="w-6 h-6 flex items-center justify-center">
                <Image 
                    src="/showcase/svg/productboard.svg" 
                    alt="Productboard" 
                    width={24} 
                    height={24}
                />
            </div>
            
            <p className={styles.cardNameTitle}>
            Productboard AI Agent
            </p>
            </div>

            {/* İkinci satır */}
            <p className={styles.cardParagraph}>
            How would you like to handle feedback?
            </p>

            {/* Üçüncü ve dördüncü satır */}
            <div className="w-full flex flex-col items-center gap-2.5">
            
            {/* Üçüncü */}
            <div className="w-full flex items-center h-auto rounded-3xl px-6 py-2.5 gap-2.5 border border-[#F4BE0026] ">
                <p className="text-[#F4BE00] text-center font-openRunde text-[21px] font-normal leading-[28px] tracking-[0.21px]">
                Summarize feedback for me
                </p>

                <div className="w-7 h-7 rounded-[7px] border-[1.75px] border-[#EEE] bg-white flex justify-center pt-[4px]"style={{ boxShadow: '0px -1.75px 0px 1.75px #D8D8D8 inset' }}>
                    <MiniEnterButton />
                </div>
            </div>

            {/* Dördüncü */}
            <div className="w-full flex items-center h-auto rounded-3xl px-6 py-2.5 gap-2.5 border border-[#F4F4F4] ">
                <p className="text-[#323232] text-center font-openRunde text-[21px] font-normal leading-[28px] tracking-[0.21px]">
                I have another request
                </p>      
            </div>

            </div>
        </div>
    </div>
);

export const ClickUpCard = () => (
    <div className={styles.baseCard}>
        <div className={`${styles.baseCardFirstContent}`}>

            {/* CURSOR - Absolute */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={24} height={24} fill="#FA12E3" />
            </div>

            {/* ilk satır */}
            <div className='w-full flex items-center gap-4 h-[24px] '>

            <div className="w-6 h-6 flex items-center justify-center">
                <Image 
                    src="/showcase/svg/clickup.svg" 
                    alt="ClickUp" 
                    width={24} 
                    height={24}
                />
            </div>
            
            <p className={styles.cardNameTitle}>
            ClickUp Agent
            </p>
            </div>

            {/* İkinci satır */}
            <p className={styles.cardParagraph}>
            How was your experience?
            </p>

            {/* Üçüncü ve dördüncü satır */}
            <div className="w-full flex justify-center items-center gap-2.5">
            
                {/* Üçüncü */}
                <div className='w-1/2 py-2.5 flex justify-center items-center rounded-2xl border-2 border-[#F1F1F1] gap-2.5'>
                    <MiniLike />

                    <p className='text-[#323232] text-center font-openRunde text-[21px] leading-[28px] tracking-[0.21px]'>
                    Helpful
                    </p>
                </div>

                {/* Dördüncü */}
                <div className='w-1/2 py-2.5 flex justify-center items-center rounded-2xl border-2 border-[#F1F1F1] gap-2.5'>
                    <MiniDislike />

                    <p className='text-[#323232] text-center font-openRunde text-[21px] leading-[28px] tracking-[0.21px]'>
                    Not helpful
                    </p>
                </div>
            </div>

        </div>    
    </div>
);

export const AWSCard = () => (
    <div className={styles.baseCard}>
        <div className={`${styles.baseCardFirstContent}`}>

            {/* CURSOR - Absolute */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={24} height={24} fill="#FF9900" />
            </div>

            {/* ilk satır */}
            <div className='w-full flex items-center gap-4 h-[24px] '>

            <div className="w-6 h-6 flex items-center justify-center">
                <Image 
                    src="/showcase/svg/aws.svg" 
                    alt="Amazon Web Services" 
                    width={24} 
                    height={14}
                />
            </div>
            
            <p className={styles.cardNameTitle}>
            AWS AI Assistant
            </p>
            </div>

            {/* İkinci satır */}
            <p className={styles.cardParagraph}>
            How was your experience?
            </p>

            {/* Üçüncü ve dördüncü satır */}
            <div className="w-full flex justify-center items-center gap-2.5">
            
                {/* Üçüncü */}
                <div className='w-1/2 py-2.5 flex justify-center items-center rounded-2xl border-2 border-[#F1F1F1] gap-2.5'>
                    <MiniLike />

                    <p className='text-[#323232] text-center font-openRunde text-[21px] leading-[28px] tracking-[0.21px]'>
                    Helpful
                    </p>
                </div>

                {/* Dördüncü */}
                <div className='w-1/2 py-2.5 flex justify-center items-center rounded-2xl border-2 border-[#F1F1F1] gap-2.5'>
                    <MiniDislike />

                    <p className='text-[#323232] text-center font-openRunde text-[21px] leading-[28px] tracking-[0.21px]'>
                    Not helpful
                    </p>
                </div>
            </div>

        </div>    
    </div>
);

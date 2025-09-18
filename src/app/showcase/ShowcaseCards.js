import { MiniEnterButton, MiniLike, MiniDislike, MiniEnterButtonMobile, MiniLikeMobile, MiniDislikeMobile } from '../utils/showcase/svgShowcase';
import { CursorSvg } from '../utils/svgOurBrand';
import Image from 'next/image';
import styles from './ShowcaseCards.module.css';
import useStore from '../lib/store';

// Custom hook for cursor size - ortak kullanım için
const useCursorSize = () => {
    const { isMobile } = useStore();
    return isMobile ? 16 : 24;
};

// Card Components

export const MixpanelCard = () => (
    <div className={`${styles.baseCard} -translate-y-[15px]  ${styles.adjustNextMargin} `}>
        
        <div className={`${styles.baseCardFirstContent}`}>
            {/* CURSOR */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={useCursorSize()} height={useCursorSize()} fill="#7856FF" />
            </div>

            {/* ilk satır */}
            <div className={styles.headerRow}>
                <div className={styles.logoContainer}>
                    <Image 
                    src="/showcase/svg/mixpanel.svg" 
                    alt="Mixpanel" 
                    className={styles.logoImage}
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
        <p className={styles.replyText}>
        Reply to Mixpanel Agentic AI
        </p>
    </div>
);

export const HubSpotCard = () => (
    <div className={styles.baseCard}>

        <div className={`${styles.baseCardFirstContent}`}>
            {/* CURSOR */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={useCursorSize()} height={useCursorSize()} fill="#F95C35" />
            </div>

            {/* ilk satır */}
            <div className={styles.headerRow}>

            <div className={styles.logoContainer}>
                <Image 
                src="/showcase/svg/hubspot.svg" 
                alt="HubSpot" 
                className={styles.logoImage}
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
        <p className={styles.replyText}>
        Reply to Hubspot AI Assistant
        </p>
    </div>
);

export const DropboxCard = () => (
    <div className={styles.baseCard}>
        <div className={`${styles.baseCardFirstContent}`}>
            {/* CURSOR */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={useCursorSize()} height={useCursorSize()} fill="#0061FE" />
            </div>

            {/* ilk satır */}
            <div className={styles.headerRow}>
                <div className={styles.logoContainer}>
                    <Image 
                        src="/showcase/svg/dropbox.svg" 
                        alt="Dropbox" 
                        className={styles.logoImage}
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
            <div className={styles.twoButtonsContainer}>
                
                {/* Üçüncü */}
                <div className={`${styles.primaryButton} border border-[rgba(0,97,254,0.15)] `}>
                    <p className={`${styles.buttonText} text-[#0061FE]`}>
                    Create a signature for me
                    </p>

                    <div className={styles.enterButton}>
                        {/* Mobile version - hidden on md+ */}
                        <div className={styles.enterButtonMobile}>
                            <MiniEnterButtonMobile />
                        </div>
                        {/* Desktop version - hidden on <md */}
                        <div className={styles.enterButtonDesktop}>
                            <MiniEnterButton />
                        </div>
                    </div>
                
                </div>

                {/* Dördüncü */}
                <div className={`${styles.primaryButton} border border-[#F4F4F4] `}>
                    <p className={`${styles.buttonText} text-[#323232]`}>
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
            {/* CURSOR */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={useCursorSize()} height={useCursorSize()} fill="#1868DB" />
            </div>

            {/* ilk satır */}
            <div className={styles.headerRow}>

            <div className={styles.logoContainer}>
                <Image 
                    src="/showcase/svg/jira.svg" 
                    alt="Jira" 
                    className={styles.logoImage}
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
            <div className={styles.twoButtonsContainer}>

                {/* Üçüncü */}
                <div className={`${styles.primaryButton} border border-[#1868DB26] `}>
                    <p className={`${styles.buttonText} text-[#1868DB]`}>
                    Move to the next sprint
                    </p>

                    <div className={styles.enterButton}>
                        {/* Mobile version - hidden on md+ */}
                        <div className={styles.enterButtonMobile}>
                            <MiniEnterButtonMobile />
                        </div>
                        {/* Desktop version - hidden on <md */}
                        <div className={styles.enterButtonDesktop}>
                            <MiniEnterButton />
                        </div>
                    </div>
                </div>

                {/* Dördüncü */}
                <div className={`${styles.primaryButton} border border-[#F4F4F4] `}>
                    <p className={`${styles.buttonText} text-[#323232]`}>
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
            {/* CURSOR */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={useCursorSize()} height={useCursorSize()} fill="#F4BE00" />
            </div>

            {/* ilk satır */}
            <div className={styles.headerRow}>

            <div className={styles.logoContainer}>
                <Image 
                    src="/showcase/svg/productboard.svg" 
                    alt="Productboard" 
                    className={styles.logoImage}
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
            How do you manage feedback?
            </p>

            {/* Üçüncü ve dördüncü satır */}
            <div className={styles.twoButtonsContainer}>
                            
                {/* Üçüncü */}
                <div className={`${styles.primaryButton} border border-[#F4BE0026] `}>
                    <p className={`${styles.buttonText} text-[#F4BE00]`}>
                    Summarize feedback for me
                    </p>

                    <div className={styles.enterButton}>
                        {/* Mobile version - hidden on md+ */}
                        <div className={styles.enterButtonMobile}>
                            <MiniEnterButtonMobile />
                        </div>
                        {/* Desktop version - hidden on <md */}
                        <div className={styles.enterButtonDesktop}>
                            <MiniEnterButton />
                        </div>
                    </div>
                </div>

                {/* Dördüncü */}
                <div className={`${styles.primaryButton} border border-[#F4F4F4] `}>
                    <p className={`${styles.buttonText} text-[#323232]`}>
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

            {/* CURSOR */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={useCursorSize()} height={useCursorSize()} fill="#FA12E3" />
            </div>

            {/* ilk satır */}
            <div className={styles.headerRow}>

            <div className={styles.logoContainer}>
                <Image 
                    src="/showcase/svg/clickup.svg" 
                    alt="ClickUp" 
                    className={styles.logoImage}
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
            <div className={styles.feedbackContainer}>
            
                {/* Üçüncü */}
                <div className={styles.feedbackButton}>
                    {/* Mobile version - hidden on md+ */}
                    <div className={styles.feedbackIconMobile}>
                        <MiniLikeMobile />
                    </div>
                    {/* Desktop version - hidden on <md */}
                    <div className={styles.feedbackIconDesktop}>
                        <MiniLike />
                    </div>

                    <p className={`${styles.buttonText} text-[#323232]`}>
                    Helpful
                    </p>
                </div>

                {/* Dördüncü */}
                <div className={styles.feedbackButton}>
                    {/* Mobile version - hidden on md+ */}
                    <div className={styles.feedbackIconMobile}>
                        <MiniDislikeMobile />
                    </div>
                    {/* Desktop version - hidden on <md */}
                    <div className={styles.feedbackIconDesktop}>
                        <MiniDislike />
                    </div>

                    <p className={`${styles.buttonText} text-[#323232]`}>
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

            {/* CURSOR */}
            <div className={styles.cursorAbsolute}>
                <CursorSvg width={useCursorSize()} height={useCursorSize()} fill="#FF9900" />
            </div>

            {/* ilk satır */}
            <div className={styles.headerRow}>

            <div className={styles.logoContainer}>
                <Image 
                    src="/showcase/svg/aws.svg" 
                    alt="Amazon Web Services" 
                    className={styles.logoImageAws}
                    width={23} 
                    height={13}
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
            <div className={styles.feedbackContainer}>
            
                {/* Üçüncü */}
                <div className={styles.feedbackButton}>
                    {/* Mobile version - hidden on md+ */}
                    <div className={styles.feedbackIconMobile}>
                        <MiniLikeMobile />
                    </div>
                    {/* Desktop version - hidden on <md */}
                    <div className={styles.feedbackIconDesktop}>
                        <MiniLike />
                    </div>

                    <p className={`${styles.buttonText} text-[#323232]`}>
                    Helpful
                    </p>
                </div>

                {/* Dördüncü */}
                <div className={styles.feedbackButton}>
                    {/* Mobile version - hidden on md+ */}
                    <div className={styles.feedbackIconMobile}>
                        <MiniDislikeMobile />
                    </div>
                    {/* Desktop version - hidden on <md */}
                    <div className={styles.feedbackIconDesktop}>
                        <MiniDislike />
                    </div>

                    <p className={`${styles.buttonText} text-[#323232]`}>
                    Not helpful
                    </p>
                </div>
            </div>

        </div>    
    </div>
);
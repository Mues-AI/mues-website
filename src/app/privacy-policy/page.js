import Navbar from '../components/Navbar.js';
import { ArrowRightIcon } from '../utils/svgIcons';
import FAQ from '../components/FAQ.js';
import Footer from '../components/Footer.js';
import styles from './privacy.module.css';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar variant="light" />
            <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18 '>

                {/* Main Hero Container */}
                <div className='w-full flex flex-col gap-6 mt-24 md:mt-[148px] mb-[120px] md:mb-[200px]'>

                    {/* Left - Right Arrow and LEGAL DOCUMENTS Badge */}
                    <div className='w-full flex flex-row justify-center md:justify-between items-center'>
                        
                        {/* LEFT ARROW - Terms of Service */}
                        <Link href="/terms-of-service" className='w-fit flex-row items-center gap-2 cursor-pointer hidden md:flex'>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD' className='rotate-180'/>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Terms of Service</span>
                        </Link>

                        {/* Badge - LEGAL DOCUMENTS */}
                        <div className="w-fit h-fit bg-f8f8f8 rounded-full py-[7px] px-3 flex items-center justify-center gap-2">
                            <div className="text-center text-[12px] leading-4 tracking-[0.12px] text-[#777]">
                            LEGAL DOCUMENTS
                            </div>
                        </div>

                        {/* RIGHT ARROW - Security Policy */}
                        <Link href="/security-policy" className='w-fit flex-row items-center gap-2 cursor-pointer hidden md:flex'>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Security Policy</span>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD'/>
                        </Link>
                    </div>

                    {/* Main Title */}
                    <h1 className='text-primary-black text-center font-rethinkSans font-bold 
                    text-[36px] leading-[48px] tracking-[0.36px]
                    sm:text-[48px] sm:leading-[56px] sm:tracking-[0.48px]
                    md:text-[52px] md:leading-[60px] md:tracking-[0.52px]
                    lg:text-[56px] lg:leading-[64px] lg:tracking-[0.56px]'>
                        Privacy Policy
                    </h1>

                    {/* Last Updated */}
                    <p className='text-[#474645] text-center
                    text-[14px] leading-[24px] tracking-[0.14px]
                    sm:text-[16px] sm:leading-[28px] sm:tracking-[0.16px]
                    lg:text-[20px] lg:leading-[36px] lg:tracking-[0.2px]'>
                    Last updated: July 9, 2025
                    </p>

                    {/* Left - Right Arrow and LEGAL DOCUMENTS Badge -- MOBILE görünüm - de alta geliyor*/}
                    <div className='w-full flex-row justify-around items-center mt-20 flex md:hidden'>
    
                        {/* LEFT ARROW - Terms of Service */}
                        <Link href="/terms-of-service" className='w-fit flex-row items-center gap-2 cursor-pointer flex'>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD' className='rotate-180'/>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Terms of Service</span>
                        </Link>

                        {/* RIGHT ARROW - Security Policy */}
                        <Link href="/security-policy" className='w-fit flex-row items-center gap-2 cursor-pointer flex'>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Security Policy</span>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD'/>
                        </Link>
                    </div>

                </div>


                {/* Privacy Policy Content */}
                <div className='w-full max-w-[912px] mx-auto pb-[152px]'>
                    <h2 className='text-[#323232] mb-6
                    text-[20px] leading-[28px]
                    sm:text-[21px] sm:leading-[29px]
                    md:text-[22px] md:leading-[30px]
                    lg:text-[24px] lg:leading-[32px]'>
                    Acceptance of These Privacy Policy
                    </h2>

                    <span className='text-[#323232]'>
                        <div>
                            <p className={styles.mainTitle}>1. Introduction</p>
                            <p className={styles.paragraph}>
                                Welcome to Mues AI, the agentic AI platform that revolutionizes how users interact with software through natural language delegation. This Privacy Policy explains how ProducterHQ OÜ (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operating as Mues AI, collects, uses, processes, and protects your personal information when you use our Services.
                            </p>

                            <p className={styles.subTitle}>1.1 Legal Framework</p>
                            <p className={styles.paragraph}>
                                This Privacy Policy complies with:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• General Data Protection Regulation (GDPR) EU 2016/679</p>
                                <p className={styles.paragraph}>• Estonian Personal Data Protection Act (PDPA)</p>
                                <p className={styles.paragraph}>• Estonian Data Protection Implementation Act</p>
                                <p className={styles.paragraph}>• Other applicable data protection laws in jurisdictions where we operate</p>
                            </div>

                            <p className={styles.subTitle}>1.2 Data Controller Information</p>
                            <p className={styles.paragraph}>
                                Data Controller: ProducterHQ OÜ<br />
                                Registration Number: 16539847<br />
                                Registered Address: Tiiu tn 12/322, Kesklinna linnaosa, 10135 Tallinn, Harju maakond<br />
                                Website: <a href="https://mues.ai/" className="underline">https://mues.ai/</a><br />
                                Contact: <a href="mailto:privacy@mues.ai" className="underline">privacy@mues.ai</a>
                            </p>

                            <p className={styles.mainTitle}>2. Information We Collect</p>
                            <p className={styles.subTitle}>2.1 Personal Information You Provide</p>
                            <p className={styles.paragraph}>
                                Account Information:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Name (first and last)</p>
                                <p className={styles.paragraph}>• Email address</p>
                                <p className={styles.paragraph}>• Password (encrypted)</p>
                                <p className={styles.paragraph}>• Company/organization name</p>
                                <p className={styles.paragraph}>• Professional title</p>
                            </div>

                            <p className={styles.paragraph}>
                                Profile Information:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Account preferences and settings</p>
                                <p className={styles.paragraph}>• User interface customizations</p>
                                <p className={styles.paragraph}>• Language preferences</p>
                                <p className={styles.paragraph}>• Notification settings</p>
                            </div>

                            <p className={styles.paragraph}>
                                Payment Information:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Billing address</p>
                                <p className={styles.paragraph}>• Payment method details (processed securely through Stripe)</p>
                                <p className={styles.paragraph}>• Transaction history</p>
                                <p className={styles.paragraph}>• Subscription details</p>
                            </div>

                            <p className={styles.subTitle}>2.2 AI Interaction Data</p>
                            <p className={styles.paragraph}>
                                Conversation History:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• All communications with AI agents</p>
                                <p className={styles.paragraph}>• Task delegation requests and instructions</p>
                                <p className={styles.paragraph}>• User queries and AI responses</p>
                                <p className={styles.paragraph}>• Feedback provided through our platform</p>
                            </div>

                            <p className={styles.paragraph}>
                                Usage Analytics:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Feature utilization patterns</p>
                                <p className={styles.paragraph}>• Task completion rates</p>
                                <p className={styles.paragraph}>• AI agent performance metrics</p>
                                <p className={styles.paragraph}>• User journey mapping data</p>
                            </div>

                            <p className={styles.subTitle}>2.3 Automatically Collected Information</p>
                            <p className={styles.paragraph}>
                                Technical Data:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• IP address and geographic location</p>
                                <p className={styles.paragraph}>• Device information (type, operating system, browser)</p>
                                <p className={styles.paragraph}>• Connection details (ISP, network type)</p>
                                <p className={styles.paragraph}>• Session duration and timestamps</p>
                            </div>

                            <p className={styles.paragraph}>
                                Performance Data:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Error logs and diagnostic information</p>
                                <p className={styles.paragraph}>• System performance metrics</p>
                                <p className={styles.paragraph}>• Response times and latency data</p>
                                <p className={styles.paragraph}>• Security event logs</p>
                            </div>

                            <p className={styles.mainTitle}>3. Legal Basis for Processing</p>
                            <p className={styles.paragraph}>
                                Under GDPR Article 6, we process your personal data based on the following legal grounds:
                            </p>

                            <p className={styles.subTitle}>3.1 Contract Performance</p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Providing AI agent services</p>
                                <p className={styles.paragraph}>• Processing subscription payments</p>
                                <p className={styles.paragraph}>• Managing user accounts</p>
                                <p className={styles.paragraph}>• Delivering customer support</p>
                            </div>

                            <p className={styles.subTitle}>3.2 Legitimate Interests</p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Improving AI agent performance and accuracy</p>
                                <p className={styles.paragraph}>• Ensuring platform security and fraud prevention</p>
                                <p className={styles.paragraph}>• Conducting analytics for service optimization</p>
                                <p className={styles.paragraph}>• Developing new features and capabilities</p>
                            </div>

                            <p className={styles.subTitle}>3.3 Consent</p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Marketing communications</p>
                                <p className={styles.paragraph}>• Optional feature participation</p>
                                <p className={styles.paragraph}>• Data sharing for research purposes</p>
                                <p className={styles.paragraph}>• Cookie preferences beyond essential cookies</p>
                            </div>

                            <p className={styles.subTitle}>3.4 Legal Obligations</p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Compliance with Estonian company law</p>
                                <p className={styles.paragraph}>• Tax reporting and accounting requirements</p>
                                <p className={styles.paragraph}>• Regulatory compliance obligations</p>
                                <p className={styles.paragraph}>• Law enforcement requests</p>
                            </div>

                            <p className={styles.mainTitle}>4. How We Use Your Information</p>
                            <p className={styles.subTitle}>4.1 Core Service Delivery</p>
                            <p className={styles.paragraph}>
                                AI Agent Operations:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Real-time processing of task delegation requests</p>
                                <p className={styles.paragraph}>• Natural language understanding and response generation</p>
                                <p className={styles.paragraph}>• Task execution and completion tracking</p>
                                <p className={styles.paragraph}>• Contextual assistance and recommendations</p>
                            </div>

                            <p className={styles.paragraph}>
                                Platform Functionality:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• User authentication and authorization</p>
                                <p className={styles.paragraph}>• Account management and billing</p>
                                <p className={styles.paragraph}>• Performance monitoring and optimization</p>
                                <p className={styles.paragraph}>• Error detection and resolution</p>
                            </div>

                            <p className={styles.subTitle}>4.2 Service Improvement</p>
                            <p className={styles.paragraph}>
                                AI Model Enhancement:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Training safety and accuracy classifiers</p>
                                <p className={styles.paragraph}>• Improving natural language processing capabilities</p>
                                <p className={styles.paragraph}>• Developing new AI agent functionalities</p>
                                <p className={styles.paragraph}>• Optimizing response quality and relevance</p>
                            </div>

                            <p className={styles.paragraph}>
                                User Experience Optimization:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Analyzing usage patterns and preferences</p>
                                <p className={styles.paragraph}>• Personalizing AI agent interactions</p>
                                <p className={styles.paragraph}>• Streamlining user workflows</p>
                                <p className={styles.paragraph}>• Enhancing platform accessibility</p>
                            </div>

                            <p className={styles.subTitle}>4.3 Business Operations</p>
                            <p className={styles.paragraph}>
                                Security and Compliance:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Fraud detection and prevention</p>
                                <p className={styles.paragraph}>• Security incident response</p>
                                <p className={styles.paragraph}>• Regulatory compliance monitoring</p>
                                <p className={styles.paragraph}>• Audit trail maintenance</p>
                            </div>

                            <p className={styles.paragraph}>
                                Customer Support:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Resolving technical issues</p>
                                <p className={styles.paragraph}>• Providing usage guidance</p>
                                <p className={styles.paragraph}>• Processing account-related requests</p>
                                <p className={styles.paragraph}>• Gathering feedback for improvements</p>
                            </div>

                            <p className={styles.mainTitle}>5. AI-Specific Processing Details</p>
                            <p className={styles.subTitle}>5.1 Agentic AI Transparency</p>
                            <p className={styles.paragraph}>
                                Our AI agents operate with varying degrees of autonomy to complete user-delegated tasks.
                            </p>
                            <p className={styles.paragraph}>
                                We ensure transparency through:
                            </p>
                            <p className={styles.paragraph}>
                                Decision-Making Processes:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Clear documentation of AI agent capabilities and limitations</p>
                                <p className={styles.paragraph}>• Explanation of how tasks are interpreted and executed</p>
                                <p className={styles.paragraph}>• Transparency about AI model training and data sources</p>
                                <p className={styles.paragraph}>• Regular updates on AI system improvements</p>
                            </div>

                            <p className={styles.paragraph}>
                                Human Oversight:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Human review of AI agent decisions for quality assurance</p>
                                <p className={styles.paragraph}>• Escalation protocols for complex or sensitive tasks</p>
                                <p className={styles.paragraph}>• User control over AI agent behavior and preferences</p>
                                <p className={styles.paragraph}>• Ability to modify or cancel AI agent actions</p>
                            </div>

                            <p className={styles.subTitle}>5.2 Real-Time Processing</p>
                            <p className={styles.paragraph}>
                                All AI interactions are processed in real-time without permanent storage of conversation content, except as specified in our data retention policies. This includes:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Immediate processing of user requests</p>
                                <p className={styles.paragraph}>• Temporary caching for session continuity</p>
                                <p className={styles.paragraph}>• Automatic deletion of temporary processing data</p>
                                <p className={styles.paragraph}>• Secure transmission of all communications</p>
                            </div>

                            <p className={styles.subTitle}>5.3 AI Training and Improvement</p>
                            <p className={styles.paragraph}>
                                We use aggregated and anonymized data to improve our AI agents:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Model performance optimization</p>
                                <p className={styles.paragraph}>• Safety classifier training</p>
                                <p className={styles.paragraph}>• Bias detection and mitigation</p>
                                <p className={styles.paragraph}>• Quality assurance improvements</p>
                            </div>

                            <p className={styles.paragraph}>
                                <strong>Important:</strong> Individual user conversations are not used for AI training unless explicitly consented to by the user.
                            </p>

                            <p className={styles.mainTitle}>6. Third-Party Integrations</p>
                            <p className={styles.subTitle}>6.1 AI Service Providers</p>
                            <p className={styles.paragraph}>
                                OpenAI:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Powers core natural language processing</p>
                                <p className={styles.paragraph}>• Provides advanced reasoning capabilities</p>
                                <p className={styles.paragraph}>• Processes user queries in real-time</p>
                                <p className={styles.paragraph}>• Subject to OpenAI&apos;s data usage policies</p>
                            </div>

                            <p className={styles.paragraph}>
                                Anthropic:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Enhances AI reasoning and safety</p>
                                <p className={styles.paragraph}>• Provides Claude-based processing capabilities</p>
                                <p className={styles.paragraph}>• Ensures responsible AI behavior</p>
                                <p className={styles.paragraph}>• Governed by Anthropic&apos;s privacy practices</p>
                            </div>

                            <p className={styles.paragraph}>
                                Google Gemini:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Supports specialized AI functionalities</p>
                                <p className={styles.paragraph}>• Enables advanced language understanding</p>
                                <p className={styles.paragraph}>• Processes specific query types</p>
                                <p className={styles.paragraph}>• Follows Google&apos;s enterprise privacy standards</p>
                            </div>

                            <p className={styles.subTitle}>6.2 Payment Processing</p>
                            <p className={styles.paragraph}>
                                Stripe:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Processes all subscription payments</p>
                                <p className={styles.paragraph}>• Handles billing and invoicing</p>
                                <p className={styles.paragraph}>• Manages payment method security</p>
                                <p className={styles.paragraph}>• Maintains PCI DSS compliance</p>
                            </div>

                            <p className={styles.subTitle}>6.3 Data Sharing Limitations</p>
                            <p className={styles.paragraph}>
                                Important Restrictions:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Our AI agents cannot access your external software platforms</p>
                                <p className={styles.paragraph}>• No integration with third-party user accounts without explicit consent</p>
                                <p className={styles.paragraph}>• All processing occurs within our secure environment</p>
                                <p className={styles.paragraph}>• No data sharing with advertising or marketing networks</p>
                            </div>

                            <p className={styles.mainTitle}>7. Data Retention and Deletion</p>
                            <p className={styles.subTitle}>7.1 Retention Periods</p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Account Data: Retained while account is active + 1 year after closure</p>
                                <p className={styles.paragraph}>• Conversation History: Retained for 24 months for service improvement</p>
                                <p className={styles.paragraph}>• Payment Records: Retained for 7 years for accounting and legal compliance</p>
                                <p className={styles.paragraph}>• Usage Analytics: Aggregated data retained indefinitely; identifiable data deleted after 2 years</p>
                                <p className={styles.paragraph}>• Security Logs: Retained for 1 year for security monitoring and compliance</p>
                            </div>

                            <p className={styles.subTitle}>7.2 Automated Deletion</p>
                            <p className={styles.paragraph}>
                                We implement automated systems to ensure timely data deletion:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Daily review of retention schedules</p>
                                <p className={styles.paragraph}>• Automatic purging of expired data</p>
                                <p className={styles.paragraph}>• Secure deletion using industry-standard methods</p>
                                <p className={styles.paragraph}>• Verification of deletion completion</p>
                            </div>

                            <p className={styles.subTitle}>7.3 Data Portability</p>
                            <p className={styles.paragraph}>
                                Users can request export of their data in machine-readable format, including:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Account information and preferences</p>
                                <p className={styles.paragraph}>• Conversation history (subject to retention periods)</p>
                                <p className={styles.paragraph}>• Usage statistics and analytics</p>
                                <p className={styles.paragraph}>• Payment and subscription records</p>
                            </div>

                            <p className={styles.mainTitle}>8. International Data Transfers</p>
                            <p className={styles.subTitle}>8.1 Transfer Mechanisms</p>
                            <p className={styles.paragraph}>
                                As a global service, we transfer data internationally using appropriate safeguards:
                            </p>
                            <p className={styles.paragraph}>
                                Adequacy Decisions:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Transfers to countries with EU adequacy decisions</p>
                                <p className={styles.paragraph}>• Automatic compliance with equivalent protection standards</p>
                            </div>

                            <p className={styles.paragraph}>
                                Standard Contractual Clauses:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• EU-approved contractual terms with third-party processors</p>
                                <p className={styles.paragraph}>• Binding data protection obligations</p>
                                <p className={styles.paragraph}>• Regular compliance monitoring</p>
                            </div>

                            <p className={styles.paragraph}>
                                Certification Programs:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Partners with recognized privacy certifications</p>
                                <p className={styles.paragraph}>• Ongoing compliance verification</p>
                                <p className={styles.paragraph}>• Third-party audit requirements</p>
                            </div>

                            <p className={styles.subTitle}>8.2 Specific Transfer Scenarios</p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• United States: Data processed by OpenAI and Anthropic under Standard Contractual Clauses</p>
                                <p className={styles.paragraph}>• Other Jurisdictions: Case-by-case assessment with appropriate safeguards</p>
                            </div>

                            <p className={styles.mainTitle}>9. Your Rights Under GDPR</p>
                            <p className={styles.subTitle}>9.1 Individual Rights</p>
                            <p className={styles.paragraph}>
                                Right of Access:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Request copies of your personal data</p>
                                <p className={styles.paragraph}>• Information about processing purposes and legal basis</p>
                                <p className={styles.paragraph}>• Details of data recipients and retention periods</p>
                            </div>

                            <p className={styles.paragraph}>
                                Right to Rectification:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Correct inaccurate personal data</p>
                                <p className={styles.paragraph}>• Complete incomplete personal data</p>
                                <p className={styles.paragraph}>• Update outdated information</p>
                            </div>

                            <p className={styles.paragraph}>
                                Right to Erasure:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Request deletion of personal data</p>
                                <p className={styles.paragraph}>• Withdraw consent for processing</p>
                                <p className={styles.paragraph}>• Exercise &quot;right to be forgotten&quot;</p>
                            </div>

                            <p className={styles.paragraph}>
                                Right to Restriction:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Limit processing of your data</p>
                                <p className={styles.paragraph}>• Suspend processing pending verification</p>
                                <p className={styles.paragraph}>• Maintain data without processing</p>
                            </div>

                            <p className={styles.paragraph}>
                                Right to Data Portability:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Receive data in structured, machine-readable format</p>
                                <p className={styles.paragraph}>• Transfer data to another controller</p>
                                <p className={styles.paragraph}>• Direct data transfer where technically feasible</p>
                            </div>

                            <p className={styles.paragraph}>
                                Right to Object:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Object to processing based on legitimate interests</p>
                                <p className={styles.paragraph}>• Opt-out of direct marketing</p>
                                <p className={styles.paragraph}>• Object to automated decision-making</p>
                            </div>

                            <p className={styles.subTitle}>9.2 Exercising Your Rights</p>
                            <p className={styles.paragraph}>
                                To exercise any of these rights:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Email: <a href="mailto:privacy@mues.ai" className="underline">privacy@mues.ai</a></p>
                                <p className={styles.paragraph}>• Subject Line: &quot;Data Subject Rights Request&quot;</p>
                                <p className={styles.paragraph}>• Include: Your name, email address, and specific request</p>
                                <p className={styles.paragraph}>• Verification: We may request identity verification</p>
                                <p className={styles.paragraph}>• Response Time: Within 30 days of verified request</p>
                            </div>

                            <p className={styles.mainTitle}>10. Security Measures</p>
                            <p className={styles.subTitle}>10.1 Technical Safeguards</p>
                            <p className={styles.paragraph}>
                                Encryption:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• TLS 1.3 for data in transit</p>
                                <p className={styles.paragraph}>• AES256 encryption for data at rest</p>
                                <p className={styles.paragraph}>• End-to-end encryption for sensitive communications</p>
                                <p className={styles.paragraph}>• Regular encryption key rotation</p>
                            </div>

                            <p className={styles.paragraph}>
                                Access Controls:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Multi-factor authentication for all accounts</p>
                                <p className={styles.paragraph}>• Role-based access control (RBAC)</p>
                                <p className={styles.paragraph}>• Principle of least privilege</p>
                                <p className={styles.paragraph}>• Regular access reviews and updates</p>
                            </div>

                            <p className={styles.paragraph}>
                                Infrastructure Security:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Enterprise-grade cloud hosting</p>
                                <p className={styles.paragraph}>• Network segmentation and firewalls</p>
                                <p className={styles.paragraph}>• Intrusion detection and prevention</p>
                                <p className={styles.paragraph}>• Continuous security monitoring</p>
                            </div>

                            <p className={styles.subTitle}>10.2 Organizational Measures</p>
                            <p className={styles.paragraph}>
                                Staff Training:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Regular privacy and security training</p>
                                <p className={styles.paragraph}>• Clear data handling procedures</p>
                                <p className={styles.paragraph}>• Incident response protocols</p>
                                <p className={styles.paragraph}>• Confidentiality agreements</p>
                            </div>

                            <p className={styles.paragraph}>
                                Third-Party Management:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Due diligence on all service providers</p>
                                <p className={styles.paragraph}>• Contractual data protection requirements</p>
                                <p className={styles.paragraph}>• Regular security assessments</p>
                                <p className={styles.paragraph}>• Incident notification procedures</p>
                            </div>

                            <p className={styles.subTitle}>10.3 AI-Specific Security</p>
                            <p className={styles.paragraph}>
                                Model Security:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Protection against adversarial attacks</p>
                                <p className={styles.paragraph}>• Input validation and sanitization</p>
                                <p className={styles.paragraph}>• Output monitoring and filtering</p>
                                <p className={styles.paragraph}>• Model access controls</p>
                            </div>

                            <p className={styles.paragraph}>
                                Data Protection:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Secure processing pipelines</p>
                                <p className={styles.paragraph}>• Temporary data handling protocols</p>
                                <p className={styles.paragraph}>• Automated data purging</p>
                                <p className={styles.paragraph}>• Privacy-preserving techniques</p>
                            </div>

                            <p className={styles.mainTitle}>11. Children&apos;s Privacy</p>
                            <p className={styles.subTitle}>11.1 Age Restrictions</p>
                            <p className={styles.paragraph}>
                                Our Services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
                            </p>

                            <p className={styles.subTitle}>11.2 Parental Controls</p>
                            <p className={styles.paragraph}>
                                If you believe we have collected information from a child:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Contact us immediately at <a href="mailto:privacy@mues.ai" className="underline">privacy@mues.ai</a></p>
                                <p className={styles.paragraph}>• We will investigate and delete the information</p>
                                <p className={styles.paragraph}>• We will implement additional safeguards if necessary</p>
                            </div>

                            <p className={styles.mainTitle}>12. Cookies and Tracking</p>
                            <p className={styles.subTitle}>12.1 Cookie Types</p>
                            <p className={styles.paragraph}>
                                Essential Cookies:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Authentication and session management</p>
                                <p className={styles.paragraph}>• Security and fraud prevention</p>
                                <p className={styles.paragraph}>• Basic functionality enablement</p>
                            </div>

                            <p className={styles.paragraph}>
                                Analytics Cookies:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Usage pattern analysis</p>
                                <p className={styles.paragraph}>• Performance monitoring</p>
                                <p className={styles.paragraph}>• Service improvement insights</p>
                            </div>

                            <p className={styles.subTitle}>12.2 Cookie Management</p>
                            <p className={styles.paragraph}>
                                You can control cookies through:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Browser settings and preferences</p>
                                <p className={styles.paragraph}>• Our cookie consent interface</p>
                                <p className={styles.paragraph}>• Third-party opt-out tools</p>
                                <p className={styles.paragraph}>• Account privacy settings</p>
                            </div>

                            <p className={styles.mainTitle}>13. Marketing Communications</p>
                            <p className={styles.subTitle}>13.1 Communication Types</p>
                            <p className={styles.paragraph}>
                                With your consent, we may send:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Product updates and feature announcements</p>
                                <p className={styles.paragraph}>• Educational content about AI</p>
                                <p className={styles.paragraph}>• Industry insights and best practices</p>
                                <p className={styles.paragraph}>• Special offers and promotions</p>
                            </div>

                            <p className={styles.subTitle}>13.2 Opt-Out Options</p>
                            <p className={styles.paragraph}>
                                Email Communications:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Unsubscribe link in all marketing emails</p>
                                <p className={styles.paragraph}>• Account settings preferences</p>
                                <p className={styles.paragraph}>• Direct request to <a href="mailto:privacy@mues.ai" className="underline">privacy@mues.ai</a></p>
                            </div>

                            <p className={styles.paragraph}>
                                Legal Basis: All marketing communications are based on explicit consent or legitimate interests with easy opt-out options.
                            </p>

                            <p className={styles.mainTitle}>14. Data Breach Response</p>
                            <p className={styles.subTitle}>14.1 Incident Response Plan</p>
                            <p className={styles.paragraph}>
                                Detection and Assessment:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Continuous monitoring for security incidents</p>
                                <p className={styles.paragraph}>• Rapid incident classification and response</p>
                                <p className={styles.paragraph}>• Impact assessment and containment measures</p>
                            </div>

                            <p className={styles.paragraph}>
                                Notification Requirements:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Supervisory authority notification within 72 hours (if high risk)</p>
                                <p className={styles.paragraph}>• Individual notification without undue delay (if high risk)</p>
                                <p className={styles.paragraph}>• Detailed incident documentation and reporting</p>
                            </div>

                            <p className={styles.subTitle}>14.2 User Communication</p>
                            <p className={styles.paragraph}>
                                In case of a data breach affecting your information:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Direct notification via email</p>
                                <p className={styles.paragraph}>• Clear explanation of what happened</p>
                                <p className={styles.paragraph}>• Steps we&apos;re taking to address the issue</p>
                                <p className={styles.paragraph}>• Recommended actions for your protection</p>
                            </div>

                            <p className={styles.mainTitle}>15. Business Transfers</p>
                            <p className={styles.subTitle}>15.1 Merger or Acquisition</p>
                            <p className={styles.paragraph}>
                                In the event of a merger, acquisition, or sale of assets:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Personal data may be transferred to the new entity</p>
                                <p className={styles.paragraph}>• This Privacy Policy will continue to apply</p>
                                <p className={styles.paragraph}>• Users will be notified of any material changes</p>
                                <p className={styles.paragraph}>• Additional consent may be required for new processing</p>
                            </div>

                            <p className={styles.subTitle}>15.2 Bankruptcy or Liquidation</p>
                            <p className={styles.paragraph}>
                                If ProducterHQ OÜ ceases operations:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Personal data will be deleted or transferred with appropriate safeguards</p>
                                <p className={styles.paragraph}>• Users will receive advance notice</p>
                                <p className={styles.paragraph}>• Data protection obligations will continue</p>
                                <p className={styles.paragraph}>• Supervisory authorities will be notified</p>
                            </div>

                            <p className={styles.mainTitle}>16. Updates to This Policy</p>
                            <p className={styles.subTitle}>16.1 Change Notification</p>
                            <p className={styles.paragraph}>
                                We may update this Privacy Policy to reflect:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Changes in our processing activities</p>
                                <p className={styles.paragraph}>• New legal requirements</p>
                                <p className={styles.paragraph}>• Enhanced security measures</p>
                                <p className={styles.paragraph}>• Improved transparency practices</p>
                            </div>

                            <p className={styles.subTitle}>16.2 User Communication</p>
                            <p className={styles.paragraph}>
                                Notification Methods:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Email notification to all users</p>
                                <p className={styles.paragraph}>• In-app notifications and alerts</p>
                                <p className={styles.paragraph}>• Website banner announcements</p>
                                <p className={styles.paragraph}>• Account dashboard notifications</p>
                            </div>

                            <p className={styles.paragraph}>
                                Effective Date: Changes take effect 30 days after notification, unless immediate compliance is required by law.
                            </p>

                            <p className={styles.mainTitle}>17. Contact Information</p>
                            <p className={styles.subTitle}>17.1 Privacy Inquiries</p>
                            <p className={styles.paragraph}>
                                Primary Contact:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Email: <a href="mailto:privacy@mues.ai" className="underline">privacy@mues.ai</a></p>
                                <p className={styles.paragraph}>• Subject Line: Include &quot;Privacy Inquiry&quot; for fastest response</p>
                                <p className={styles.paragraph}>• Response Time: Within 48 hours for general inquiries</p>
                            </div>

                            <p className={styles.subTitle}>17.2 Data Protection Officer</p>
                            <p className={styles.paragraph}>
                                Currently, we do not have a designated Data Protection Officer. All privacy matters are handled by our privacy team at <a href="mailto:privacy@mues.ai" className="underline">privacy@mues.ai</a>.
                            </p>

                            <p className={styles.subTitle}>17.3 Company Information</p>
                            <p className={styles.paragraph}>
                                ProducterHQ OÜ
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Website: <a href="https://mues.ai/" className="underline">https://mues.ai/</a></p>
                                <p className={styles.paragraph}>• General Contact: <a href="mailto:hi@mues.ai" className="underline">hi@mues.ai</a></p>
                                <p className={styles.paragraph}>• Business Address: Tiiu tn 12/322, Kesklinna linnaosa, 10135 Tallinn, Harju maakond</p>
                                <p className={styles.paragraph}>• Registration: Estonian Company Registry</p>
                            </div>

                            <p className={styles.subTitle}>17.4 Regulatory Contacts</p>
                            <p className={styles.paragraph}>
                                Estonian Data Protection Inspectorate:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Website: <a href="http://www.aki.ee/" className="underline">http://www.aki.ee/</a></p>
                                <p className={styles.paragraph}>• Email: <a href="mailto:info@aki.ee" className="underline">info@aki.ee</a></p>
                                <p className={styles.paragraph}>• Phone: 372 627 4135</p>
                                <p className={styles.paragraph}>• Address: Tatari 39, 10134 Tallinn, Estonia</p>
                            </div>

                            <p className={styles.mainTitle}>18. Conclusion</p>
                            <p className={styles.paragraph}>
                                This Privacy Policy reflects our commitment to protecting your personal information while delivering innovative AI-powered services. We believe in transparency, user control, and responsible data stewardship.
                            </p>

                            <p className={styles.paragraph}>
                                As agentic AI technology continues to evolve, we remain committed to:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Implementing privacy by design principles</p>
                                <p className={styles.paragraph}>• Maintaining the highest security standards</p>
                                <p className={styles.paragraph}>• Ensuring transparent AI operations</p>
                                <p className={styles.paragraph}>• Respecting user rights and preferences</p>
                                <p className={styles.paragraph}>• Complying with all applicable laws and regulations</p>
                            </div>

                            <p className={styles.paragraph}>
                                For any questions about this Privacy Policy or our privacy practices, please contact us at <a href="mailto:privacy@mues.ai" className="underline">privacy@mues.ai</a>. We&apos;re here to help you understand how we protect your information and ensure your privacy rights are respected.
                            </p>

                            <p className={styles.paragraph}>
                                This Privacy Policy is effective as of July 9, 2025, and applies to all users of Mues AI services operated by ProducterHQ OÜ.
                            </p>
                        </div>
                    </span>
                </div>

                <FAQ />
                <Footer/>



            </div>
        </div>
    );
}
  
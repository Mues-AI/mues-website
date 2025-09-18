import Navbar from '../components/Navbar.js';
import { ArrowRightIcon } from '../utils/svgGeneralUtils';
import FAQ from '../components/FAQ.js';
import Footer from '../components/Footer.js';
import styles from './terms.module.css';
import Link from 'next/link';
import HeadingBadge from '@/app/components/ui/HeadingBadge';
import H1 from '@/app/components/ui/H1';


export default function TermsOfService() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar variant="light" />
            <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18 '>

                {/* Main Hero Container */}
                <div className='w-full flex flex-col gap-6 mt-24 md:mt-[148px] mb-[120px] md:mb-[200px]'>

                    {/* Left - Right Arrow and LEGAL DOCUMENTS Badge */}
                    <div className='w-full flex flex-row justify-center md:justify-between items-center'>
                        
                        {/* LEFT ARROW - SECURITY POLICY */}
                        <Link href="/security-policy" className='w-fit flex-row items-center gap-2 cursor-pointer hidden md:flex'>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD' className='rotate-180'/>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Security Policy</span>
                        </Link>

                        {/* Badge - LEGAL DOCUMENTS */}
                        <HeadingBadge >
                            LEGAL DOCUMENTS
                        </HeadingBadge >

                        {/* RIGHT ARROW - PRIVACY POLICY */}
                        <Link href="/privacy-policy" className='w-fit flex-row items-center gap-2 cursor-pointer hidden md:flex'>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Privacy Policy</span>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD'/>
                        </Link>
                    </div>

                    {/* Main Title */}
                    <H1>
                        Terms of Service
                    </H1>

                    {/* Last Updated */}
                    <p className='text-[#474645] text-center
                    text-[14px] leading-[24px] tracking-[0.14px]
                    sm:text-[16px] sm:leading-[28px] sm:tracking-[0.16px]
                    lg:text-[20px] lg:leading-[36px] lg:tracking-[0.2px]'>
                    Last updated: July 10, 2025
                    </p>

                    {/* Left - Right Arrow and LEGAL DOCUMENTS Badge -- MOBILE görünüm - de alta geliyor*/}
                    <div className='w-full flex-row justify-around items-center mt-20 flex md:hidden'>
    
                        {/* LEFT ARROW - SECURITY POLICY */}
                        <Link href="/security-policy" className='w-fit flex-row items-center gap-2 cursor-pointer flex'>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD' className='rotate-180'/>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Security Policy</span>
                        </Link>

                        {/* RIGHT ARROW - PRIVACY POLICY */}
                        <Link href="/privacy-policy" className='w-fit flex-row items-center gap-2 cursor-pointer flex'>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Privacy Policy</span>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD'/>
                        </Link>
                    </div>

                </div>


                {/* Terms of Service Content */}
                <div className='w-full max-w-[912px] mx-auto pb-[152px]'>
                    <h2 className='text-[#323232] mb-6
                    text-[20px] leading-[28px]
                    sm:text-[21px] sm:leading-[29px]
                    md:text-[22px] md:leading-[30px]
                    lg:text-[24px] lg:leading-[32px]'>
                    Acceptance of These Terms of Service
                    </h2>

                    <span className='text-[#323232]'>
                        <div>
                            <p className={styles.mainTitle}>Introduction</p>
                            <p className={styles.paragraph}>
                                Welcome to Mues AI, the agentic AI platform that revolutionizes how users interact with software through natural language delegation. These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) govern your use of our services, website, APIs, and related products (collectively, the &quot;Services&quot;) operated by ProducterHQ OÜ (&quot;Mues AI&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                            </p>
                            <p className={styles.paragraph}>
                                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
                            </p>

                            <p className={styles.mainTitle}>1. Acceptance of Terms</p>
                            <p className={styles.subTitle}>1.1 Agreement to Terms</p>
                            <p className={styles.paragraph}>
                                Your access to and use of the Services is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Services.
                            </p>

                            <p className={styles.subTitle}>1.2 Capacity and Authorization</p>
                            <p className={styles.paragraph}>
                                By accessing or using the Services, you represent and warrant that:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• You are at least 18 years of age</p>
                                <p className={styles.paragraph}>• You have the legal capacity to enter into this Agreement</p>
                                <p className={styles.paragraph}>• If you are using the Services on behalf of a company or organization, you have the authority to bind that entity to these Terms</p>
                            </div>

                            <p className={styles.subTitle}>1.3 Modification of Terms</p>
                            <p className={styles.paragraph}>
                                We reserve the right to modify these Terms at any time. We will provide notice of material changes through our Services or via email. Your continued use of the Services after such modifications constitutes acceptance of the updated Terms.
                            </p>

                            <p className={styles.mainTitle}>2. Access and Use of Services</p>
                            <p className={styles.subTitle}>2.1 License Grant</p>
                            <p className={styles.paragraph}>
                                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your legitimate business purposes.
                            </p>

                            <p className={styles.subTitle}>2.2 AI Agent Services</p>
                            <p className={styles.paragraph}>
                                Mues AI provides agentic AI services that enable users to:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Delegate tasks to AI agents using natural language</p>
                                <p className={styles.paragraph}>• Automate complex software interactions</p>
                                <p className={styles.paragraph}>• Streamline user onboarding and product adoption</p>
                                <p className={styles.paragraph}>• Receive intelligent assistance within web applications</p>
                            </div>

                            <p className={styles.subTitle}>2.3 Account Registration</p>
                            <p className={styles.paragraph}>
                                To use certain features of the Services, you must create an account. You are responsible for:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Maintaining the confidentiality of your account credentials</p>
                                <p className={styles.paragraph}>• All activities that occur under your account</p>
                                <p className={styles.paragraph}>• Promptly notifying us of any unauthorized use</p>
                            </div>

                            <p className={styles.mainTitle}>3. Subscriptions and Billing</p>
                            <p className={styles.subTitle}>3.1 Subscription Plans</p>
                            <p className={styles.paragraph}>
                                We offer various subscription plans with different features and usage limits. Subscription details, including pricing and features, are available on our website.
                            </p>
                            <p className={styles.paragraph}>
                                Certain aspects of the Services are provided on a subscription basis with a Fixed Fee and Overage pricing model (&quot;Subscription(s)&quot;). Your subscription includes:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• A fixed monthly or annual base fee for core platform access</p>
                                <p className={styles.paragraph}>• Additional usage-based charges for AI agent interactions exceeding your plan&apos;s included allowance</p>
                                <p className={styles.paragraph}>• Overage fees calculated based on actual usage beyond included limits</p>
                            </div>

                            <p className={styles.subTitle}>3.2 Billing Cycles</p>
                            <p className={styles.paragraph}>
                                Subscriptions are billed on a recurring basis (monthly or annually) based on your selected plan. Billing occurs at the beginning of each billing cycle.
                            </p>

                            <p className={styles.subTitle}>3.3 Billing Structure</p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Base Subscription Fee: Charged in advance on a recurring monthly or annual basis (&quot;Billing Cycle&quot;)</p>
                                <p className={styles.paragraph}>• Overage Charges: Calculated monthly based on actual usage exceeding your plan&apos;s included AI agent interactions</p>
                                <p className={styles.paragraph}>• Payment Processing: All payments are processed through Stripe, Inc. (&quot;Stripe&quot;), and you are bound by Stripe&apos;s terms of service</p>
                                <p className={styles.paragraph}>• Currency: All prices are listed in Euros EUR or US Dollars USD, excluding applicable VAT and taxes</p>
                            </div>

                            <p className={styles.subTitle}>3.4 Payment Authorization</p>
                            <p className={styles.paragraph}>
                                By subscribing to our Services, you authorize us to charge your designated payment method for all applicable fees. You must provide accurate and complete billing information.
                            </p>

                            <p className={styles.subTitle}>3.5 Automatic Renewal</p>
                            <p className={styles.paragraph}>
                                Subscriptions automatically renew at the end of each billing cycle unless you cancel before the renewal date. You may cancel through your account settings or by contacting support.
                            </p>

                            <p className={styles.mainTitle}>4. Fees and Payments</p>
                            <p className={styles.subTitle}>4.1 Payment Processing</p>
                            <p className={styles.paragraph}>
                                All payments are processed securely through Stripe, our third-party payment processor. By making payments, you agree to Stripe&apos;s terms of service and privacy policy.
                            </p>

                            <p className={styles.subTitle}>4.2 Fee Changes</p>
                            <p className={styles.paragraph}>
                                We may modify subscription fees at any time. Changes will take effect at the beginning of your next billing cycle. We will provide at least 30 days&apos; advance notice of fee increases.
                            </p>

                            <p className={styles.subTitle}>4.3 Refunds</p>
                            <p className={styles.paragraph}>
                                Except as required by law, subscription fees are non-refundable. We may provide refunds at our sole discretion for unused portions of prepaid subscriptions.
                            </p>

                            <p className={styles.subTitle}>4.4 Late Payments</p>
                            <p className={styles.paragraph}>
                                Late payments may result in suspension of Services. We may charge reasonable late fees for overdue payments.
                            </p>

                            <p className={styles.mainTitle}>5. Prohibited Uses</p>
                            <p className={styles.subTitle}>5.1 Acceptable Use</p>
                            <p className={styles.paragraph}>
                                You agree to use the Services only for lawful purposes and in accordance with these Terms. You may not use the Services:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• To violate any applicable laws or regulations</p>
                                <p className={styles.paragraph}>• To transmit harmful, malicious, or illegal content</p>
                                <p className={styles.paragraph}>• To interfere with or disrupt the Services or other users</p>
                                <p className={styles.paragraph}>• To attempt unauthorized access to our systems</p>
                                <p className={styles.paragraph}>• To reverse engineer or attempt to extract our proprietary algorithms</p>
                            </div>

                            <p className={styles.subTitle}>5.2 AI Agent Limitations</p>
                            <p className={styles.paragraph}>
                                You acknowledge that AI agents have limitations and may not always perform tasks accurately. You are responsible for:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Supervising AI agent actions when appropriate</p>
                                <p className={styles.paragraph}>• Verifying critical outcomes</p>
                                <p className={styles.paragraph}>• Not relying on AI agents for decisions that could cause harm</p>
                            </div>

                            <p className={styles.mainTitle}>6. Intellectual Property</p>
                            <p className={styles.subTitle}>6.1 Our Rights</p>
                            <p className={styles.paragraph}>
                                The Services, including all software, content, trademarks, and intellectual property, are owned by ProducterHQ OÜ and our licensors. We retain all rights not expressly granted to you.
                            </p>

                            <p className={styles.subTitle}>6.2 Your Rights</p>
                            <p className={styles.paragraph}>
                                You retain ownership of any content you provide to the Services. By using the Services, you grant us a limited license to use your content as necessary to provide the Services.
                            </p>

                            <p className={styles.subTitle}>6.3 Feedback</p>
                            <p className={styles.paragraph}>
                                Any feedback, suggestions, or ideas you provide about the Services become our property and may be used to improve our Services without compensation to you.
                            </p>

                            <p className={styles.mainTitle}>7. User Content and Data</p>
                            <p className={styles.subTitle}>7.1 Your Content</p>
                            <p className={styles.paragraph}>
                                You are solely responsible for content you submit to the Services. You warrant that you have the right to use and share such content and that it does not violate any third-party rights.
                            </p>

                            <p className={styles.subTitle}>7.2 Data Processing</p>
                            <p className={styles.paragraph}>
                                We process your data in accordance with our Privacy Policy. By using the Services, you consent to such processing.
                            </p>

                            <p className={styles.subTitle}>7.3 Data Backup</p>
                            <p className={styles.paragraph}>
                                You are responsible for maintaining backups of your important data. We are not liable for data loss.
                            </p>

                            <p className={styles.mainTitle}>8. Privacy and Data Protection</p>
                            <p className={styles.subTitle}>8.1 Privacy Policy</p>
                            <p className={styles.paragraph}>
                                Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                            </p>

                            <p className={styles.subTitle}>8.2 GDPR Compliance</p>
                            <p className={styles.paragraph}>
                                We comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws. You have rights regarding your personal data as described in our Privacy Policy.
                            </p>

                            <p className={styles.mainTitle}>9. Third-Party Services</p>
                            <p className={styles.subTitle}>9.1 AI Service Providers</p>
                            <p className={styles.paragraph}>
                                We use third-party AI service providers including OpenAI, Anthropic, and Google to power our AI agents. These providers have their own terms of service and privacy policies.
                            </p>

                            <p className={styles.subTitle}>9.2 Integrations</p>
                            <p className={styles.paragraph}>
                                The Services may integrate with third-party applications and services. We are not responsible for the availability, accuracy, or content of such third-party services.
                            </p>

                            <p className={styles.subTitle}>9.3 Third-Party Links</p>
                            <p className={styles.paragraph}>
                                Our Services may contain links to third-party websites. We are not responsible for the content or practices of these websites.
                            </p>

                            <p className={styles.mainTitle}>10. AI Agent Operations</p>
                            <p className={styles.subTitle}>10.1 AI Capabilities</p>
                            <p className={styles.paragraph}>
                                Our AI agents are designed to perform tasks within web applications through natural language understanding and automated actions. The AI agents:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Process user instructions in real-time</p>
                                <p className={styles.paragraph}>• Interact with web interfaces on your behalf</p>
                                <p className={styles.paragraph}>• Learn from user behavior to improve performance</p>
                                <p className={styles.paragraph}>• Operate with varying degrees of autonomy</p>
                            </div>

                            <p className={styles.subTitle}>10.2 AI Limitations</p>
                            <p className={styles.paragraph}>
                                You acknowledge that AI technology has inherent limitations:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• AI agents may not always interpret instructions accurately</p>
                                <p className={styles.paragraph}>• Performance may vary based on website complexity</p>
                                <p className={styles.paragraph}>• Some tasks may require human oversight</p>
                                <p className={styles.paragraph}>• AI agents cannot guarantee successful task completion</p>
                            </div>

                            <p className={styles.subTitle}>10.3 Human Oversight</p>
                            <p className={styles.paragraph}>
                                For critical or sensitive tasks, you should maintain appropriate human oversight of AI agent actions.
                            </p>

                            <p className={styles.mainTitle}>11. Data Processing for AI</p>
                            <p className={styles.subTitle}>11.1 Training Data</p>
                            <p className={styles.paragraph}>
                                We may use aggregated, anonymized usage data to improve our AI models. Individual user conversations are not used for training without explicit consent.
                            </p>

                            <p className={styles.subTitle}>11.2 Real-Time Processing</p>
                            <p className={styles.paragraph}>
                                AI interactions are processed in real-time. Temporary data may be cached for session continuity but is automatically deleted according to our data retention policies.
                            </p>

                            <p className={styles.subTitle}>11.3 Data Security</p>
                            <p className={styles.paragraph}>
                                We implement appropriate security measures to protect data processed by our AI systems.
                            </p>

                            <p className={styles.mainTitle}>12. Warranties and Disclaimers</p>
                            <p className={styles.subTitle}>12.1 Disclaimer of Warranties</p>
                            <p className={styles.paragraph}>
                                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            </p>

                            <p className={styles.subTitle}>12.2 AI Performance</p>
                            <p className={styles.paragraph}>
                                WE DO NOT WARRANT THAT AI AGENTS WILL PERFORM TASKS ACCURATELY, COMPLETELY, OR WITHOUT ERROR. AI PERFORMANCE MAY VARY BASED ON NUMEROUS FACTORS OUTSIDE OUR CONTROL.
                            </p>

                            <p className={styles.subTitle}>12.3 Service Availability</p>
                            <p className={styles.paragraph}>
                                WE DO NOT GUARANTEE THAT THE SERVICES WILL BE AVAILABLE WITHOUT INTERRUPTION OR ERROR-FREE.
                            </p>

                            <p className={styles.mainTitle}>13. Limitation of Liability</p>
                            <p className={styles.subTitle}>13.1 Liability Limits</p>
                            <p className={styles.paragraph}>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.
                            </p>

                            <p className={styles.subTitle}>13.2 Excluded Damages</p>
                            <p className={styles.paragraph}>
                                WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
                            </p>

                            <p className={styles.subTitle}>13.3 AI-Related Limitations</p>
                            <p className={styles.paragraph}>
                                WE ARE NOT LIABLE FOR ANY DAMAGES RESULTING FROM AI AGENT ACTIONS OR INACTIONS, INCLUDING BUT NOT LIMITED TO INCORRECT TASK EXECUTION OR UNINTENDED CONSEQUENCES.
                            </p>

                            <p className={styles.mainTitle}>14. Indemnification</p>
                            <p className={styles.subTitle}>14.1 Your Indemnification</p>
                            <p className={styles.paragraph}>
                                You agree to indemnify and hold us harmless from any claims, damages, losses, or expenses arising from:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Your use of the Services</p>
                                <p className={styles.paragraph}>• Your violation of these Terms</p>
                                <p className={styles.paragraph}>• Your violation of any third-party rights</p>
                                <p className={styles.paragraph}>• Content you provide to the Services</p>
                            </div>

                            <p className={styles.subTitle}>14.2 Our Indemnification</p>
                            <p className={styles.paragraph}>
                                We will defend you against third-party claims that our Services infringe valid intellectual property rights, subject to your prompt notification and cooperation.
                            </p>

                            <p className={styles.mainTitle}>15. Termination</p>
                            <p className={styles.subTitle}>15.1 Termination by You</p>
                            <p className={styles.paragraph}>
                                You may terminate your account at any time by canceling your subscription through your account settings or contacting support.
                            </p>

                            <p className={styles.subTitle}>15.2 Termination by Us</p>
                            <p className={styles.paragraph}>
                                We may terminate or suspend your account immediately if you violate these Terms or for any other reason at our sole discretion.
                            </p>

                            <p className={styles.subTitle}>15.3 Effect of Termination</p>
                            <p className={styles.paragraph}>
                                Upon termination:
                            </p>
                            <div className={styles.bulletList}>
                                <p className={styles.paragraph}>• Your right to use the Services ceases immediately</p>
                                <p className={styles.paragraph}>• We may delete your account and data subject to our data retention policies</p>
                                <p className={styles.paragraph}>• You remain liable for any outstanding fees</p>
                            </div>

                            <p className={styles.mainTitle}>16. Estonian Law Compliance</p>
                            <p className={styles.subTitle}>16.1 Estonian Company Law</p>
                            <p className={styles.paragraph}>
                                ProducterHQ OÜ is incorporated under Estonian law and operates in compliance with Estonian commercial regulations.
                            </p>

                            <p className={styles.subTitle}>16.2 Consumer Protection</p>
                            <p className={styles.paragraph}>
                                Estonian consumer protection laws apply to eligible transactions.
                            </p>

                            <p className={styles.subTitle}>16.3 Data Protection</p>
                            <p className={styles.paragraph}>
                                We comply with Estonian data protection laws and the Estonian Personal Data Protection Act.
                            </p>

                            <p className={styles.mainTitle}>17. General Terms</p>
                            <p className={styles.subTitle}>17.1 Entire Agreement</p>
                            <p className={styles.paragraph}>
                                These Terms constitute the entire agreement between you and us regarding the Services.
                            </p>

                            <p className={styles.subTitle}>17.2 Severability</p>
                            <p className={styles.paragraph}>
                                If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.
                            </p>

                            <p className={styles.subTitle}>17.3 No Waiver</p>
                            <p className={styles.paragraph}>
                                Our failure to enforce any provision of these Terms does not waive our right to enforce it later.
                            </p>

                            <p className={styles.subTitle}>17.4 Assignment</p>
                            <p className={styles.paragraph}>
                                You may not assign these Terms without our written consent. We may assign these Terms to any affiliate or in connection with a merger or acquisition.
                            </p>

                            <p className={styles.mainTitle}>18. Governing Law and Jurisdiction</p>
                            <p className={styles.subTitle}>18.1 Governing Law</p>
                            <p className={styles.paragraph}>
                                These Terms are governed by Estonian law, excluding its conflict of law principles.
                            </p>

                            <p className={styles.subTitle}>18.2 Jurisdiction</p>
                            <p className={styles.paragraph}>
                                Any disputes arising under these Terms will be subject to the exclusive jurisdiction of the courts of Estonia.
                            </p>

                            <p className={styles.subTitle}>18.3 EU Rights</p>
                            <p className={styles.paragraph}>
                                Nothing in these Terms affects your rights as a consumer under applicable EU law.
                            </p>

                            <p className={styles.mainTitle}>19. Contact Information</p>
                            <p className={styles.subTitle}>19.1 Company Information</p>
                            <p className={styles.paragraph}>
                                ProducterHQ OÜ<br />
                                Registration Number: 16539847<br />
                                Address: Tiiu tn 12/322, Kesklinna linnaosa, 10135 Tallinn, Harju maakond, Estonia<br />
                                Website: <a href="https://mues.ai/" className="underline">https://mues.ai/</a><br />
                                Email: <a href="mailto:legal@mues.ai" className="underline">legal@mues.ai</a>
                            </p>

                            <p className={styles.subTitle}>19.2 Support</p>
                            <p className={styles.paragraph}>
                                For technical support or questions about the Services:<br />
                                Email: <a href="mailto:support@mues.ai" className="underline">support@mues.ai</a><br />
                                Website: <a href="https://mues.ai/contact" className="underline">https://mues.ai/contact</a>
                            </p>

                            <p className={styles.subTitle}>19.3 Legal Inquiries</p>
                            <p className={styles.paragraph}>
                                For legal matters or terms of service questions:<br />
                                Email: <a href="mailto:legal@mues.ai" className="underline">legal@mues.ai</a>
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
  
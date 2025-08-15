import Navbar from '../components/Navbar.js';
import { ArrowRightIcon } from '../utils/svgIcons';
import FAQ from '../components/FAQ.js';
import Footer from '../components/Footer.js';
import styles from './security.module.css';
import Link from 'next/link';
import HeadingBadge from '@/app/components/ui/HeadingBadge';
import H1 from '@/app/components/ui/H1';


export default function SecurityPolicy() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar variant="light" />
            <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18 '>

                {/* Main Hero Container */}
                <div className='w-full flex flex-col gap-6 mt-24 md:mt-[148px] mb-[120px] md:mb-[200px]'>

                    {/* Left - Right Arrow and LEGAL DOCUMENTS Badge */}
                    <div className='w-full flex flex-row justify-center md:justify-between items-center'>
                        
                        {/* LEFT ARROW - Privacy Policy */}
                        <Link href="/privacy-policy" className='w-fit flex-row items-center gap-2 cursor-pointer hidden md:flex'>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD' className='rotate-180'/>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Privacy Policy</span>
                        </Link>

                        {/* Badge - LEGAL DOCUMENTS */}
                        <HeadingBadge >
                            LEGAL DOCUMENTS
                        </HeadingBadge >

                        {/* RIGHT ARROW - Terms of Service */}
                        <Link href="/terms-of-service" className='w-fit flex-row items-center gap-2 cursor-pointer hidden md:flex'>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Terms of Service</span>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD'/>
                        </Link>
                    </div>

                    {/* Main Title */}
                    <H1>
                        Security Policy
                    </H1>

                    {/* Last Updated */}
                    <p className='text-[#474645] text-center
                    text-[14px] leading-[24px] tracking-[0.14px]
                    sm:text-[16px] sm:leading-[28px] sm:tracking-[0.16px]
                    lg:text-[20px] lg:leading-[36px] lg:tracking-[0.2px]'>
                    Last updated: July 11, 2025
                    </p>

                    {/* Left - Right Arrow and LEGAL DOCUMENTS Badge -- MOBILE görünüm - de alta geliyor*/}
                    <div className='w-full flex-row justify-around items-center mt-20 flex md:hidden'>
    
                        {/* LEFT ARROW - Privacy Policy */}
                        <Link href="/privacy-policy" className='w-fit flex-row items-center gap-2 cursor-pointer flex'>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD' className='rotate-180'/>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Privacy Policy</span>
                        </Link>

                        {/* RIGHT ARROW - Terms of Service */}
                        <Link href="/terms-of-service" className='w-fit flex-row items-center gap-2 cursor-pointer flex'>
                            <span className='text-[#DDD] font-rethinkSans 
                            text-[12px] leading-normal tracking-[0.12px]
                            sm:text-[14px] sm:leading-normal sm:tracking-[0.14px]
                            lg:text-[16px] lg:leading-normal lg:tracking-[0.16px]'>Terms of Service</span>
                            <ArrowRightIcon width={16} height={16} color='#DDDDDD'/>
                        </Link>
                    </div>

                </div>


                {/* Security Policy Content */}
                <div className='w-full max-w-[912px] mx-auto pb-[152px]'>
                    <h2 className='text-[#323232] mb-6
                    text-[20px] leading-[28px]
                    sm:text-[21px] sm:leading-[29px]
                    md:text-[22px] md:leading-[30px]
                    lg:text-[24px] lg:leading-[32px]'>
                    Acceptance of These Security Policy
                    </h2>

                    <span className='text-[#323232]'>
                        <div>
                            {/* Introduction */}
                            <h2 className={styles.mainTitle}>Introduction</h2>
                            <p className={styles.paragraph}>
                                Mues AI, operated by ProducterHQ OÜ, is committed to maintaining the highest standards of security and data protection for our agentic AI platform. This Security Policy outlines our comprehensive approach to protecting customer data, securing our infrastructure, and ensuring compliance with applicable regulations while delivering innovative AI-powered services that enable users to delegate tasks through natural language interaction.
                            </p>

                            {/* 1. Company Information and Governance */}
                            <h2 className={styles.mainTitle}>1. Company Information and Governance</h2>
                            
                            <h3 className={styles.subTitle}>1.1 Legal Entity</h3>
                            <div className={styles.bulletList}>
                                <p>Company: ProducterHQ OÜ</p>
                                <p>Registration Number: 16539847</p>
                                <p>Jurisdiction: Republic of Estonia</p>
                                <p>Address: Tiiu tn 12/322, Kesklinna linnaosa, 10135 Tallinn, Harju maakond, Estonia</p>
                                <p>Website: <a href="https://mues.ai/" className="underline">https://mues.ai/</a></p>
                            </div>

                            <h3 className={styles.subTitle}>1.2 Security Governance</h3>
                            <p className={styles.paragraph}>
                                Security at Mues AI is directed and maintained by our founding team, ensuring accountability at the highest organizational level. All team members undergo comprehensive security training during onboarding and participate in quarterly security awareness updates.
                            </p>

                            <h3 className={styles.subTitle}>1.3 Compliance Framework</h3>
                            <p className={styles.paragraph}>We maintain compliance with:</p>
                            <div className={styles.bulletList}>
                                <p>• General Data Protection Regulation (GDPR)</p>
                                <p>• Estonian Personal Data Protection Act</p>
                                <p>• Estonian Cybersecurity Act</p>
                                <p>• SOC 2 Type II (planned certification)</p>
                                <p>• ISO 27001 (planned certification)</p>
                            </div>

                            {/* 2. Infrastructure Security */}
                            <h2 className={styles.mainTitle}>2. Infrastructure Security</h2>

                            <h3 className={styles.subTitle}>2.1 Cloud Infrastructure</h3>
                            <div className={styles.bulletList}>
                                <p>• Primary Cloud Provider: Amazon Web Services (AWS Lightsail)</p>
                                <p>• Data Center Locations: European Union regions exclusively</p>
                                <p>• Primary Regions: eu-west-3 (Paris), eu-central-1 (Frankfurt)</p>
                                <p>• Compliance: AWS maintains SOC 2/3, ISO 27001, and GDPR compliance</p>
                            </div>

                            <h3 className={styles.subTitle}>2.2 Physical Security</h3>
                            <p className={styles.paragraph}>Our infrastructure benefits from AWS&apos;s enterprise-grade physical security measures:</p>
                            <div className={styles.bulletList}>
                                <p>• Access Control: Multi-layered biometric and card-based access systems</p>
                                <p>• Monitoring: 24/7 security personnel and surveillance</p>
                                <p>• Environmental Controls: Climate control, fire suppression, and power redundancy</p>
                                <p>• Compliance: AWS facilities maintain ISO 27001 and SOC 2 certifications</p>
                            </div>

                            <h3 className={styles.subTitle}>2.3 Network Security</h3>
                            <div className={styles.bulletList}>
                                <p>• Architecture: Zero-trust network model with micro-segmentation</p>
                                <p>• Encryption: All network traffic encrypted using TLS 1.3</p>
                                <p>• Firewalls: Web Application Firewall (WAF) and Network Access Control Lists</p>
                                <p>• Monitoring: Real-time network traffic analysis and intrusion detection</p>
                            </div>

                            {/* 3. Data Security and Protection */}
                            <h2 className={styles.mainTitle}>3. Data Security and Protection</h2>

                            <h3 className={styles.subTitle}>3.1 Data Classification</h3>
                            <p className={styles.paragraph}>We classify data into four categories:</p>
                            <div className={styles.bulletList}>
                                <p>• Public: Marketing materials, public documentation</p>
                                <p>• Internal: Business operations, non-sensitive communications</p>
                                <p>• Confidential: Customer data, conversation logs, usage analytics</p>
                                <p>• Restricted: Authentication credentials, encryption keys, financial data</p>
                            </div>

                            <h3 className={styles.subTitle}>3.2 Encryption Standards</h3>
                            <p className={styles.paragraph}>Data at Rest:</p>
                            <div className={styles.bulletList}>
                                <p>• AES256 encryption for all stored data</p>
                                <p>• Database-level encryption with automated key management</p>
                                <p>• Object storage encryption using server-side encryption</p>
                                <p>• Regular encryption key rotation (quarterly)</p>
                            </div>

                            <p className={styles.paragraph}>Data in Transit:</p>
                            <div className={styles.bulletList}>
                                <p>• TLS 1.3 for all external communications</p>
                                <p>• Certificate pinning for mobile applications</p>
                                <p>• Perfect Forward Secrecy (PFS) implementation</p>
                                <p>• Rejection of connections using TLS below 1.2</p>
                            </div>

                            <h3 className={styles.subTitle}>3.3 Data Storage Architecture</h3>
                            <p className={styles.paragraph}>Databases:</p>
                            <div className={styles.bulletList}>
                                <p>• Managed database services with automated backups</p>
                                <p>• Point-in-time recovery capabilities</p>
                                <p>• Database activity monitoring and logging</p>
                            </div>

                            <p className={styles.paragraph}>Object Storage:</p>
                            <div className={styles.bulletList}>
                                <p>• Secure object storage with versioning enabled</p>
                                <p>• Cross-region replication for disaster recovery</p>
                                <p>• Lifecycle policies for automated data management</p>
                                <p>• Access logging and monitoring</p>
                            </div>

                            {/* 4. AI-Specific Security Measures */}
                            <h2 className={styles.mainTitle}>4. AI-Specific Security Measures</h2>

                            <h3 className={styles.subTitle}>4.1 AI Service Providers</h3>
                            <p className={styles.paragraph}>We utilize multiple AI service providers with appropriate security controls:</p>

                            <p className={styles.paragraph}>OpenAI:</p>
                            <div className={styles.bulletList}>
                                <p>• Enterprise-grade API access with dedicated capacity</p>
                                <p>• Data processing agreements compliant with GDPR</p>
                                <p>• Zero data retention for API calls</p>
                                <p>• Content filtering and safety measures</p>
                            </div>

                            <p className={styles.paragraph}>Anthropic:</p>
                            <div className={styles.bulletList}>
                                <p>• Constitutional AI with built-in safety measures</p>
                                <p>• Enterprise privacy controls</p>
                                <p>• Real-time content moderation</p>
                                <p>• Secure API integration</p>
                            </div>

                            <p className={styles.paragraph}>Google Gemini:</p>
                            <div className={styles.bulletList}>
                                <p>• Google Cloud AI with enterprise security</p>
                                <p>• Data residency controls within EU</p>
                                <p>• Advanced threat protection</p>
                                <p>• Compliance with Google&apos;s AI principles</p>
                            </div>

                            <h3 className={styles.subTitle}>4.2 AI Agent Security</h3>
                            <p className={styles.paragraph}>Input Validation:</p>
                            <div className={styles.bulletList}>
                                <p>• Comprehensive input sanitization and validation</p>
                                <p>• Protection against prompt injection attacks</p>
                                <p>• Content filtering for malicious inputs</p>
                                <p>• Rate limiting and abuse detection</p>
                            </div>

                            <p className={styles.paragraph}>Output Monitoring:</p>
                            <div className={styles.bulletList}>
                                <p>• Real-time output analysis for harmful content</p>
                                <p>• Automated content filtering and moderation</p>
                                <p>• Human oversight for sensitive operations</p>
                                <p>• Audit trails for all AI interactions</p>
                            </div>

                            <p className={styles.paragraph}>Model Security:</p>
                            <div className={styles.bulletList}>
                                <p>• Secure model deployment and versioning</p>
                                <p>• Protection against model extraction attacks</p>
                                <p>• Regular security assessments of AI components</p>
                                <p>• Isolation of AI processing environments</p>
                            </div>

                            {/* 5. Access Control and Authentication */}
                            <h2 className={styles.mainTitle}>5. Access Control and Authentication</h2>

                            <h3 className={styles.subTitle}>5.1 User Authentication</h3>
                            <p className={styles.paragraph}>Multi-Factor Authentication:</p>
                            <div className={styles.bulletList}>
                                <p>• Mandatory for all user accounts</p>
                                <p>• Support for TOTP, SMS, and hardware tokens</p>
                                <p>• Biometric authentication for mobile applications</p>
                                <p>• Session management with automatic timeout</p>
                            </div>

                            <p className={styles.paragraph}>Single Sign-On (SSO):</p>
                            <div className={styles.bulletList}>
                                <p>• OAuth 2.0 integration with Google and GitHub</p>
                                <p>• SAML 2.0 support for enterprise customers</p>
                                <p>• Just-in-time (JIT) user provisioning</p>
                                <p>• Centralized access management</p>
                            </div>

                            <h3 className={styles.subTitle}>5.2 Administrative Access</h3>
                            <p className={styles.paragraph}>Principle of Least Privilege:</p>
                            <div className={styles.bulletList}>
                                <p>• Role-based access control (RBAC)</p>
                                <p>• Time-limited administrative access</p>
                                <p>• Regular access reviews and certification</p>
                                <p>• Automated deprovisioning for terminated employees</p>
                            </div>

                            <p className={styles.paragraph}>Privileged Access Management:</p>
                            <div className={styles.bulletList}>
                                <p>• Secure bastion hosts for infrastructure access</p>
                                <p>• Session recording and monitoring</p>
                                <p>• Break-glass procedures for emergency access</p>
                                <p>• Multi-person authorization for critical operations</p>
                            </div>

                            {/* 6. Application Security */}
                            <h2 className={styles.mainTitle}>6. Application Security</h2>

                            <h3 className={styles.subTitle}>6.1 Secure Development Lifecycle</h3>
                            <p className={styles.paragraph}>Development Practices:</p>
                            <div className={styles.bulletList}>
                                <p>• Secure coding standards and guidelines</p>
                                <p>• Static Application Security Testing (SAST)</p>
                                <p>• Dynamic Application Security Testing (DAST)</p>
                                <p>• Dependency scanning and vulnerability management</p>
                            </div>

                            <p className={styles.paragraph}>Environment Separation:</p>
                            <div className={styles.bulletList}>
                                <p>• Isolated development, staging, and production environments</p>
                                <p>• Data masking in non-production environments</p>
                                <p>• Separate encryption keys per environment</p>
                                <p>• Controlled promotion processes</p>
                            </div>

                            <h3 className={styles.subTitle}>6.2 Code Integration Security</h3>
                            <p className={styles.paragraph}>Script Integration:</p>
                            <div className={styles.bulletList}>
                                <p>• Secure JavaScript SDK with Content Security Policy (CSP)</p>
                                <p>• Subresource Integrity (SRI) for script validation</p>
                                <p>• Cross-Origin Resource Sharing (CORS) controls</p>
                                <p>• Regular security updates and patching</p>
                            </div>

                            <p className={styles.paragraph}>API Security:</p>
                            <div className={styles.bulletList}>
                                <p>• OAuth 2.0 with PKCE for API authentication</p>
                                <p>• Rate limiting and throttling</p>
                                <p>• Input validation and output encoding</p>
                                <p>• API gateway with security policies</p>
                            </div>

                            {/* 7. Monitoring and Incident Response */}
                            <h2 className={styles.mainTitle}>7. Monitoring and Incident Response</h2>

                            <h3 className={styles.subTitle}>7.1 Security Monitoring</h3>
                            <p className={styles.paragraph}>Real-Time Monitoring:</p>
                            <div className={styles.bulletList}>
                                <p>• Security Information and Event Management (SIEM)</p>
                                <p>• Automated threat detection and alerting</p>
                                <p>• User behavior analytics (UBA)</p>
                                <p>• Infrastructure monitoring and alerting</p>
                            </div>

                            <p className={styles.paragraph}>Logging and Auditing:</p>
                            <div className={styles.bulletList}>
                                <p>• Comprehensive audit logs for all system activities</p>
                                <p>• Centralized log management and analysis</p>
                                <p>• Log integrity protection and retention</p>
                                <p>• Regular log review and analysis</p>
                            </div>

                            <h3 className={styles.subTitle}>7.2 Incident Response</h3>
                            <p className={styles.paragraph}>Response Team:</p>
                            <div className={styles.bulletList}>
                                <p>• Dedicated incident response team</p>
                                <p>• 24/7 security operations center (SOC)</p>
                                <p>• Escalation procedures and communication plans</p>
                                <p>• Regular incident response training and drills</p>
                            </div>

                            <p className={styles.paragraph}>Response Procedures:</p>
                            <div className={styles.bulletList}>
                                <p>• Incident classification and prioritization</p>
                                <p>• Containment and eradication procedures</p>
                                <p>• Recovery and post-incident analysis</p>
                                <p>• Regulatory notification requirements</p>
                            </div>

                            {/* 8. Business Continuity and Disaster Recovery */}
                            <h2 className={styles.mainTitle}>8. Business Continuity and Disaster Recovery</h2>

                            <h3 className={styles.subTitle}>8.1 High Availability</h3>
                            <p className={styles.paragraph}>Infrastructure Redundancy:</p>
                            <div className={styles.bulletList}>
                                <p>• Multi-Availability Zone deployment</p>
                                <p>• Auto-scaling and load balancing</p>
                                <p>• Database clustering and replication</p>
                                <p>• Content delivery network (CDN) integration</p>
                            </div>

                            <p className={styles.paragraph}>Service Continuity:</p>
                            <div className={styles.bulletList}>
                                <p>• 99.9% uptime service level agreement</p>
                                <p>• Automated failover procedures</p>
                                <p>• Regular maintenance windows with advance notice</p>
                                <p>• Performance monitoring and optimization</p>
                            </div>

                            <h3 className={styles.subTitle}>8.2 Backup and Recovery</h3>
                            <p className={styles.paragraph}>Backup Strategy:</p>
                            <div className={styles.bulletList}>
                                <p>• Automated daily backups with retention policies</p>
                                <p>• Cross-region backup replication</p>
                                <p>• Point-in-time recovery capabilities</p>
                                <p>• Regular backup testing and validation</p>
                            </div>

                            <p className={styles.paragraph}>Disaster Recovery:</p>
                            <div className={styles.bulletList}>
                                <p>• Recovery Time Objective (RTO): 4 hours</p>
                                <p>• Recovery Point Objective (RPO): 1 hour</p>
                                <p>• Documented recovery procedures</p>
                                <p>• Annual disaster recovery testing</p>
                            </div>

                            {/* 9. Third-Party Security */}
                            <h2 className={styles.mainTitle}>9. Third-Party Security</h2>

                            <h3 className={styles.subTitle}>9.1 Vendor Management</h3>
                            <p className={styles.paragraph}>Due Diligence:</p>
                            <div className={styles.bulletList}>
                                <p>• Security assessments for all vendors</p>
                                <p>• Contractual security requirements</p>
                                <p>• Regular vendor security reviews</p>
                                <p>• Incident notification procedures</p>
                            </div>

                            <p className={styles.paragraph}>Key Vendors:</p>
                            <div className={styles.bulletList}>
                                <p>• Stripe: PCI DSS compliant payment processing</p>
                                <p>• AWS: SOC 2/3 and ISO 27001 certified infrastructure</p>
                                <p>• AI Providers: Enterprise-grade security and privacy controls</p>
                            </div>

                            <h3 className={styles.subTitle}>9.2 Data Processing Agreements</h3>
                            <p className={styles.paragraph}>All third-party processors are bound by:</p>
                            <div className={styles.bulletList}>
                                <p>• GDPR-compliant data processing agreements</p>
                                <p>• Standard contractual clauses for international transfers</p>
                                <p>• Security and confidentiality obligations</p>
                                <p>• Incident notification requirements</p>
                            </div>

                            {/* 10. Compliance and Certifications */}
                            <h2 className={styles.mainTitle}>10. Compliance and Certifications</h2>

                            <h3 className={styles.subTitle}>10.1 Current Compliance Status</h3>
                            <p className={styles.paragraph}>Regulatory Compliance:</p>
                            <div className={styles.bulletList}>
                                <p>• GDPR compliance with documented procedures</p>
                                <p>• Estonian data protection law compliance</p>
                                <p>• EU-US Data Privacy Framework participation</p>
                                <p>• Regular compliance audits and assessments</p>
                            </div>

                            <h3 className={styles.subTitle}>10.2 Certification Roadmap</h3>
                            <p className={styles.paragraph}>Planned Certifications:</p>
                            <div className={styles.bulletList}>
                                <p>• SOC 2 Type II: Q4 2025</p>
                                <p>• ISO 27001: Q2 2026</p>
                                <p>• ISO 27017: Q4 2026 (Cloud Security)</p>
                                <p>• ISO 27018: Q4 2026 (Cloud Privacy)</p>
                            </div>

                            {/* 11. Security Training and Awareness */}
                            <h2 className={styles.mainTitle}>11. Security Training and Awareness</h2>

                            <h3 className={styles.subTitle}>11.1 Employee Training</h3>
                            <p className={styles.paragraph}>Security Awareness:</p>
                            <div className={styles.bulletList}>
                                <p>• Mandatory security training for all employees</p>
                                <p>• Quarterly security updates and refreshers</p>
                                <p>• Phishing simulation and testing</p>
                                <p>• Incident response training</p>
                            </div>

                            <p className={styles.paragraph}>Role-Specific Training:</p>
                            <div className={styles.bulletList}>
                                <p>• Secure development training for engineers</p>
                                <p>• Privacy training for customer-facing staff</p>
                                <p>• Compliance training for management</p>
                                <p>• AI ethics and safety training</p>
                            </div>

                            <h3 className={styles.subTitle}>11.2 Customer Education</h3>
                            <p className={styles.paragraph}>Security Best Practices:</p>
                            <div className={styles.bulletList}>
                                <p>• Security documentation and guidelines</p>
                                <p>• Best practices for AI agent usage</p>
                                <p>• Regular security webinars and updates</p>
                                <p>• Incident notification and response guidance</p>
                            </div>

                            {/* 12. Contact Information */}
                            <h2 className={styles.mainTitle}>12. Contact Information</h2>

                            <h3 className={styles.subTitle}>12.1 Security Contacts</h3>
                            <p className={styles.paragraph}>Security Team:</p>
                            <div className={styles.bulletList}>
                                <p>• Email: <a href="mailto:security@mues.ai" className="underline">security@mues.ai</a></p>
                                <p>• Response Time: 24 hours for security inquiries</p>
                                <p>• Emergency: <a href="mailto:security-emergency@mues.ai" className="underline">security-emergency@mues.ai</a></p>
                            </div>

                            <h3 className={styles.subTitle}>12.2 Reporting Security Issues</h3>
                            <p className={styles.paragraph}>Vulnerability Disclosure:</p>
                            <div className={styles.bulletList}>
                                <p>• Responsible disclosure program</p>
                                <p>• Email: <a href="mailto:security@mues.ai" className="underline">security@mues.ai</a></p>
                                <p>• Acknowledgment within 24 hours</p>
                                <p>• Regular updates on remediation progress</p>
                            </div>

                            {/* 13. Policy Updates */}
                            <h2 className={styles.mainTitle}>13. Policy Updates</h2>
                            <p className={styles.paragraph}>
                                This Security Policy is reviewed annually and updated as necessary to reflect changes in our security posture, regulatory requirements, and industry best practices. Users will be notified of material changes through email and in-app notifications.
                            </p>
                            <p className={styles.paragraph}>
                                Next Review Date: July 2026
                            </p>
                            <p className={styles.paragraph}>
                                This Security Policy demonstrates Mues AI&apos;s commitment to protecting customer data and maintaining the highest security standards while delivering innovative agentic AI services. For questions about this policy or our security practices, please contact <a href="mailto:security@mues.ai" className="underline">security@mues.ai</a>.
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
  
import Navbar from '../components/Navbar';
import CorneredLine from '../components/CorneredLine';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />

      {/* Contact Content */}
      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>
        
        {/* Contact Header Section */}
        <div className="relative py-12 md:py-16 lg:py-24">
          
          {/* Contact us / FAQ breadcrumb */}
          <div className="mb-8 md:mb-12">
            <p className="text-[#616161] text-sm font-normal">
              Contact us / FAQ
            </p>
          </div>

          {/* GET SUPPORT label */}
          <div className="mb-6 md:mb-8">
            <p className="text-[#AAA] text-sm font-normal tracking-wide uppercase">
              GET SUPPORT
            </p>
          </div>

          {/* Main heading */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-[#17181A] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Contact us.
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-[#616161] text-lg md:text-xl leading-relaxed">
              Mues is an agentic AI that lets your users delegate any task to an AI agent using human language in your product.
            </p>
          </div>

          {/* Contact us link/button */}
          <div className="text-center mb-16 md:mb-20">
            <a 
              href="mailto:hi@mues.ai" 
              className="inline-flex items-center gap-2 text-[#17181A] text-lg font-medium hover:text-[#616161] transition-colors"
            >
              Contact us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#AAA]">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Contact Options Section - placeholder for the sections shown in image */}
        <div className="relative w-full max-w-[1512px] h-auto mx-auto p-6 md:p-10 lg:p-16 ">

          <CorneredLine />
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Support Section */}
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#F8F8F8] rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4">
                  {/* Support icon placeholder */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#616161]">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#17181A] text-xl md:text-2xl font-bold mb-3">
                  Reach out to Support team.
                </h3>
                <p className="text-[#616161] text-base mb-6">
                  Get help from the community. If you're on a paid plan, submit a ticket to our support team.
                </p>
                <button className="bg-[#17181A] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#2a2b2d] transition-colors">
                  Get support →
                </button>
              </div>
            </div>

            {/* Sales Section */}
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#F8F8F8] rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4">
                  {/* Sales icon placeholder */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#616161]">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#17181A] text-xl md:text-2xl font-bold mb-3">
                  Talk to our Sales team.
                </h3>
                <p className="text-[#616161] text-base mb-6">
                  Discuss your requirements, learn about custom pricing, or request a demonstration.
                </p>
                <button className="bg-[#17181A] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#2a2b2d] transition-colors">
                  Contact sales →
                </button>
              </div>
            </div>

          </div>

            {/* Additional Resources Section - placeholder for bottom sections */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Documentation */}
            <div className="text-center md:text-left">
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#F8F8F8] rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#616161]">
                    <path d="M4 4h12v12H4V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8h4M8 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-[#17181A] text-lg font-bold mb-2">
                  Read documentation
                </h4>
                <p className="text-[#616161] text-sm mb-4">
                  Find answers and inspiration on all things Mues AI.
                </p>
                <button className="text-[#17181A] text-sm font-medium hover:text-[#616161] transition-colors">
                  Mues AI Docs
                </button>
              </div>
            </div>

            {/* Social */}
            <div className="text-center md:text-left">
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#F8F8F8] rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#616161]">
                    <path d="M18 2L2 8.5L9 11.5L12 18.5L18 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-[#17181A] text-lg font-bold mb-2">
                  Follow us on X
                </h4>
                <p className="text-[#616161] text-sm mb-4">
                  Get Mues AI news, company information, and media resources.
                </p>
                <button className="text-[#17181A] text-sm font-medium hover:text-[#616161] transition-colors">
                  Follow @mues_ai
                </button>
              </div>
            </div>

            {/* Community */}
            <div className="text-center md:text-left">
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#F8F8F8] rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#616161]">
                    <path d="M14 7c0-2.2-1.8-4-4-4S6 4.8 6 7s1.8 4 4 4 4-1.8 4-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 18c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-[#17181A] text-lg font-bold mb-2">
                  Join Mues Friends
                </h4>
                <p className="text-[#616161] text-sm mb-4">
                  For AI related discussions, join our Discord community.
                </p>
                <button className="text-[#17181A] text-sm font-medium hover:text-[#616161] transition-colors">
                  Join our community
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

import Image from 'next/image';

// Modular Benefit Card Component
function BenefitCard({ bgColor, title, description, imageSrc, imageWidth, imageHeight, imageAlt, textColor, subtextColor, className }) {
  return (
    <div className={`flex flex-col sm:flex-row lg:inline-flex w-full lg:w-1/2 h-auto lg:h-full p-6 md:p-4 md:pe-0 lg:p-0 ${bgColor} rounded-2xl justify-start sm:justify-between items-center lg:pl-10 gap-5 transition-all group overflow-hidden`}>
      <div className="inline-flex flex-col justify-center items-start gap-2 lg:gap-3 relative top-[-1px]">

        <div className="inline-flex justify-center items-center gap-2">

          <div className={`${textColor} font-rethinkSans font-semibold leading-[30px] 
          text-[20px] tracking-[0.2px]
          lg:text-[24px] lg:tracking-[0.24px]`}>
            {title}
          </div>

        </div>

        <div className={`${subtextColor} text-[16px] font-light leading-[20px]`}>
          {description}
        </div>

      </div>       

      <div className='w-[170px] flex justify-center lg:h-full lg:w-auto self-center md:self-end relative -bottom-6 sm:bottom-0 md:-bottom-4 lg:bottom-0 lg:self-end rounded-2xl '>
        <Image 
          quality={100} 
          loading='lazy' 
          unoptimized 
          src={imageSrc} 
          alt={imageAlt} 
          width={imageWidth} 
          height={imageHeight}
          className={`rounded-2xl ${className}`}
        />
      </div>

    </div>
  );
}

export default function FooterTopTwoBenefit() {
  return (
    <div className="max-w-[1168px] lg:h-37 flex flex-col md:flex-row gap-4 md:gap-6 mx-auto">

      <BenefitCard 
        bgColor="bg-[#1A1A1A]"
        title="Benefits for your product"
        description="Increased product adoption and onboarding"
        imageSrc="/CommentsFAQ/images/faqBottomImage1.webp"
        imageWidth={170}
        imageHeight={140}
        imageAlt="benefits-for-product"
        textColor="text-white"
        subtextColor="text-[#DDD]"  
        className="object-cover"
      />

      <BenefitCard 
        bgColor="bg-[#F8F8F8]"
        title="Benefits for your users"
        description="Less support need with powerful experience"
        imageSrc="/CommentsFAQ/images/faqBottomImage2.webp"
        imageWidth={180}
        imageHeight={160}
        imageAlt="benefits-for-users"
        textColor="text-primary-black"
        subtextColor="text-[#777]"
        className="object-contain lg:scale-110 -rotate-7"
      />

    </div>
  );
}

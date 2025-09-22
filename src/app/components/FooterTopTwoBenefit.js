import Image from 'next/image';

const variants = {
  light: {
    firstCard: {
      bgColor: "bg-[#07090B]",
      textColor: "text-white",
      subtextColor: "text-[#DDD]"
    },
    secondCard: {
      bgColor: "bg-[#F8F8F8]",
      textColor: "text-primary-black",
      subtextColor: "text-[#777]"
    }
  },
  dark: {
    firstCard: {
      bgColor: "bg-[#F8F8F8]/[0.05]",
      textColor: "text-[#FFF]",
      subtextColor: "text-[#DDD]"
    },
    secondCard: {
      bgColor: "bg-[#F8F8F8]/[0.05]",
      textColor: "text-[#FFF]",
      subtextColor: "text-[#777]"
    }
  }
};

function BenefitCard({ variant = 'light', isFirstCard, title, description, imageSrc, imageWidth, imageHeight, imageAlt, className }) {
  const theme = variants[variant][isFirstCard ? 'firstCard' : 'secondCard'];
  return (
    <div className={`flex flex-col min-h-37 sm:max-h-37 sm:flex-row lg:inline-flex w-full lg:w-1/2 h-auto lg:h-full p-6 md:p-4 md:pe-0 lg:p-0 ${theme.bgColor} rounded-2xl justify-start sm:justify-between items-center lg:pl-10 gap-5 transition-all group overflow-hidden`}>
      <div className="inline-flex flex-col justify-center items-start gap-2 lg:gap-3 relative top-[-1px]">

        <h5 className={`${theme.textColor} font-rethinkSans font-semibold leading-[30px] 
        text-[20px] tracking-[0.2px]
        lg:text-[24px] lg:tracking-[0.24px]`}>
          {title}
        </h5>

        <p className={`${theme.subtextColor} text-[16px] font-light leading-[20px]`}>
          {description}
        </p>

      </div>       

      <div className='flex justify-center items-center lg:h-full lg:w-auto'>
        <Image 
          loading='lazy' 
          unoptimized 
          src={imageSrc} 
          alt={imageAlt} 
          width={imageWidth} 
          height={imageHeight}
          className={`${className}`}
        />
      </div>

    </div>
  );
}

export default function FooterTopTwoBenefit({ variant = 'light' }) {
  return (
    <div className="max-w-[1168px] lg:h-37 flex flex-col min-[940px]:flex-row gap-4 md:gap-6 mx-auto">

      <BenefitCard 
        variant={variant}
        isFirstCard={true}
        title="Benefits for your product"
        description="Increased product adoption and onboarding"
        imageSrc="/CommentsFAQ/images/faqBottomImage1.webp"
        imageWidth={179}
        imageHeight={88}
        imageAlt="benefits-for-product"
        className="object-contain"
      />

      <BenefitCard 
        variant={variant}
        isFirstCard={false}
        title="Benefits for your users"
        description="Less support need with powerful experience"
        imageSrc="/CommentsFAQ/images/faqBottomImage2.webp"
        imageWidth={180}
        imageHeight={160}
        imageAlt="benefits-for-users"
        className="object-contain lg:scale-110 -rotate-7"
      />

    </div>
  );
}
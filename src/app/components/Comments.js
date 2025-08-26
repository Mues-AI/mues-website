import Image from 'next/image';
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal"],
  fontFamily: "Fraunces, serif",
  display: 'swap',
  preload: false,
});

function CommentItem({ text, avatarSrc, name, title }) {
  return (
    <div className={`${fraunces.variable} flex-1 max-w-[434px] h-auto lg:h-full flex flex-col justify-between items-center gap-8 lg:gap-12 `}>
      {/* Testimonial Text */}
      <p className="w-full text-[#171717] text-center font-Fraunces font-normal tracking-[-0.1px] text-[18px] leading-[30px] lg:text-[20px] lg:leading-[28px]">
        {text}
      </p>

      {/* Avatar and Info */}
      <div className="inline-flex flex-col items-center gap-4">
        {/* Avatar */}
        <Image quality={100} loading='lazy' unoptimized src={avatarSrc} alt={`${name} avatar`} width={48} height={48} className="rounded-full" />
 
        {/* Name and Title */}
        <div className="flex flex-col items-center">
          <p className="text-[#171717] text-center text-[14px] font-normal leading-[20px]">
            {name}
          </p>
          <p className="text-[rgba(23,23,23,0.60)] text-center text-[13px] font-light leading-[20px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

const commentsData = [
  {
    text: "Implementing Mues as our AI companion has reduced customer support tickets by 40% and improved user activation rates. It's  like having an expert product guide available 24/7, allowing our team to focus on building new features rather than explaining existing ones.",
    avatarSrc: "/CommentsFAQ/images/commentsAvatar1.webp",
    name: "Sarah Kendrick",
    title: "Principal PM, Plaid"
  },
  {
    text: "Mues doesn't just answer user questions - it proactively guides them through complex workflows. Our product adoption metrics have improved across all segments while creating a more intuitive and unique experience.",
    avatarSrc: "/CommentsFAQ/images/commentsAvatar2.webp",
    name: "Daniel Mehta",
    title: "Head of Product, Bright"
  }
];

export default function Comments() {

    return (
      <div className="w-full max-w-[1120px] md:max-w-[1088px] lg:max-w-[1296px] h-auto lg:h-[330px] 
      flex flex-col lg:flex-row justify-evenly items-center
      gap-12 lg:gap-x-[clamp(48px,48px,96px)]
      mt-[112px] md:mt-44 lg:mt-[220px] mx-auto mb-24 md:mb-32 lg:mb-[148px] px-6 md:px-10 lg:px-16">

        <CommentItem 
          text={commentsData[0].text}
          avatarSrc={commentsData[0].avatarSrc}
          name={commentsData[0].name}
          title={commentsData[0].title}
        />

        <div className="w-4/5 h-[1px] lg:w-[1px] lg:h-[240px] bg-[#EBEBEB] self-center"></div>

        <CommentItem 
          text={commentsData[1].text}
          avatarSrc={commentsData[1].avatarSrc}
          name={commentsData[1].name}
          title={commentsData[1].title}
        />

      </div>
    );
  }
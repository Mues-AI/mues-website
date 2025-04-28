import Image from 'next/image';

export default function Comments() {
    return (
      // !yükselik değiş ileride
      // Main row - div
      <div className="w-[1072px] h-[330px]  mt-[220px] mx-auto mb-[148px] flex flex-row justify-center gap-x-24 ">

        {/* 1. Main element */}
        <div className="flex-1 h-auto inline-flex flex-col justify-between items-center">
          {/* 1.1: Text */}
          <p className="w-[434px] text-[#171717] text-center font-Fraunces text-[20px] font-normal leading-[30px] tracking-[-0.1px]">
          Implementing Mues as our AI companion has reduced customer support tickets by 40% and improved user activation rates. It's like having an expert product guide available 24/7, allowing our team to focus on building new features rather than explaining existing ones.
          </p>

          {/* 2 */}
          <div className="inline-flex flex-col items-center gap-[16px]">

            {/* 2.1.SVG */}
            <Image quality={100} loading='lazy' unoptimized src="/CommentsFAQ/images/commentsAvatar1.webp" alt="Avatar 1" width={48} height={48}className="rounded-full"  />
 
            {/* 2.2Text */}
            <div className="flex flex-col items-center">
              <p className="text-[#171717] text-center text-[14px] font-normal leading-[20px]">
                Sarah Kendrick
              </p>
              <p className="text-[rgba(23,23,23,0.60)] text-center text-[13px] font-light leading-[20px]">
                Principal PM, Plaid
              </p>
            </div>

          </div>

        </div>

        <div className="w-[1px] h-[240px] bg-[#EBEBEB] mx-auto self-center"></div>

        {/* 2. Main element */}
        <div className="flex-1 h-auto inline-flex flex-col justify-between items-center">
          {/* 1.1: Text */}
          <p className="w-[434px] text-[#171717] text-center font-Fraunces text-[20px] font-normal leading-[28px] tracking-[-0.1px]">
          Mues doesn't just answer user questions - it proactively guides them through complex workflows. Our product adoption metrics have improved across all segments while creating a more intuitive and unique experience.
          </p>

          {/* 2 */}
          <div className="inline-flex flex-col items-center gap-[16px]">

            {/* 2.1.SVG */} 
            <Image quality={100} loading='lazy' unoptimized src="/CommentsFAQ/images/commentsAvatar2.webp" alt="Avatar 2" width={48} height={48}className="rounded-full"  />

            {/* 2.2Text */}
            <div className="flex flex-col items-center">
              <p className="text-[#171717] text-center text-[14px] font-normal leading-[20px]">
              Daniel Mehta
              </p>
              <p className="text-[rgba(23,23,23,0.60)] text-center text-[13px] font-light leading-[20px]">
              Head of Product, Bright
              </p>
            </div>

          </div>

        </div>


      </div>
    );
  }
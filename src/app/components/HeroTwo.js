import Image from 'next/image';

export default function HeroTwo() {
    return (
    <div
      className="w-full h-[860px] lg:h-[750px] bg-center bg-cover"
      style={{
        backgroundImage: `
          -webkit-image-set(
            url('/images/bghero2-1512.webp') 1x,
            url('/images/bghero2-2560.webp') 2x,
            url('/images/bghero2-2560.webp') 3x
          ),
          image-set(
            url('/images/bghero2-1512.webp') 1x,
            url('/images/bghero2-2560.webp') 2x,
            url('/images/bghero2-2560.webp') 3x
          )
        `
      }}
    >
        {/* Ana Flex Container */}
        <div className="w-full h-full flex flex-col justify-between pt-12 pb-6 lg:pt-0 lg:pb-0 lg:flex-row items-center">

            {/* Sol Div */}
            <div className="w-full flex justify-center px-6 lg:px-0 lg:w-1/2 lg:pl-[124px]">
                
                <div className='flex flex-col gap-4 lg:gap-6 w-full lg:w-[322px]'>
                    {/* İçerik 1 */}
                    <div className="flex justify-center items-center px-3 py-2 rounded-xl border border-[rgba(255,255,255,0.25)] w-fit">
                        <p className="text-[rgba(255,255,255,0.75)] text-center text-[14px] font-normal leading-[17px]">
                        SECURITY                    
                        </p>            
                    </div>
                    {/* İçerik 2 */}
                    <h3 className="text-white font-rethinkSans text-[30px] font-normal leading-[40px] tracking-[0.3px] lg:text-[56px] lg:leading-[68px] lg:tracking-[0.56px]">
                    Blinded and compliant.
                    </h3>

                    {/* İçerik 3 */}
                    <p className="text-[#DDD] font-light tracking-[-0.3px] text-[18px] lg:text-[22px] leading-[32px] lg:leading-[38px]">
                    We design with data privacy, information security, and legal compliance at the very top of our priorities.
                    </p>
                </div>

            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 min-w-[360px] min-h-[360px] px-4 lg:px-0 flex justify-center items-center lg:relative lg:top-1.25 lg:left-[74px] ">
                <Image quality={100} loading='lazy' unoptimized src="/images/bghore2-pieces.webp" alt="gdpr-soc2-iso-safeData" width={360} height={360} className="object-cover " />
            </div>

        </div>
    </div>
    );
  }
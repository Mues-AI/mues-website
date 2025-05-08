import Image from 'next/image';

export default function HeroTwo() {
    return (
    <div
      className="w-full h-[750px] bg-cover bg-center "
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
        <div className="w-full h-full flex flex-row items-center">

            {/* Sol Div */}
            <div className="w-1/2 pl-[124px]">
                
                <div className='flex flex-col gap-6 w-[322px]'>
                    {/* İçerik 1 */}
                    <div className="flex justify-center items-center px-3 py-2 rounded-xl border border-[rgba(255,255,255,0.25)] w-fit">
                        <p className="text-[rgba(255,255,255,0.75)] text-center text-[14px] font-normal leading-[17px]">
                        SECURITY                    
                        </p>            
                    </div>
                    {/* İçerik 2 */}
                    <h3 className="text-white font-rethinkSans text-[56px] font-semibold leading-[68px] tracking-[0.56px]">
                    Blinded and compliant.
                    </h3>

                    {/* İçerik 3 */}
                    <p className="text-[#DDD] text-[22px] font-light leading-[38px] tracking-[-0.3px]">
                    We design with data privacy, information security, and legal compliance at the very top of our priorities.
                    </p>
                </div>

            </div>

            {/* Sağ Div */}
            <div className="flex justify-end items-center relative top-1.25 w-1/2 pr-[124px] ">
                <Image quality={100} loading='lazy' unoptimized src="/images/bghore2-pieces.webp" alt="gdpr-soc2-iso-safeData" width={360} height={360} className="object-contain" />
            </div>

        </div>
    </div>
    );
  }
import Image from 'next/image';
import CorneredLine from './CorneredLine.js';

export default function UserCursorCornered() {
    return (
        <div className="relative w-full max-w-[1512px] mx-auto p-3 sm:p-12 lg:p-24">

        <CorneredLine/>

        {/* İçerik (örnek resim veya div) */}
        <div className="relative z-20 w-full h-full mx-auto ">
          <Image quality={100} loading='lazy' unoptimized
            src="/images/userCursor.webp" 
            alt="User Cursor Photo" 
            width={1174} 
            height={665} 
            className="w-full h-auto object-contain drop-shadow-
            [0px_0px_4px_rgba(140,151,172,0.20)]"
            style={{ width: '100%', height: 'auto' }}
            sizes="(max-width: 1512px) 100vw, 1512px"
          />
        </div>
        
      </div>
    );
  }
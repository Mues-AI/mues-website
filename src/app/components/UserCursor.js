import Image from 'next/image';
import CorneredLine from './CorneredLine.js';

export default function UserCursorCornered() {
    return (
        <div className="relative w-full max-w-[1512px] mx-auto p-24">

        <CorneredLine/>

        {/* İçerik (örnek resim veya div) */}
        <div className="relative z-20 max-w-[1174px] max-h-[665px] mx-auto">
          <Image quality={100} loading='lazy' unoptimized
            src="/images/userCursor.webp" alt="User Cursor Photo" width={1174} height={665} className="w-full h-auto max-h-[665px] object-cover drop-shadow-[0px_0px_4px_rgba(140,151,172,0.20)]"
          />
        </div>
        
      </div>
    );
  }
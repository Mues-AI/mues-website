import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { ArrowLeft } from "iconsax-react";
import ButtonWhite from "./components/ui/ButtonWhite.js";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar variant="light" />
      <div className="w-full px-6 sm:px-9 md:px-12 lg:px-18 ">
        <div className="w-full flex flex-col items-center gap-6 mt-24 md:mt-[148px] mb-[120px] md:mb-[124px]">
          <div className="w-fit h-fit bg-f8f8f8 rounded-full py-[7px] px-3 flex items-center justify-center gap-2">
            <div className="text-center text-[12px] leading-4 tracking-[0.12px] text-[#777]">
              Whoops...
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="text-primary-black text-center font-rethinkSans font-bold 
          text-[36px] leading-[48px] tracking-[0.36px]
          sm:text-[48px] sm:leading-[56px] sm:tracking-[0.48px]
          md:text-[52px] md:leading-[60px] md:tracking-[0.52px]
          lg:text-[56px] lg:leading-[64px] lg:tracking-[0.56px]"
          >
            404
          </h1>

          {/* Last Updated */}
          <p
            className="text-[#474645] text-center
          text-[14px] leading-[24px] tracking-[0.14px]
          sm:text-[16px] sm:leading-[28px] sm:tracking-[0.16px]
          lg:text-[20px] lg:leading-[36px] lg:tracking-[0.2px]"
          >
            The page you are looking <br /> for can&apos;t be found.
          </p>

          <Link href="/">
            <ButtonWhite
              ariaLabel="Back to home"
              className="mt-2 gap-2"
              icon={<ArrowLeft size="16" color="#17181A" />}
              iconPosition="left"
            >
              Back to home
            </ButtonWhite>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

import Image from "next/image";
import {
  BsFillPersonBadgeFill,
  BsRobot,
  BsRocketTakeoffFill,
} from "react-icons/bs";
import { GiPostStamp } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi2";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <div className="relative bg-[#121207] h-screen flex flex-row justify-between items-stretch">
          <div className="w-1/4 min-w-max bg-gradient-to-br from-black via-zinc-950 to-gray-800 rounded-[20px] m-4 mr-2 p-4 relative">
            <div>
              <div className="flex gap-4">
                <Image
                  src="/LegiCompanionLogo.png"
                  width={60}
                  height={60}
                  alt="Logo"
                />
                <div className="text-sm my-auto">
                  <div className="tracking-widest font-semibold">LEGI</div>
                  <div className="tracking-widest font-semibold">COMPANION</div>
                </div>
              </div>
              <svg
                className="my-4 w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="234"
                height="2"
                viewBox="0 0 234 2"
                fill="none"
              >
                <path
                  d="M0.292969 0.614014H233.543"
                  stroke="url(#paint0_linear_140_372)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_140_372"
                    x1="0.292969"
                    y1="0.614014"
                    x2="231.293"
                    y2="0.614014"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E0E1E2" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#E0E1E2" />
                    <stop
                      offset="1"
                      stopColor="#E0E1E2"
                      stopOpacity="0.15625"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                  <BsRobot />
                </div>
                <div>Legal Document AI</div>
              </div>
              <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                  <HiDocumentText />
                </div>
                <div>Document Generation</div>
              </div>
              <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                  <GiPostStamp />
                </div>
                <div>Stamp Paper Calculation</div>
              </div>
              <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                  <BsFillPersonBadgeFill />
                </div>
                <div>Legal Expert Consultation</div>
              </div>
            </div>
            <div className="absolute bottom-5 px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg right-4 left-4 group  hover:bg-[#1A1F37] cursor-pointer transition-all">
              <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                <BsRocketTakeoffFill />
              </div>
              <div>Log Out</div>
            </div>
          </div>

          <div className="w-full bg-gradient-to-br from-black via-zinc-950 to-gray-800 rounded-[20px] m-4 ml-2 p-3">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

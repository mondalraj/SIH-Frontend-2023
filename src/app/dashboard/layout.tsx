"use client";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../../config/Firebase";

import {
  BsFillPersonBadgeFill,
  BsRobot,
  BsRocketTakeoffFill,
} from "react-icons/bs";
import { GiPostStamp } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi2";
import "../globals.css";

// export const metadata: Metadata = {
//   title: "LC | Dashboard",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const State = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        router.push("/");
        // ...
      }
    });
  };

  useEffect(() => {
    State();
  }, [auth.currentUser?.uid]);
  return (
    <html lang="en">
      <body className="">
        <div className="relative bg-[#121207] min-h-screen max-h-max flex flex-row justify-between items-stretch">
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
                  <div className="tracking-widest font-semibold text-white">
                    LEGI
                  </div>
                  <div className="tracking-widest font-semibold text-white">
                    COMPANION
                  </div>
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
              <Link href="/dashboard/legal-document-ai">
                <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                  <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                    <BsRobot color="white" />
                  </div>
                  <div className="text-white">Legal Document AI</div>
                </div>
              </Link>
              <Link href="/dashboard/document-generation">
                <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                  <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                    <HiDocumentText color="white" />
                  </div>
                  <div className="text-white">Document Generation</div>
                </div>
              </Link>
              <Link href="/dashboard/stamp-paper-calculation">
                <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                  <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                    <GiPostStamp color="white" />
                  </div>
                  <div className="text-white">Stamp Paper Calculation</div>
                </div>
              </Link>
              <Link href="/dashboard/legal-expert">
                <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                  <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                    <BsFillPersonBadgeFill color="white" />
                  </div>
                  <div className="text-white">Legal Expert Consultation</div>
                </div>
              </Link>
            </div>
            <div onClick={() => auth.signOut()}>
              <div className="absolute bottom-5 px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg right-4 left-4 group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                  <BsRocketTakeoffFill color="white" />
                </div>
                <div className="text-white">Log Out</div>
              </div>
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

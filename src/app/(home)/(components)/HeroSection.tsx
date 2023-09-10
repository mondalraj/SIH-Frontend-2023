"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-between pt-20 bg-[#0C0C0C] text-white">
        <h1 className="font-bold text-5xl p-4">
          <Typewriter
            options={{
              strings: [
                "Simplify, Customize, Empower",
                "AI Precision, Human Touch",
                "Your Legal Journey, Our Guidance",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </h1>
        <p className="text-lg">
          Save time, reduce errors, and increase access to justice by automating
          legal document drafting in plain language with LegiCompanion.
        </p>
        <p className="text-lg ">
          Users can customize documents and access expert legal advice with
          needed.
        </p>
        <Image
          src="/images/gavel-img.png"
          width={700}
          height={500}
          alt="sample"
          className="mt-6"
        />
      </div>
      <div id="features" className="flex min-h-fit">
        <div className="flex-1 flex-col p-8 pt-16">
          <h1 className="font-bold text-3xl pt-4">
            Features That Empower <br /> Your Legal Journey
          </h1>
          <div>
            <button
              type="button"
              className="rounded-l-full rounded-tr-full bg-black px-16 py-2 mt-8 mb-3 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black tracking-widest"
            >
              Document Generation
            </button>
            <ul className="pr-20 m-12 mt-8 list-disc leading-loose">
              <li className="m-1 text-xl">
                This feature automatically generates legal documents in plain
                language, simplifying complex legal jargon for users.
              </li>
              <li className="m-1 mt-4 text-xl">
                Users provide essential information via a guided form, and the
                AI-driven system drafts comprehensive legal documents quickly
                and accurately.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex-col relative">
          <div className="bg-[#0c0c0c] w-3/4 h-2/3 absolute right-0 top-0">
            What is this?
          </div>
          <Image
            src="/images/doc-image.png"
            height={300}
            width={300}
            alt="sample"
            className="rounded-lg top-[8rem] absolute left-0 bottom-0 drop-shadow-2xl "
          />
        </div>
      </div>
      <div className="flex min-h-fit mb-14">
        <div className="flex-1 flex-col p-8 pt-16">
          <div>
            <button
              type="button"
              className="rounded-l-full rounded-tr-full bg-black px-16 py-2 mt-8 mb-3 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black tracking-widest"
            >
              Legal AI
            </button>
            <ul className="pr-20 m-12 mt-8 list-disc leading-loose">
              <li className="m-1 text-xl">
                Our AI-powered tool simplifies legal documents to help users
                better understand complex issues and resolve their doubts
                through interactive question-and-answer interactions with
                LegalAI.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex-col relative">
          <div className="bg-[#0c0c0c] w-3/4 h-2/3 absolute right-0 top-0">
            What is this?
          </div>
          <Image
            src="/images/legal-ai.jpeg"
            height={300}
            width={300}
            alt="sample"
            className="rounded-lg top-16 absolute left-0 bottom-0 drop-shadow-2xl "
          />
        </div>
      </div>
      <div className="flex min-h-fit">
        <div className="flex-1 flex-col p-8 pt-16">
          <div>
            <button
              type="button"
              className="rounded-l-full rounded-tr-full bg-black px-16 py-2 mt-8 mb-3 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black tracking-widest"
            >
              Customization
            </button>
            <ul className="pr-20 m-12 mt-8 list-disc leading-loose">
              <li className="m-1 text-xl">
                Tailor documents to meet specific needs. Users can customize
                agreements, contracts, and other legal forms to ensure they
                accurately reflect their requirements.
              </li>
              <li className="m-1 mt-4 text-xl">
                An intuitive interface allows users to make adjustments, add
                clauses, or modify terms while maintaining legal accuracy.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex-col relative">
          <div className="bg-[#0c0c0c] w-3/4 h-2/3 absolute right-0 top-0">
            What is this?
          </div>
          <Image
            src="/images/customization.png"
            height={300}
            width={300}
            alt="sample"
            className="rounded-lg top-16 absolute left-0 bottom-0 drop-shadow-2xl "
          />
        </div>
      </div>
      <div className="flex min-h-fit">
        <div className="flex-1 flex-col p-8 pt-16">
          <div>
            <button
              type="button"
              className="rounded-l-full rounded-tr-full bg-black px-16 py-2 mt-8 mb-3 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black tracking-widest"
            >
              Access to Expert Advice
            </button>
            <ul className="pr-20 m-12 mt-8 list-disc leading-loose">
              <li className="m-1 text-xl">
                Users can access legal experts when facing complex legal issues
                or requiring clarification.
              </li>
              <li className="m-1 mt-4 text-xl">
                A user-friendly system allows users to seek legal advice,
                schedule consultations, or get answers to legal queries,
                enhancing the overall user experience.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex-col relative">
          <div className="bg-[#0c0c0c] w-3/4 h-2/3 absolute right-0 top-0">
            What is this?
          </div>
          <Image
            src="/images/experts.png"
            height={300}
            width={300}
            alt="sample"
            className="rounded-lg top-16 absolute left-0 bottom-0 drop-shadow-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

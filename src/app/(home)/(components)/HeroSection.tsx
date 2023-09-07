import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-between pt-20 bg-[#0C0C0C] text-white">
        <h1 className="font-bold text-3xl p-4">Simplify, Customize, Empower</h1>
        <p className="text-sm p-2">
          Save time, reduce errors, and increase access to justice by automating
          legal document drafting in plain language with LegiCompanion.
        </p>
        <p className="text-sm">
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
      <div className="flex min-h-screen">
        <div className="flex-1 flex-col p-8 pt-16">
          <h1 className="font-bold text-3xl pt-4">
            Features That Empower <br /> Your Legal Journey
          </h1>
          <button
            type="button"
            className="rounded-l-full rounded-tr-full bg-black px-16 py-2 mt-8 mb-8 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black tracking-widest"
          >
            DOCUMENT GENERATION
          </button>
          <ul className="pr-20 m-12 mt-8 list-disc leading-loose">
            <li className="m-1">
              This feature automatically generates legal documents in plain
              language, simplifying complex legal jargon for users.
            </li>
            <li className="m-1">
              Users provide essential information via a guided form, and the
              AI-driven system drafts comprehensive legal documents quickly and
              accurately.
            </li>
          </ul>
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
            className="rounded-lg absolute left-0 bottom-0 drop-shadow-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

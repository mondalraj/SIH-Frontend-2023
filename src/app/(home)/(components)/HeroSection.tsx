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
          <h1 className="font-bold text-3xl p-4">
            Features That Empower <br /> Your Legal Journey
          </h1>
          <ul className="pr-20">
            <li>
              This feature automatically generates legal documents in plain
              language, simplifying complex legal jargon for users.
            </li>
            <li>
              Users provide essential information via a guided form, and the
              AI-driven system drafts comprehensive legal documents quickly and
              accurately.
            </li>
          </ul>
        </div>
        <div className="flex-1 flex-col">
          <Image
            src="/images/gavel.png"
            height={200}
            width={200}
            alt="sample"
          />
          <div className="bg-black w-20 h-20">What is this?</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

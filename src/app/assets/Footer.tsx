import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="mt-8 flex-1 ">
          <Image src="/images/logo.png" alt="Laptop" height={400} width={400} />
          <div className="my-6">
            <ul className="flex text-[14px] font-light">
              <li className="mx-4">Home</li>
              <li className="mx-4">Features</li>
              <li className="mx-4">About us</li>
              <li className="mx-4">Legal Resources</li>
            </ul>
          </div>
        </div>
        <div className="w-2/3 m-20 items-end px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-lg font-light">News letter</h1>
          <form
            action=""
            className="mt-4 inline-flex w-full items-center md:w-3/4"
          >
            <input
              className="flex h-10 w-full border-b-2 border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:border-b-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-black border-2 border-white px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <hr className="my-4 border-gray-600 mx-12" />
      <div className="mx-auto text-gray-400 max-w-6xl items-center justify-between pt-12 pb-4 px-8 md:flex lg:px-0">
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium ">
            © 2023 LegiCompanion. All rights reserved.
          </p>
        </div>
        <div className="inline-flex items-center">
          <ul className="flex text-[14px] font-medium ">
            <li className="mx-2">Terms of Service</li>
            <li className="mx-2">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

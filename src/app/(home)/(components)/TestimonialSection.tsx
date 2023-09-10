import Image from "next/image";

export function TestimonialSection() {
  return (
    <section id="testimonials" className="px-2 py-10 mt-20 md:px-0">
      <div className="mx-auto max-w-4xl">
        <Image
          src="/images/review-image.png"
          alt="Laptop"
          height={1200}
          width={1200}
        />
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          {/* <div className="relative h-48 w-48 flex-shrink-0">
            <Image
              className="relative h-48 w-48 rounded-full object-cover"
              src="/images/gavel-img.png"
              alt=""
              width={200}
              height={200}
            />
          </div> */}

          <div className="mt-12 text-center md:mt-0">
            <blockquote>
              <h1 className="text-3xl max-w-2xl font-bold text-black mx-auto mt-10">
                “I&apos;ve recommended this platform to several small business
                owners”
              </h1>
            </blockquote>
            <p className="text-sm p-2 max-w-xl mx-auto text-black">
              “I&apos;ve recommended this platform to several small business
              owners I know. It&apos;s a valuable resource for anyone looking to
              simplify their legal paperwork.”
            </p>

            <p className="mt-2 text-sm font-semibold text-black">
              Ramesh Sinha, Businessman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

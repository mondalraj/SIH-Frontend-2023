import BlogCard from "./(components)/BlogCard";
import { BlogCardSm } from "./(components)/BlogCardSm";
import { Button } from "./(components)/Button";

const page = () => {
  return (
    <div className="pt-16 p-4 bg-black text-white">
      <div className="flex mx-24 mb-4">
        <div className="flex-col w-2/5 h-full">
          <a href="blogs/blog">
            <img
              src="https://user-images.githubusercontent.com/86917304/265525358-1876345d-594c-4300-94d2-9dda07d063d8.png"
              alt="image"
            />
          </a>
        </div>
        <div className="flex-col w-3/5 p-4">
          <h1 className="text-xl font-bold mb-2">
            What really happens in chambers: Anatomy of litigation 101
          </h1>
          <p>
            They say if you want to die of poverty, struggling to make ends
            meet, with no money and even less of a reputation, then choose your
            profession wisely because there are very few professions which can
            make you into an irritating, socially ridiculed, annoying destitute
            as law.
          </p>
          <p>
            Of course things have changed much for the class of lawyers, there
            are those that daily earn in the range which CEOs make in a year,
            they are the quintessential movers and shakers of the power circuit
            in Delhi. Yet there exists the old between the new.{" "}
            <a href="/blogs/blog" className="text-sm font-semibold underline">
              Read Full Article
            </a>
          </p>
        </div>
      </div>
      <div className="py-7 ml-24">
        <h1 className="text-3xl font-semibold mb-2">Must Read</h1>
      </div>
      <div className="flex justify-evenly">
        <BlogCard
          Heading="Law Advice"
          id={3}
          Description="Read about the power of authorship and copyright"
          Image="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <BlogCard
          Heading="Legal Insights"
          id={5}
          Description="Stay updated with expert insights on the latest legal developments and cases."
          Image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8anVzdGljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
        <BlogCard
          Heading="Justice Journal"
          id={6}
          Description="A deep dive into the world of justice, rights, and the law."
          Image="https://images.unsplash.com/reserve/unsplash_52d3d6f9853e9_1.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGp1c3RpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div className="flex p-6 py-20">
        <div className="flex-col w-2/3">
          <h1 className="text-3xl font-semibold mb-5 ml-28">Popular Reads</h1>
          <div className="flex justify-evenly mx-2">
            <BlogCardSm
              Heading="Courting Justice"
              id={1}
              Description="Navigating the courts, ethics, and the pursuit of justice."
              Image="https://plus.unsplash.com/premium_photo-1661490362168-ed29e6592134?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8anVzdGljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            />
            <BlogCardSm
              Heading="Law & Beyond"
              id={2}
              Description="Beyond the statutes—discussing the broader implications of the law."
              Image="https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGF3fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            />
          </div>
          <div className="flex justify-evenly mx-2">
            <BlogCardSm
              id={3}
              Heading="Law Advice"
              Description="Read about the power of authorship and copyright"
              Image="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            />
            <BlogCardSm
              Heading="Legal Illuminations"
              id={4}
              Description="Shedding light on legal issues with clarity and expertise"
              Image="https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF3fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            />
          </div>
        </div>
        <div className="flex-col w-1/3">
          <h1 className="text-3xl font-semibold mb-2">Categories</h1>
          <div className="flex ">
            <div className="flex-grow space-x-3 space-y-6">
              <Button name="Criminal Law" />
              <Button name="Labor and Employment Law" />
              <Button name="Get Trial" />
              <Button name="Military Law" />
              <Button name="Civil Law" />
              <Button name="Get Trial" />
              <Button name="Administrative Law" />
              <Button name="Get Trial" />
              <Button name="Cybersecurity and Privacy Law" />
              <Button name="Family Law" />
              <Button name="Environment Law" />
              <Button name="Get Trial" />
              <Button name="Tax Law" />
              <Button name="Intellectual Property Law" />
              <Button name="Get Trial" />
              <Button name="Get Trial" />
              <Button name="Banking and Finance Law" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import { BlogCardProps } from "@/types/interfaces";
import Link from "next/link";

const BlogCard = ({ Description, Heading, Image, id }: BlogCardProps) => {
  return (
    <div>
      <div className="relative h-[250px] w-[350px] rounded-md">
        <img
          src={
            Image ||
            "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          }
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">
            {Heading || "Delba"}
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            {Description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"}
          </p>
          <Link href={`blogs/blog/${id}`}>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More &rarr;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

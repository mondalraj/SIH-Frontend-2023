import { BlogCardProps } from "@/types/interfaces";

export function BlogCardSm({ Description, Heading, Image }: BlogCardProps) {
  return (
    <div className="w-[300px] rounded-md p-2">
      <img
        src={
          Image ||
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        }
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-2">
        <h1 className="text-lg font-semibold">{Heading || "About Macbook"}</h1>
        <p className=" text-sm text-gray-200">
          {Description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"}
        </p>
      </div>
    </div>
  );
}

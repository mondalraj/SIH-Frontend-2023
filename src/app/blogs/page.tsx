import BlogCard from "./(components)/BlogCard";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-x-5">
        <BlogCard
          Heading="Law Advice"
          Description="Read about the power of authorship and copyright"
          Image="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <BlogCard
          Heading="Law Advice"
          Description="Read about the power of authorship and copyright"
          Image="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
      </div>
    </div>
  );
};

export default page;

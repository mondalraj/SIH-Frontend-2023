import Image from "next/image";

export function TeamsSection() {
  const membersArray = [
    {
      id: 1,
      name: "Vikram Ahuja",
      role: "Advocate",
    },
    {
      id: 2,
      name: "Imran Hasan",
      role: "Senior Advocate",
    },
    {
      id: 3,
      name: "Fatima",
      role: "Human Rights Lawyer",
    },
    {
      id: 4,
      name: "Harshad Jaiswal",
      role: "Criminal Rights Lawyer",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0 mt-20 bg-black text-white">
      <div className="mx-auto max-w-3xl pt-12  md:text-center">
        <h2 className="font-bold text-3xl leading-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight">
          Guiding You Through Legal Complexity
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-white md:text-sm">
          Counsel from experienced legal professionals who are here to provide
          answers, insights and guidance, ensuring <br /> you make well-informed
          decisions and navigate legal complexities with confidence.
        </p>
      </div>
      <div className="ml-4 mr-4 mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {membersArray.map((member, i) => (
          <div key={i} className="mx-auto w-[300px] rounded-md pb-12 ">
            <Image
              src={`/images/team-member-${member.id}.png`}
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
              height={200}
              width={200}
            />
            <div className="p-4">
              <h1 className="text-sm font-semibold">{member.name}</h1>
              <h6 className=" text-sm">{member.role}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

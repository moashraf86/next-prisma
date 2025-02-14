import prisma from "@/lib/prisma";

export default async function Home() {
  // get all users
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] ">
        Superblog
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <span className="font-bold">{user.name}</span> - {user.email}
          </li>
        ))}
      </ol>
    </div>
  );
}

import { auth } from "../_lib/Auth";

export const metadata={
  title:`inf`,
  description:`Providing the following information will make your check-in process
        faster and smoother. See you soon!`
}
export default async function Page() {
  const session = await auth()
  console.log(session)
  const lastName = session.user.name.split(" ").at(1)
  // CHANGE
 

  return (
    <div className="py-4 px-12">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4 text-yellow-400">
       Welcome, {lastName}
      </h2>   

    
    </div>
  );
}

// "use client";
import LoginForm from "../component/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/authOptions";
// import LoginWrapper from "../component/LoginWrapper";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/deshbord");
  return (
    
    <div>
      <LoginForm />
    </div>
  );
}

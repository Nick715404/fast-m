import { authConfig } from "@/utils/auth/auth";
import { getServerSession } from "next-auth"

export default async function ProfilePage() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <div className="container">
        <h1>Profile of {session?.user?.name}</h1>
        {session?.user?.image && <img src={session.user.image} alt="" />}
      </div>
    </div>
  )
}
import { getServerSession } from "next-auth";
import { Appbar } from "../components/Appbar";
import { NEXT_AUTH } from "../lib/auth";

export default async function () {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <p>client wala </p>
      <Appbar />
      <p></p>
      server Component
      <p></p>
      {JSON.stringify(session)}
    </div>
  );
}

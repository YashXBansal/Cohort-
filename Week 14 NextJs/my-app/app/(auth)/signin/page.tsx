import SignIn from "../../../components/Signin";

export default function signIn() {
  return (
    <div>
      <p className="bg-black text-red-700 text-center p-3">Sign in page</p>
      <SignIn />
      {/* getting this imported from Components folder :) */}
    </div>
  );
}

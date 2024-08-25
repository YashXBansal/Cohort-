"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push("/");
    } else {
      console.log("Failed to sign in", result?.error);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-gray-900 bg-opacity-80 shadow-2xl rounded-lg p-8 max-w-md w-full transform transition duration-500 hover:scale-105 hover:bg-gray-800">
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition duration-300"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition duration-300"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
          <hr className="w-full border-gray-700" />
          <span className="text-gray-400 mx-4">or</span>
          <hr className="w-full border-gray-700" />
        </div>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

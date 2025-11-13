"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-semibold mb-6 text-blue-700">
          Welcome to Week 9
        </h1>

        {!user ? (
          <>
            <p className="mb-4 text-gray-600">
              Please sign in with your GitHub account to continue.
            </p>
            <button
              onClick={gitHubSignIn}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign In with GitHub
            </button>
          </>
        ) : (
          <>
            <div className="mb-6">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-24 h-24 rounded-full mx-auto border-2 border-blue-500 mb-3"
              />
              <p className="text-lg font-medium text-gray-800">
                Hello, <span className="text-blue-700">{user.displayName}</span>!
              </p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/week-9/shopping-list"
                className="block w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Go to Your Shopping List
              </Link>

              <button
                onClick={firebaseSignOut}
                className="w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
              >
                Log Out
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

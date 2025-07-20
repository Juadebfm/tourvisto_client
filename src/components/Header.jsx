import React from "react";
import { useAuth } from "../context/AuthContext";
import { FaUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  // Bring in funcs needed from the auth context
  const { signOut, user, isSignedIn } = useAuth();
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
      {/* // houses the nav container for large screen styling */}
      <div className="max-w-7xl mx-auto p-6 md:p-16 lg:p-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className=" flex gap-2 items-center">
          <img src="/favicon.svg" alt="" />
          <span className="hidden md:block font-t_Jaka text-2xl font-bold text-t_black">
            Tourvisto
          </span>
        </div>

        {/* Auth Section */}
        {isSignedIn && user && (
          <div className="flex items-center gap-4">
            {/* // User's name or email or user firstname */}
            <div className="flex flex-col items-center">
              <span className="hidden md:block font-semibold">
                {user.fullName ||
                  user.firstName ||
                  user.primaryEmailAddress?.emailAddress ||
                  "user"}
              </span>
            </div>
            {/* user image / avatar */}
            <div>
              {user.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt={user.firstName || user.fullName}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <FaUser />
              )}
            </div>

            {/* Signout Button */}
            <button
              onClick={signOut}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 ease-linear"
            >
              <FaSignOutAlt className="text-red-500" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { createContext, useContext } from "react";
import { useAuth as useClerkAuth, useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

// Initialized the context
const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
  // using clerk's prebuilt methods or functions
  const { isSignedIn, signOut: clerkSignOut, isLoaded } = useClerkAuth();
  // We need a method that will or bring the data of created users from clerk
  const { user, isLoaded: userLoaded } = useUser();
  // When we confirm that the user is authenticated or we have the value from the user, then we redirect
  const { redirectToSignIn } = useClerk();
  // When all this is done we navigate the user to the homepage
  const navigate = useNavigate();

  // **************** //
  //   Signin Functionality
  const signIn = () => {
    console.log("Sign In Button Clicked");

    redirectToSignIn({
      redirectUrl: "/home", // where to go after successful signin
    });
  };

  // **************** //
  //   Signout Functionality
  const signOut = async () => {
    try {
      await clerkSignOut();
      navigate("/");
    } catch (error) {
      console.error("SignOut error:", error);
    }
  };

  // if (isSignedIn && user != null) {
  //   value.isSignedIn = true;
  // } else {
  //   value.isSignedIn = false;
  // }

  // if (isLoaded && userLoaded) {
  //   value.isLoaded = true;
  // } else {
  //   value.isLoaded = false;
  // }

  const value = {
    user,
    isSignedIn: isSignedIn && !!user,
    isLoaded: isLoaded && userLoaded,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth must be used within an AuthProvider");
  }

  return context;
};

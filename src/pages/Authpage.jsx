import { FaGoogle } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";

const Authpage = () => {
  const { signIn } = useAuth();
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* // Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* main content */}
      {/* [calc(100vh-120px)] */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex justify-center gap-2">
            <img src="/favicon.svg" alt="company logo" />
            <h1 className="font-t_Jaka text-[28px] font-bold">Tourvisto</h1>
          </div>

          <div className="flex items-center justify-center flex-col">
            <h2 className="capitalize font-semibold mt-8">
              Start Your Travel Journey
            </h2>
            <p className="text-t_paragraph text-lg mt-3 text-center">
              Sign in with Google to explore AI-generated itineraries, trending
              destinations, and much more
            </p>
          </div>

          <button
            onClick={signIn}
            className="w-full bg-t_blue hover:bg-t_blue/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mt-[30px]"
          >
            <FaGoogle />
            <span>Sign in with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authpage;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authpage from "./pages/Authpage";
import Homepage from "./pages/Homepage";
import TripDetailspage from "./pages/TripDetailspage";
import Paymentpage from "./pages/Paymentpage";
import Confirmationpage from "./pages/Confirmationpage";
import { ClerkProvider } from "@clerk/clerk-react";
import { AuthProvider } from "./context/AuthContext";
import { DestinationProvider } from "./context/DestinationContext";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <div className="overflow-x-hidden font-t_figtree text-t_black">
      <Router>
        <ClerkProvider publishableKey={clerkPubKey}>
          <AuthProvider>
            <DestinationProvider>
              <Routes>
                <Route path="/" element={<Authpage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/destination/:id" element={<TripDetailspage />} />
                <Route path="/trip-details" element={<TripDetailspage />} />
                <Route path="/payment-stripe" element={<Paymentpage />} />
                <Route
                  path="/payment-confirmation"
                  element={<Confirmationpage />}
                />
              </Routes>
            </DestinationProvider>
          </AuthProvider>
        </ClerkProvider>
      </Router>
    </div>
  );
};

export default App;

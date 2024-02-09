import { createContext, useEffect, useState } from "react";
import { MainLoader } from "../component";
// Create a context for sharing practitioner data across components
export const GlobalPractitionerContext = createContext(null);

export const GlobalPractitionerProvider = ({ children }) => {
  // State variables for loading state, practitioner data, and stored token
  const [isLoading, setIsLoading] = useState(true);
  const [userPractitioner, setUserPractitioner] = useState(null);
  const storedToken = JSON.parse(localStorage.getItem("integrated"));
  // Fetch practitioner details on component mount
  useEffect(() => {
    // Check for stored token
    if (!storedToken) {
      // No token, so clear practitioner data and stop loading
      setUserPractitioner(null);
      setIsLoading(false);
      return;
    }
    const getUserDetail = async () => {
      try {
        setIsLoading(true); // Indicate loading state
        // Fetch practitioner data from the API
        const response = await fetch(
          "https://integrated-server.onrender.com/api/practitioner",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        const data = await response.json();
        // Handle API response
        if (response.status === 200 && data.email && data.specialty) {
          // Success, store practitioner data
          setUserPractitioner(data);
          setIsLoading(false);
        } else if (
          // Authentication error, clear patient data
          response.status === 401 &&
          data.message === "Not authorized, token failed"
        ) {
          setUserPractitioner(null);
          setIsLoading(false);
        } else {
          setUserPractitioner(null);
          setIsLoading(false);
        }
      } catch (err) {
        // Handle fetch errors
        setIsLoading(false);
        setUserPractitioner(null);
      }
    };
    getUserDetail(); // Invoke the fetch function
  }, []);
  return (
    <GlobalPractitionerContext.Provider
      value={{ userPractitioner, setUserPractitioner }}
    >
      {isLoading ? <MainLoader /> : children}
    </GlobalPractitionerContext.Provider>
  );
};

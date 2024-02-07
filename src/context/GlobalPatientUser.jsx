import { createContext, useEffect, useState } from "react";
// Create a context for sharing patient data across components
export const GlobalPatientContext = createContext(null);

export const GlobalPatientProvider = ({ children }) => {
  // State variables for loading state, patient data, and stored token
  const [isLoading, setIsLoading] = useState(true);
  const [userPatient, setUserPatient] = useState(null);
  const storedToken = JSON.parse(localStorage.getItem("integrated"));
  // Fetch patient details on component mount
  useEffect(() => {
    // Check for stored token
    if (!storedToken) {
      // No token, so clear patient data and stop loading
      setUserPatient(null);
      setIsLoading(false);
      return;
    }
    const getUserDetail = async () => {
      try {
        setIsLoading(true); // Indicate loading state
        // Fetch patient data from the API
        const response = await fetch(
          "https://integrated-server.onrender.com/api/patient",
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
        if (response.status === 200 && data.email) {
          // Success, store patient data
          setUserPatient(data);
          setIsLoading(false);
        } else if (
          response.status === 401 &&
          data.message === "Not authorized, token failed"
        ) {
          // Authentication error, clear patient data
          setUserPatient(null);
          setIsLoading(false);
        } else {
          setUserPatient(null);
          setIsLoading(false);
        }
      } catch (err) {
        // Handle fetch errors
        setIsLoading(false);
        setUserPatient(null);
      }
    };
    getUserDetail(); // Invoke the fetch function
  }, []);
  return (
    <GlobalPatientContext.Provider value={{ userPatient, setUserPatient }}>
      {isLoading ? <p>loading...</p> : children}
    </GlobalPatientContext.Provider>
  );
};

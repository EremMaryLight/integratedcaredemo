let patientError = null; // Declare a variable to store potential errors during signup
// Function for patient signup
const patientSignup = async (firstName, lastName, email, password) => {
  try {
    // Send a POST request to the patient registration endpoint
    const response = await fetch(
      "https://integrated-server.onrender.com/api/patient",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      }
    );
    // Parse the response as JSON
    const data = await response.json();
    // Handle successful registration (status 201 and "success" message)
    if (response.status === 201 && data.message === "success") {
      patientError = null; // Clear any previous errors
      return true; // Signup successful
    } else if (
      // Handle specific error cases based on response status and message
      response.status === 400 &&
      data.message === "Patient already exists"
    ) {
      patientError = "Email already in-use";
      return false;
    } else if (response.status === 400 && data.message === "Invalid email") {
      patientError = "Invalid Email";
      return false;
    } else {
      patientError = "Something went wrong";
      return false; // Signup failed
    }
  } catch (err) {
    patientError = err.message; // Catch any general errors and set the error message
    return false; // Signup failed
  }
};

export { patientSignup, patientError };

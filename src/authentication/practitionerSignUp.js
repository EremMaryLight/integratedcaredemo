let practitionerError = null; // Declare a variable to store potential errors during signup
// Function for practitioner signup
const practitionerSignup = async (
  firstName,
  lastName,
  registrationNumber,
  specialty,
  workAddress,
  workPhoneNumber,
  email,
  password
) => {
  try {
    // Send a POST request to the patient registration endpoint
    const response = await fetch(
      "https://integrated-server.onrender.com/api/practitioner",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          registrationNumber,
          specialty,
          workAddress,
          workPhoneNumber,
          email,
          password,
        }),
      }
    );
    // Parse the response as JSON
    const data = await response.json();
    // Handle successful registration (status 201 and "success" message)
    if (response.status === 201 && data.message === "success") {
      practitionerError = null; // Clear any previous errors
      return true; // Signup successful
    } else if (
      // Handle specific error cases based on response status and message
      response.status === 400 &&
      data.message === "Practitioner already exists"
    ) {
      practitionerError = "Email already in-use";
      return false; // Signup failed
    } else if (response.status === 400 && data.message === "Invalid email") {
      practitionerError = "Invalid Email";
      return false; // Signup failed
    } else if (
      response.status === 500 &&
      /E11000 duplicate key error collection: test.practitioners/.test(
        data.message
      )
    ) {
      practitionerError = "Registration Number already exist";
      return false; // Signup failed
    } else {
      practitionerError = "Something went wrong";
      return false; // Signup failed
    }
  } catch (err) {
    practitionerError = err.message; // Catch any general errors and set the error message
    return false; // Signup failed
  }
};

export { practitionerSignup, practitionerError };

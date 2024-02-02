let patientError = null;
const patientSignup = async (firstName, lastName, email, password) => {
  try {
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
    const data = await response.json();
    if (response.status === 201 && data.message === "success") {
      patientError = null;
      return true;
    } else if (
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
      return false;
    }
  } catch (err) {
    patientError = err.message;
    return false;
  }
};

export { patientSignup, patientError };

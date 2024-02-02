let practitionerError = null;
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
    const data = await response.json();
    if (response.status === 201 && data.message === "success") {
      practitionerError = null;
      return true;
    } else if (
      response.status === 400 &&
      data.message === "practitioner already exists"
    ) {
      practitionerError = "Email already in-use";
      return false;
    } else if (response.status === 400 && data.message === "Invalid email") {
      practitionerError = "Invalid Email";
      return false;
    } else if (
      response.status === 400 &&
      data.message ===
        "E11000 duplicate key error collection: test.practitioners index: registrationNumber_1 dup key: { registrationNumber: 12345699 }"
    ) {
      practitionerError = "Registration Number already exist";
      return false;
    } else {
      practitionerError = "Something went wrong";
      return false;
    }
  } catch (err) {
    practitionerError = err.message;
    return false;
  }
};

export { practitionerSignup, practitionerError };

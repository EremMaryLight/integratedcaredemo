let practSigninError = null;
const practitionerSignin = async (email, password, remember) => {
  try {
    const response = await fetch(
      "https://integrated-server.onrender.com/api/practitioner/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await response.json();
    console.log(data, response);
    if (response.status === 200 && data.email) {
      practSigninError = null;
      remember
        ? localStorage.setItem("integrated", JSON.stringify(data.token))
        : null;
      return true;
    } else if (
      response.status === 401 &&
      data.message === "Invalid Email or Password"
    ) {
      practSigninError = "Incorrect Email or Password";
      return false;
    } else {
      practSigninError = "Something went wrong";
      return false;
    }
  } catch (err) {
    practSigninError = err.message;
    return false;
  }
};

export { practSigninError, practitionerSignin };

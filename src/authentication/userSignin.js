let userSigninError = null;
const userSignin = async (url, email, password, remember) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data, response);
    if (response.status === 200 && data.email) {
      userSigninError = null;
      remember
        ? localStorage.setItem("integrated", JSON.stringify(data.token))
        : null;
      return true;
    } else if (
      response.status === 401 &&
      data.message === "Invalid Email or Password"
    ) {
      userSigninError = "Incorrect Email or Password";
      return false;
    } else {
      userSigninError = "Something went wrong";
      return false;
    }
  } catch (err) {
    userSigninError = err.message;
    return false;
  }
};

export { userSignin, userSigninError };

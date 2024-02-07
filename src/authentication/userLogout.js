export const userLogout = () => {
  localStorage.removeItem("integrated");
  localStorage.removeItem("integratedUser");
};

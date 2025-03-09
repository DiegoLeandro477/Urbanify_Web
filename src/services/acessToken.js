export const saveToken = (token) => {
  try {
    localStorage.setItem("token", token);
  } catch (err) {
    console.error("[ACESS-TOKEN]: ", err);
  }
};

export const getToken = () => {
  try {
    return localStorage.getItem("token");
  } catch (err) {
    console.error("[ACESS-TOKEN]: ", err);
    return null;
  }
};

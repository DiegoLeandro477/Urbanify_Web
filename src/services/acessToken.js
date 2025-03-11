export const saveAccessToken = (accessToken) => {
  try {
    localStorage.setItem("accessToken", accessToken);
  } catch (err) {
    console.error("[ACESS-TOKEN]: ", err);
  }
};

export const saveRefreshToken = (refreshToken) => {
  try {
    localStorage.setItem("refreshToken", refreshToken);
  } catch (err) {
    console.error("[ACESS-TOKEN]: ", err);
  }
};

export const getAccessToken = () => {
  try {
    return localStorage.getItem("accessToken");
  } catch (err) {
    console.error("[ACESS-TOKEN]: ", err);
    return null;
  }
};

export const getRefreshToken = () => {
  try {
    return localStorage.getItem("refrashToken");
  } catch (err) {
    console.error("[ACESS-TOKEN]: ", err);
    return null;
  }
};

import axios from "axios";

const url_api = import.meta.env.VITE_URBANIFY_API;

export const login = async (obj) => {
  try {
    const response = await axios.post(`${url_api}/user/login`, obj, {
      headers: { "Content-Type": "application/json" },
    });

    return response;
  } catch (err) {
    console.error("[LOGIN]: ", err);
    return null;
  }
};

// FUNÇÕES PARA AS REQUISIÇÕES NECESSÁRIAS

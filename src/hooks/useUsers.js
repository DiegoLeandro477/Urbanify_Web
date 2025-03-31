import { useEffect, useState } from "react";
import { GET } from "../services/requestHTTP";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const findAllUsers = async () => {
    const res = await GET("/user");
    setUsers(res.data.users);
  };

  useEffect(() => {
    findAllUsers();
  }, []);

  return { users, setUsers };
};

export default useUsers;

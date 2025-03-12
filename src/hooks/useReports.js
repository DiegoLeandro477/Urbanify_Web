import { useEffect, useState } from "react";
import { GET } from "../services/requestHTTP";

const useReports = () => {
  const [reports, setReports] = useState([]);

  const findAllReports = async () => {
    console.log("[REPORT] >>> loading..");

    const res = await GET("/report");

    setReports(res.data.reports);
  };

  useEffect(() => {
    findAllReports();
  }, []);

  return { findAllReports, reports };
};

export default useReports;
